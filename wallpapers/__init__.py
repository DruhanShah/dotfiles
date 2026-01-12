from decman import Directory, Module

from config import USER


class Wallpapers(Module):
    def __init__(self):
        super().__init__(name="wallpapers", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"/home/{USER}/Wallpapers": Directory("wallpapers/Wallpapers"),
        }

    def aur_packages(self) -> list[str]:
        return [
            "i3lock-color",
        ]
