from decman import Module


class Fonts(Module):
    def __init__(self):
        super().__init__(name="fonts", enabled=True, version="1")

    def aur_packages(self) -> list[str]:
        return [
            "ttf-roboto-serif",
            "ttf-roboto-slab",
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "ttf-nerd-fonts-symbols",
            "ttf-roboto",
            "ttf-roboto-mono-nerd",
            "ttc-iosevka",
            "inter-font",
            "noto-fonts-cjk",
            "noto-fonts-emoji",
            "noto-fonts-extra",
        ]
