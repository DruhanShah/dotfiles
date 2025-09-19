from libqtile.config import Group, ScratchPad, DropDown
from theme import Theme


class Groups:

    def __init__(self):
        self.layouts = Theme.grp_layouts

    def init_groups(self, n=10):

        return [Group(str(i), label=" ") for i in range(1, n+1)]

    def init_scratchpads(self, scratchpads):

        return ScratchPad("scratch", [
            DropDown(name, command, **self.layouts[name])
            for name, command, _ in scratchpads
        ])
