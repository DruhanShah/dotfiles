from decman import File, Directory, Module

from config import CFG


class Editor(Module):
    def __init__(self):
        super().__init__(name="editors", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"{CFG}/emacs/{filename}": File(f"editor/emacs/{filename}")
            for filename in ["init.el", "early-init.el", "not-init.el",
                             "README.org", "elfeed.opml", "elfeed.org"]
        }

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/nvim": Directory("editor/nvim"),
            f"{CFG}/emacs/assets": Directory("editor/emacs/assets"),
            f"{CFG}/emacs/nano": Directory("editor/emacs/nano"),
            f"{CFG}/emacs/snippets": Directory("editor/emacs/snippets"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "emacs",
            "neovim",
            "tree-sitter-cli",
        ]
