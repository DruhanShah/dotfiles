from decman import Module

from .python import Python
from .latex import LaTeX
from .lean import Lean
from .rust import Rust
from .c import C


class Devel(Module):
    def __init__(self):
        super().__init__(name="devel", enabled=True, version="1")

    def pacman_packages(self) -> list[str]:
        return [
            "git",
            "jdk-openjdk",
            "meson",
            "npm",
            "rclone",
            "rsync",
            "sassc",
            "syncthing",
            "docker",
            "docker-compose",
        ]


__all__ = [
    "Devel",
    "Python",
    "Lean",
    "LaTeX",
    "Rust",
    "C",
]
