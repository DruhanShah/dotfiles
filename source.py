import decman
import decman.config

from av import AudioServer, AVDrivers
from desktop import WM, Compositor, DesktopUtils
from devel import Devel, C, Python, Rust, LaTeX
from editor import Editor
from fonts import Fonts
from gaming import Games
from launchers import Launcher
from media import Multimedia
from net import Bluetooth, Networking
from shell import Shell, ShellUtils
from social import Discord
from terminal import Terminal, TerminalUtils
from wallpapers import Wallpapers
from web import Web


decman.config.debug_output = False
decman.config.quiet_output = True
decman.config.enable_flatpak = False

decman.packages += [
    "linux",
    "linux-firmware",
    "base",
    "base-devel",
    "efibootmgr",
    "grub",
    "zram-generator",
]
decman.aur_packages += ["decman"]
decman.flatpak_packages += []
decman.enabled_systemd_units += []
decman.modules += [
    AVDrivers(),
    AudioServer(),
    Bluetooth(),
    Networking(),
    DesktopUtils(),
    WM(),
    Compositor(),
    Fonts(),
    Wallpapers(),
    Launcher(),
    Devel(),
    C(),
    Python(),
    Rust(),
    LaTeX(),
    Editor(),
    Web(),
    Games(),
    Discord(),
    Multimedia(),
    Shell(),
    ShellUtils(),
    Terminal(),
    TerminalUtils()
]
