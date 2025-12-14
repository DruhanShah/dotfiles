from decman import File, Directory, Module, prg

from config import CFG, USER, file, directory


class WM(Module):
    def __init__(self):
        super().__init__(name="qtile", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/qtile": directory("desktop/qtile"),
        
        }

    def aur_packages(self) -> list[str]:
        return [
            "qtile-extras",
            "python-pulsectl-asyncio",
            "python-uptime",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "qtile",
            "python-dbus-fast",
        ]

    def on_update(self):
        prg("qtile cmd-obj -o cmd -f restart".split())


class Compositor(Module):
    def __init__(self):
        super().__init__(name="picom", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/picom": directory("desktop/picom"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "picom"
        ]


class DesktopUtils(Module):
    def __init__(self):
        super().__init__(name="desktoputils", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"/home/{USER}/.Xresources": file("desktop/.Xresources"),
        }

    def pacman_packages(self) -> list[str]:
        utils = [
            "brightnessctl",
            "flameshot",
            "lxappearance",
            "papirus-icon-theme",
            "qt5ct",
            "qt6ct",
            "redshift",
            "scrcpy",
        ]
        xorg = [
            "xcape",
            "xorg-server",
            "xorg-xev",
            "xorg-xinit",
            "xorg-xinput",
        ]
        return utils + xorg
