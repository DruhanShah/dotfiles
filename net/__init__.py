from decman import File, Module

from config import CFG, file


class Bluetooth(Module):
    def __init__(self):
        super().__init__(name="bluez", enabled=True, version="1")

    def systemd_units(self) -> list[str]:
        return [
            "bluetooth.service",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "blueman",
            "bluez",
            "bluez-utils",
        ]


class Networking(Module):
    def __init__(self):
        super().__init__(name="networking", enabled=True, version="1")

    def systemd_units(self) -> list[str]:
        return [
            "NetworkManager.service",
        ]

    def files(self) -> dict[str, File]:
        return {            
            f"{CFG}/linux.ovpn": file("net/linux.ovpn"),
        }

    def aur_packages(self) -> list[str]:
        return [
            "linux-wifi-hotspot-bin",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "dnsmasq",
            "kdeconnect",
            "networkmanager",
            "openssh",
            "openvpn",
            "networkmanager-openvpn",
        ]
