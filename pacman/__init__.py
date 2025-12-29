from decman import File, Module

from config import file


class Pacman(Module):
    def __init__(self):
        super().__init__(name="pacman", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            "/etc/pacman.conf": file("pacman/pacman.conf", perms=0o644),
        }
