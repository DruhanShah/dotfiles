from decman import Directory, Module

from config import CFG


class Launcher(Module):
    def __init__(self):
        super().__init__(name="rofi", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/rofi/": Directory("launchers/rofi"),
            # f"{CFG}/vicinae/": Directory("launchers/vicinae"),
        }

    def aur_packages(self) -> list[str]:
        return [
            "rofi-greenclip",
            # "vicinae-bin",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "rofi",
            "rofi-calc",
            "rofimoji",
        ]
