from decman import Module


class Python(Module):
    def __init__(self):
        super().__init__(name="python", enabled=True, version="1")

    def pacman_packages(self) -> list[str]:
        return [
            "python",
            "uv",
            "python-lsp-server",
            "python-pam",
            "jupyter-notebook",
        ]
