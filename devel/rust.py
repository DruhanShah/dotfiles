from decman import Module


class Rust(Module):
    def __init__(self):
        super().__init__(name="rust", enabled=True, version="1")

    def pacman_packages(self) -> list[str]:
        return [
            "rustup",
        ]
