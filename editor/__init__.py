from decman import File, Directory, Module

from config import CFG, file, directory


class Editor(Module):
    def __init__(self):
        super().__init__(name="editors", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"{CFG}/emacs/{filename}": file(f"editor/emacs/{filename}")
            for filename in ["init.el", "early-init.el", "not-init.el",
                             "README.org", "elfeed.opml", "elfeed.org"]
        }

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/nvim": directory("editor/nvim"),
            f"{CFG}/emacs/assets": directory("editor/emacs/assets"),
            f"{CFG}/emacs/nano": directory("editor/emacs/nano"),
            f"{CFG}/emacs/snippets": directory("editor/emacs/snippets"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "emacs",
            "neovim",
            "tree-sitter-cli",
        ]
