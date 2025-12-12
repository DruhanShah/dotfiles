from decman import File, Directory, Module

from config import CFG, file, directory


class Multimedia(Module):
    def __init__(self):
        super().__init__(name="multimedia", enabled=True, version="1")

    # This is kinda funky cos I don't want everything else to be overwritten
    def files(self) -> dict[str, File]:
        return {
            f"{CFG}/calibre/{palette}.calibre-palette":
            file(f"media/calibre/{palette}.calibre-palette")
            for palette in ["catppuccin", "everforest", "flexoki"]
        }

    # This is nice and straightforward
    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/zathura/": directory("media/zathura"),
            f"{CFG}/mpv/": directory("media/mpv"),
            f"{CFG}/calibre/resources/images/": directory("media/calibre/resources/images"),
        }

    # Holy packages, pacman!
    def pacman_packages(self) -> list[str]:
        return [
            "calibre",
            "feh",
            "gimp",
            "imagemagick",
            "inkscape",
            "kdenlive",
            "kicad",
            "libreoffice-fresh",
            "mpv",
            "obs-studio",
            "openscad",
            "zathura",
            "zathura-pdf-mupdf",
        ]
