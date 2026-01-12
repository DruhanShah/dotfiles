from decman import Directory, Module

from config import CFG


class Terminal(Module):
    def __init__(self):
        super().__init__(name="kitty", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/kitty": Directory("terminal/kitty"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "kitty",
        ]


class TerminalUtils(Module):
    def __init__(self):
        super().__init__(name="termutils", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/ranger": Directory("terminal/ranger"),
            f"{CFG}/btop": Directory("terminal/btop"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "btop",
            "ranger",
            "gparted",
        ]
