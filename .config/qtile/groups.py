from libqtile.config import Group, ScratchPad, DropDown
from libqtile.config import Match
from theme import Theme


class Groups:

    def __init__(self):
        self.layouts = Theme.grp_layouts

    def init_groups(self, n=10, matches=[]):

        groups = [
            Group(str(i+1), label=" ")
            for i in range(n-len(matches))
        ]

        groups += [
            Group(str(n-i), label=" ", matches=[
                Match(**match)
                for match in matchlist
            ], exclusive=True)
            for i, matchlist in enumerate(matches)
        ]

        return groups

    def init_scratchpads(self, scratchpads):

        return ScratchPad("scratch", [
            DropDown(name, command, **self.layouts[name])
            for name, command, _ in scratchpads
        ])
