from decman import File, Directory, Module

from config import CFG


class Multimedia(Module):
    def __init__(self):
        super().__init__(name="multimedia", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"{CFG}/calibre/everforest.calibre-palette":
            File("media/calibre/everforest.calibre-palette")
        }

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/zathura/": Directory("media/zathura"),
            f"{CFG}/mpv/": Directory("media/mpv"),
            f"{CFG}/calibre/resources/images/": Directory("media/calibre/resources/images"),
        }

    # Holy packages, pacman!
    def pacman_packages(self) -> list[str]:
        return [
            "calibre",
            "feh",
            "gimp",
            "imagemagick",
            "inkscape",
            # "kdenlive",
            "kicad",
            # "libreoffice-fresh",
            "mpv",
            # "obs-studio",
            # "openscad",
            "zathura",
            "zathura-pdf-mupdf",
        ]
