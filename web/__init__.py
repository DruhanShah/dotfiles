from decman import File, Module

from config import CFG, file


class Web(Module):
    def __init__(self):
        super().__init__(name="web", enabled=True, version="1")

    def files(self) -> dict[str, File]:
        return {
            f"{CFG}/userstyles/monkeytype.txt": file("web/monkeytype.txt"),
            f"{CFG}/userstyles/userstyle.less": file("web/userstyle.less"),
        }

    def aur_packages(self) -> list[str]:
        return [
            "brave-bin",
            "zen-browser-bin",
        ]
