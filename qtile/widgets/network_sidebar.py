from libqtile.widget import TextBox
from libqtile.log_utils import logger
from libqtile.command.base import expose_command
from qtile_extras.widget.mixins import GraphicalWifiMixin, ExtendedPopupMixin
import subprocess
import re


class NetMasterWidget(TextBox, ExtendedPopupMixin):
    
    defaults = [
        ("interface_wifi", "wlan0", "WiFi interface name"),
        ("interface_ethernet", "eth0", "Ethernet interface name"),
        ("bluetooth_adapter", "hci0", "Bluetooth adapter name"),
        ("show_disconnected", True, "Show disconnected interfaces in popup"),
    ]

    def __init__(self, **config):
        TextBox.__init__(self, **config)

        # self.add_defaults(GraphicalWifiMixin.defaults)
        self.add_defaults(NetMasterWidget.defaults)
        # GraphicalWifiMixin.__init__(self)
        ExtendedPopupMixin.__init__(self, **config)
        
        self.add_callbacks({"Button1": self.show_popup})

    def _configure(self, qtile, bar):
        TextBox._configure(self, qtile, bar)
        # self.set_wifi_sizes()

    def poll(self):
        status = self._get_network_summary()
        wifi_info = self._get_wifi_info()
        
        if wifi_info["connected"]:
            self.signal_strength = wifi_info["signal_strength"]
            self.essid = wifi_info["ssid"]
        else:
            self.signal_strength = 0
            self.essid = "No WiFi"
        
        return status

    def _get_network_summary(self):
        wifi = self._get_wifi_info()
        ethernet = self._get_ethernet_info()
        bluetooth = self._get_bluetooth_info()
        
        status_parts = []
        if wifi["connected"]:
            status_parts.append(f"WiFi: {wifi['ssid']}")
        if ethernet["connected"]:
            status_parts.append("ETH")
        if bluetooth["connected_devices"]:
            status_parts.append(f"BT: {len(bluetooth['connected_devices'])}")
        
        return " | ".join(status_parts) if status_parts else "No Connection"

    def _get_wifi_info(self):
        try:
            result = subprocess.run(
                "nmcli -t -f ACTIVE,SSID,SIGNAL,FREQ,RATE,SECURITY dev wifi list --rescan no".split(),
                capture_output=True, text=True, timeout=5
            )
            
            wifi_info = {
                "connected": False,
                "ssid": None,
                "signal_strength": 0,
                "frequency": None,
                "rate": None,
                "security": None,
                "ip_address": None
            }
            
            if result.returncode == 0:
                for line in result.stdout.strip().split("\n"):
                    if line.startswith("yes:"):
                        parts = line.split(":")
                        if len(parts) >= 4:
                            wifi_info.update({
                                "connected": True,
                                "ssid": parts[1],
                                "signal_strength": int(parts[2]) if parts[2].isdigit() else 0,
                                "frequency": parts[3] if len(parts) > 3 else None,
                                "rate": parts[4] if len(parts) > 4 else None,
                                "security": parts[5] if len(parts) > 5 else None
                            })
                            break
            
            if wifi_info["connected"]:
                wifi_info["ip_address"] = self._get_interface_ip(self.interface_wifi)
            
            return wifi_info
            
        except Exception as e:
            logger.exception(f"Error getting WiFi info: {e}")
            return {
                "connected": False,
                "ssid": None,
                "signal_strength": 0,
                "frequency": None,
                "rate": None,
                "security": None,
                "ip_address": None
            }

    def _get_ethernet_info(self):
        try:
            result = subprocess.run(
                ["cat", f"/sys/class/net/{self.interface_ethernet}/operstate"],
                capture_output=True, text=True
            )
            
            ethernet_info = {
                "connected": False,
                "interface": self.interface_ethernet,
                "speed": None,
                "duplex": None,
                "ip_address": None
            }
            
            if result.returncode == 0 and result.stdout.strip() == "up":
                ethernet_info["connected"] = True
                ethernet_info["ip_address"] = self._get_interface_ip(self.interface_ethernet)
                
                try:
                    speed_result = subprocess.run(
                        ["cat", f"/sys/class/net/{self.interface_ethernet}/speed"],
                        capture_output=True, text=True
                    )
                    if speed_result.returncode == 0:
                        ethernet_info["speed"] = f"{speed_result.stdout.strip()}Mbps"
                except:
                    pass
            
            return ethernet_info
            
        except Exception as e:
            logger.exception(f"Error getting Ethernet info: {e}")
            return {
                "connected": False,
                "interface": self.interface_ethernet,
                "speed": None,
                "duplex": None,
                "ip_address": None
            }

    def _get_bluetooth_info(self):
        try:
            adapter_result = subprocess.run(
                ["bluetoothctl", "show", self.bluetooth_adapter],
                capture_output=True, text=True, timeout=5
            )
            
            bluetooth_info = {
                "adapter_powered": False,
                "adapter_discoverable": False,
                "adapter_pairable": False,
                "connected_devices": [],
                "paired_devices": []
            }
            
            if adapter_result.returncode == 0:
                output = adapter_result.stdout
                bluetooth_info["adapter_powered"] = "Powered: yes" in output
                bluetooth_info["adapter_discoverable"] = "Discoverable: yes" in output
                bluetooth_info["adapter_pairable"] = "Pairable: yes" in output
            
            if bluetooth_info["adapter_powered"]:
                for cmd in [
                        "bluetoothctl devices Connected",
                        "bluetoothctl devices Paired"
                ]:
                    devices_result = subprocess.run(
                        cmd.split(),
                        capture_output=True, text=True, timeout=5
                    )
                    target_list = (bluetooth_info["connected_devices"]
                                   if "Connected" in cmd
                                   else bluetooth_info["paired_devices"])
                    
                    if devices_result.returncode == 0:
                        for ln in devices_result.stdout.strip().split("\n"):
                            if ln.strip():
                                match = re.match(r"Device\s+([A-Fa-f0-9:]+)\s+(.+)", ln)
                                if match:
                                    target_list.append({
                                        "address": match.group(1),
                                        "name": match.group(2)
                                    })
            
            return bluetooth_info
            
        except Exception as e:
            logger.exception(f"Error getting Bluetooth info: {e}")
            return {
                "adapter_powered": False,
                "adapter_discoverable": False,
                "adapter_pairable": False,
                "connected_devices": [],
                "paired_devices": []
            }

    def _get_interface_ip(self, interface):
        try:
            result = subprocess.run(
                ["ip", "addr", "show", interface],
                capture_output=True, text=True
            )
            
            if result.returncode == 0:
                for line in result.stdout.split("\n"):
                    line = line.strip()
                    if line.startswith("inet ") and not line.startswith("inet 127."):
                        ip_match = re.search(r"inet\s+([0-9.]+)", line)
                        if ip_match:
                            return ip_match.group(1)
            return None
            
        except Exception as e:
            logger.exception(f"Error getting IP for {interface}: {e}")
            return None

    def _get_wifi_popup_data(self):
        wifi_info = self._get_wifi_info()
        
        if wifi_info["connected"]:
            return {
                "wifi_ssid": wifi_info["ssid"] or "Unknown Network",
                "wifi_status": f"Connected • {wifi_info['frequency'] or "N/A"}",
                "wifi_signal_strength": wifi_info["signal_strength"] / 100.0,
                "wifi_ip": wifi_info["ip_address"] or "No IP"
            }
        return {
            "wifi_ssid": "Not Connected",
            "wifi_status": "Disconnected",
            "wifi_signal_strength": 0.0,
            "wifi_ip": "N/A"
        }

    def _get_ethernet_popup_data(self):
        ethernet_info = self._get_ethernet_info()
        connected = ethernet_info["connected"]

        default_eth = "Unknown Speed" if connected else "N/A"
        default_ip = "No IP" if connected else "N/A"
        
        return {
            "ethernet_status": "Connected" if connected else "Disconnected",
            "ethernet_speed": ethernet_info["speed"] or default_eth,
            "ethernet_ip": ethernet_info["ip_address"] or default_ip,
            "ethernet_interface": ethernet_info["interface"]
        }

    def _get_internet_popup_data(self):
        internet_info = self._get_internet_info()
        
        return {
            "internet_status": ("Connected"
                                if internet_info["connected"]
                                else "No Internet"),
            "public_ip": internet_info["public_ip"] or "Unknown",
            "dns_servers": (", ".join(internet_info["dns_servers"][:2])
                            if internet_info["dns_servers"]
                            else "N/A")
        }

    def _get_bluetooth_popup_data(self):
        bt_info = self._get_bluetooth_info()
        all_bt_devices = bt_info["connected_devices"] + bt_info["paired_devices"]
        
        popup_data = {
            "bt_status": ("Powered On"
                                 if bt_info["adapter_powered"]
                                 else "Powered Off"),
            "bt_connected_count": f"{len(bt_info['connected_devices'])} Connected",
            "bt_adapter_name": self.bluetooth_adapter
        }
        
        for i in range(6):
            if i < len(all_bt_devices):
                device = all_bt_devices[i]
                popup_data[f"bt_dev_{i}_name"] = device["name"]
                popup_data[f"bt_dev_{i}_status"] = ("Connected"
                                                    if device in bt_info["connected_devices"]
                                                    else "Paired")
            else:
                popup_data[f"bt_dev_{i}_name"] = ""
                popup_data[f"bt_dev_{i}_status"] = ""

        return popup_data

    def _get_available_wifi_popup_data(self):
        available_networks = self._get_available_wifi_networks()
        popup_data = {}
        
        for i in range(6):
            if i < len(available_networks):
                network = available_networks[i]
                popup_data[f"wnet_{i}_ssid"] = network["ssid"]
                popup_data[f"wnet_{i}_signal"] = f"{network["signal"]}%"
                popup_data[f"wnet_{i}_security"] = network["security"]
            else:
                popup_data[f"wnet_{i}_ssid"] = ""
                popup_data[f"wnet_{i}_signal"] = ""
                popup_data[f"wnet_{i}_security"] = ""
        
        return popup_data

    def update_popup(self):
        self.extended_popup.update_controls(
            **self._get_wifi_popup_data(),
            **self._get_ethernet_popup_data(),
            **self._get_internet_popup_data(),
            **self._get_bluetooth_popup_data(),
            # **self._get_available_wifi_popup_data()
        )

    def _get_internet_info(self):
        try:
            result = subprocess.run(
                "ping -c 1 -W 2 8.8.8.8".split(),
                capture_output=True, text=True, timeout=4
            )
            internet_info = {
                "connected": result.returncode == 0,
                "public_ip": None,
                "dns_servers": []
            }
            
            if internet_info["connected"]:
                try:
                    ip_result = subprocess.run(
                        "curl -s --max-time 3 ifconfig.me".split(),
                        capture_output=True, text=True, timeout=5
                    )
                    if ip_result.returncode == 0:
                        internet_info["public_ip"] = ip_result.stdout.strip()
                except:
                    pass
                
                try:
                    dns_result = subprocess.run(
                        ["resolvectl", "dns"],
                        capture_output=True, text=True, timeout=3
                    )
                    if dns_result.returncode == 0:
                        for line in dns_result.stdout.split("\n"):
                            if "DNS Servers:" in line:
                                internet_info["dns_servers"] = line.split("DNS Servers:")[1].strip().split()
                                break
                except:
                    try:
                        with open("/etc/resolv.conf", "r") as f:
                            internet_info["dns_servers"] = [
                                line.split()[1]
                                for line in f
                                if line.startswith("nameserver")
                            ]
                    except:
                        pass
            
            return internet_info
            
        except Exception as e:
            logger.exception(f"Error getting internet info: {e}")
            return {
                "connected": False,
                "public_ip": None,
                "dns_servers": []
            }

    def _get_available_wifi_networks(self):
        try:
            result = subprocess.run(
                "nmcli -t -f SSID,SIGNAL,SECURITY dev wifi list --rescan yes".split(),
                capture_output=True, text=True, timeout=10
            )
            
            networks = []
            if result.returncode == 0:
                seen_ssids = set()
                for line in result.stdout.strip().split("\n"):
                    if line and ":" in line:
                        parts = line.split(":")
                        if len(parts) >= 3:
                            ssid = parts[0].strip()
                            signal = parts[1].strip()
                            security = parts[2].strip() if parts[2] else "Open"
                            
                            if ssid and ssid not in seen_ssids:
                                seen_ssids.add(ssid)
                                networks.append({
                                    "ssid": ssid,
                                    "signal": int(signal) if signal.isdigit() else 0,
                                    "security": security or "Open"
                                })
                
                networks.sort(key=lambda x: x["signal"], reverse=True)
            
            return networks[:10]
            
        except Exception as e:
            logger.exception(f"Error getting available WiFi networks: {e}")
            return []

    # def draw(self):
    #     self.draw_wifi(
    #         percentage=0.5,
    #         foreground=self.active,
    #         background=self.inactive
    #     )
