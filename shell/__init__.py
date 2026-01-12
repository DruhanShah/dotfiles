from decman import File, Directory, Module

from config import CFG, LCL


class Shell(Module):
    def __init__(self):
        super().__init__(name="fish", enabled=True, version="1")

    def directories(self) -> dict[str, Directory]:
        return {
            f"{CFG}/fish/": Directory("shell/fish"),
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
            f"{LCL}/bin/lock": File("shell/bin/lock", permissions=0o777),
            f"{LCL}/bin/nltk": File("shell/bin/nltk", permissions=0o777),
            f"{LCL}/bin/touchpad": File("shell/bin/touchpad", permissions=0o777),
            f"{LCL}/bin/rofi_master": File("shell/bin/rofi_master", permissions=0o777),
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
