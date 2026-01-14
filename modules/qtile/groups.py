from libqtile.config import Group, ScratchPad, DropDown
from libqtile.config import Match
from theme import Theme


class Groups:

    def init_groups(n=10, matches=[]):
        groups = [
            Group(str(i+1), label=" ")
            for i in range(n-len(matches))
        ]
        groups += [
            Group(str(n-i), label=" ", matches=[
                Match(**match)
                for match in matchlist
            ])
            for i, matchlist in enumerate(matches)
        ]

        return groups

    def init_scratchpads(scratchpads):
        layouts = Theme.grp_layouts

        return ScratchPad("scratch", [
            DropDown(name, command, **layouts[name])
            for name, command, _ in scratchpads
        ])
