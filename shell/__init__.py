from decman import File, Directory, Module

from config import CFG, LCL, file, directory


class Shell(Module):
    def __init__(self):
        super().__init__(name="fish", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/fish/": directory("shell/fish"),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "fish",
        ]



class ShellUtils(Module):
    def __init__(self):
        super().__init__(name="shellutils", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"{LCL}/bin/lock": file("shell/bin/lock", perms=0x777),
            f"{LCL}/bin/nltk": file("shell/bin/nltk", perms=0x777),
            f"{LCL}/bin/touchpad": file("shell/bin/touchpad", perms=0x777),
        }

    def pacman_packages(self) -> list[str]:
        return [
            "man-db",
            "trash-cli",
            "unrar",
            "unzip",
            "zip",
            "atool",
        ]
