from libqtile.config import Group, ScratchPad, DropDown
from aesthetics import GroupAesthetics

class Groups:

    def __init__(self):
        self.aesthetics = GroupAesthetics()

    def init_groups(self, n=10):
        return [Group(str(i), label=" ") for i in range(1, n+1)]

    def init_scratchpads(self, names, commands):
        return ScratchPad("scratch", [
            DropDown(name, command, **self.aesthetics.layout(name))
            for name, command in zip(names, commands)
        ])
