from decman import Module


class Games(Module):
    def __init__(self):
        super().__init__(name="games", enabled=True, version="1")

    def aur_packages(self) -> list[str]:
        return [
            "mindustry",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "0ad",
            "steam",
            "vulkan-intel",
            "vulkan-tools",
        ]
