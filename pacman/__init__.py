from decman import File, Module


class Pacman(Module):
    def __init__(self):
        super().__init__(name="pacman", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            "/etc/pacman.conf": File("pacman/pacman.conf", permissions=0o644),
        }
