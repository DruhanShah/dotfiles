from __future__ import annotations

import asyncio
import logging
import os
import subprocess
from pathlib import Path
from typing import Optional

from libqtile.widget import base
from libqtile import bar
from qtile_extras.widget.mixins import GraphicalWifiMixin, ConnectionCheckMixin

try:
    import gi

    gi.require_version("Rsvg", "2.0")
    from gi.repository import Rsvg  # type: ignore

    HAVE_RSVG = True
except Exception:
    HAVE_RSVG = False

ETH_SVG = Path("~/.config/qtile/assets/networks/ethernet.svg")
DISC_SVG = Path("~/.config/qtile/assets/networks/disconnect.svg")

logger = logging.getLogger(__name__)


def _detect_default_iface(probe_host="1.1.1.1"):
    try:
        out = subprocess.check_output(["ip", "route", "get", probe_host],
                                      stderr=subprocess.DEVNULL, text=True)
        parts = out.split()
        if "dev" in parts:
            idx = parts.index("dev")
            if idx + 1 < len(parts):
                return parts[idx + 1]
    except Exception:
        try:
            for ifname in os.listdir("/sys/class/net"):
                if ifname == "lo":
                    continue
                return ifname
        except Exception:
            return None
    return None


def _iface_is_wireless(ifname: str) -> bool:
    return os.path.isdir(f"/sys/class/net/{ifname}/wireless")


def _wifi_quality_from_proc(ifname: str) -> Optional[float]:
    with open("/proc/net/wireless", "r") as f:
        lines = f.readlines()
    for line in lines[2:]:
        if line.strip().startswith(ifname + ":"):
            parts = line.split()
            quality = float(parts[2])
            return max(0.0, min(1.0, quality / 70.0))
    return None


class AsyncNetSpeedIcon(base._Widget, base.PaddingMixin,
                        GraphicalWifiMixin, ConnectionCheckMixin):

    defaults = [
        ("interface", None, "Interface name (auto-detected if None)."),
        ("update_interval", 4, "How often to refresh wifi/link state (seconds)."),
        ("speed_interval", 30, "How often to run speed probes (seconds)."),
        ("speed_method", "latency", "Metric that can be 'latency' or 'download'."),
        ("speed_host", "1.1.1.1", "Host used for latency probes (and route detection)."),
        ("speed_port", 53, "Port used for latency probes."),
        ("download_url", "https://speed.hetzner.de/100MB.bin", "URL used for optional download probe."),
        ("speed_timeout", 5, "Timeout (seconds) for speed probes."),
        ("show_text", False, "Show interface/speed text beside icon."),
        ("disconnected_colour", "ff4444", "Colour for disconnected fallback icon."),
        ("ethernet_colour", "cccccc", "Colour for ethernet fallback icon."),
        ("ethernet_svg_path", None, "Path to external SVG for ethernet (optional)."),
        ("disconnected_svg_path", None, "Path to external SVG for disconnected (optional)."),
    ]

    def __init__(self, **config):
        base._Widget.__init__(self, bar.CALCULATED, **config)
        self.add_defaults(AsyncNetSpeedIcon.defaults)
        self.add_defaults(GraphicalWifiMixin.defaults)
        self.add_defaults(ConnectionCheckMixin.defaults)
        GraphicalWifiMixin.__init__(self)
        ConnectionCheckMixin.__init__(self)

        self.iface: Optional[str] = self.interface
        self.is_wireless: Optional[bool] = None
        self.percent: float = 0.0
        self.last_speed: Optional[float] = None
        self._update_task: Optional[asyncio.Task] = None
        self._speed_task: Optional[asyncio.Task] = None

        self._ethernet_svg_bytes: Optional[bytes] = None
        self._disconnected_svg_bytes: Optional[bytes] = None
        self._load_svg_paths()

    def _load_svg_paths(self):
        if self.ethernet_svg_path:
            p = Path(self.ethernet_svg_path).expanduser()
            self._ethernet_svg_bytes = p.read_bytes()
        if self.disconnected_svg_path:
            p = Path(self.disconnected_svg_path).expanduser()
            self._disconnected_svg_bytes = p.read_bytes()

    def _configure(self, qtile, bar):
        base._Widget._configure(self, qtile, bar)
        self.set_wifi_sizes()
        ConnectionCheckMixin._configure(self)

    async def _config_async(self):
        self.iface = self.iface or _detect_default_iface(self.speed_host)
        self.is_wireless = bool(self.iface and _iface_is_wireless(self.iface))

        loop = asyncio.get_running_loop()
        self._update_task = loop.create_task(self._periodic_update())
        self._speed_task = loop.create_task(self._periodic_speed_check())

    def _render_svg(self, svg_bytes, x, y, width, height):
        if not HAVE_RSVG or not svg_bytes:
            return False

        handle = Rsvg.Handle.new_from_data(svg_bytes)
        dim = handle.get_dimensions()
        svg_w, svg_h = dim.width or 64, dim.height or 64
        ctx = self.drawer.ctx
        ctx.save()
        ctx.translate(x, y)
        sx = width / svg_w
        sy = height / svg_h
        ctx.scale(sx, sy)
        handle.render_cairo(ctx)
        ctx.restore()
        return True

    def draw(self):
        if not self.configured:
            return

        self.drawer.clear(self.background or self.bar.background)

        if not self.iface:
            self._render_svg(
                self._disconnected_svg_bytes, self.wifi_padding_x,
                self.wifi_padding_y, int(self.icon_size), int(self.icon_size)
            )
        elif self.is_wireless:
            self.draw_wifi(
                percentage=max(0.0, min(1.0, self.percent)),
                foreground=(self.active
                            if self.is_connected
                            else self.disconnected),
                background=self.inactive,
            )
        else:
            self._render_svg(
                self._ethernet_svg_bytes, self.wifi_padding_x,
                self.wifi_padding_y, int(self.icon_size), int(self.icon_size)
            )

        self.draw_at_default_position()

    async def _periodic_update(self):
        while True:
            try:
                self.iface = self.iface or _detect_default_iface(self.speed_host)
                if self.iface:
                    self.is_wireless = _iface_is_wireless(self.iface)
                    if self.is_wireless:
                        q = _wifi_quality_from_proc(self.iface)
                        self.percent = q if q is not None else 0.0
                    else:
                        self.percent = 1.0
                if self.show_text:
                    self.bar.draw()
                else:
                    self.draw()
            except Exception:
                logger.debug("Error in _periodic_update loop", exc_info=True)
            await asyncio.sleep(self.update_interval)

    async def _latency_probe(self, host: str, port: int, timeout: float):
        try:
            start = asyncio.get_event_loop().time()
            fut = asyncio.open_connection(host, port)
            reader, writer = await asyncio.wait_for(fut, timeout=timeout)
            elapsed = asyncio.get_event_loop().time() - start
            try:
                writer.close()
                await writer.wait_closed()
            except Exception:
                pass
            return elapsed
        except Exception:
            return None

    async def _periodic_speed_check(self):
        while True:
            try:
                lat = await self._latency_probe(self.speed_host,
                                                self.speed_port,
                                                self.speed_timeout)
                self.last_speed = lat
                if self.show_text:
                    self.bar.draw()
                else:
                    self.draw()
            except Exception:
                logger.debug("Error in _periodic_speed_check loop")
            await asyncio.sleep(self.speed_interval)
