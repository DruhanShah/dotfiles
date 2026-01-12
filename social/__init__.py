from decman import File, Module

from config import CFG


BD_THEME = f"{CFG}/BetterDiscord/themes"


class Discord(Module):
    def __init__(self):
        super().__init__(name="discord", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        betterdiscord = {
            f"{BD_THEME}/{theme}.theme.css": File(f"social/{theme}.theme.css")
            for theme in ["everforest-light", "flexoki-light", "midnight-latte"]
        }
        return betterdiscord

    def pacman_packages(self) -> list[str]:
        return [
            "discord",
        ]

    def aur_packages(self) -> list[str]:
        return [
            "betterdiscordctl",
        ]
