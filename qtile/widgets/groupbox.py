from qtile_extras.widget import GroupBox2
from qtile_extras.widget.groupbox2 import GroupBoxRule
from math import pi

class GroupBoxWidget(GroupBox2):

    def __init__(self, **config):
        GroupBox2.__init__(self, **config)
        if self.mode == "tabs":
            draw_func = lambda b: self.tab_draw_func(b)
        elif self.mode == "tab_pills":
            draw_func = lambda b: self.tabpill_draw_func(b)
        elif self.mode == "pills":
            draw_func = lambda b: self.pill_draw_func(b)
        
        self.rules = [
            GroupBoxRule(custom_draw=draw_func).when(),
            GroupBoxRule(box_size=2*self.size).when(focused=True),
            GroupBoxRule(box_size=self.size).when(focused=False),
        ]

    def tabpill_draw_func(self, box):
        curr_idx = int(box.qtile.current_group.name)
        box_idx = int(box.group.name)
        
        l = box.size
        w = box.bar.width//2 if box.focused else box.bar.width*self.shrink//2
        c = box.bar.width//2

        col = self.occupied if box.occupied else self.inactive
        col = self.active if box.focused else col

        def draw_shape():
            if box_idx < curr_idx:
                box.drawer.ctx.move_to(c-w/2, w/4+3)
                box.drawer.ctx.line_to(c, 3)
                box.drawer.ctx.line_to(c+w/2, w/4+3)
                box.drawer.ctx.line_to(c+w/2, l+w/4-3)
                box.drawer.ctx.line_to(c, l-3)
                box.drawer.ctx.line_to(c-w/2, l+w/4-3)
                box.drawer.ctx.line_to(c-w/2, w/4+3)
            elif box_idx > curr_idx:
                box.drawer.ctx.move_to(c-w/2, -w/4+3)
                box.drawer.ctx.line_to(c, 3)
                box.drawer.ctx.line_to(c+w/2, -w/4+3)
                box.drawer.ctx.line_to(c+w/2, l-w/4-3)
                box.drawer.ctx.line_to(c, l-3)
                box.drawer.ctx.line_to(c-w/2, l-w/4-3)
                box.drawer.ctx.line_to(c-w/2, -w/4+3)
            else:
                box.drawer.ctx.move_to(c-w/2, w/4+3)
                box.drawer.ctx.line_to(c, 3)
                box.drawer.ctx.line_to(c+w/2, w/4+3)
                box.drawer.ctx.line_to(c+w/2, l-w/4-3)
                box.drawer.ctx.line_to(c, l-3)
                box.drawer.ctx.line_to(c-w/2, l-w/4-3)
                box.drawer.ctx.line_to(c-w/2, -w/4+3)

        draw_shape()
        box.drawer.set_source_rgb(col)
        box.drawer.ctx.fill()

    def pill_draw_func(self, box):
        curr_idx = int(box.qtile.current_group.name)
        box_idx = int(box.group.name)
        
        l = box.size
        r = self.radius
        cx = box.bar.width//2 if self.vertical else box.size//2
        cy = box.size//2 if self.vertical else box.bar.height//2

        col = self.occupied if box.occupied else self.inactive
        col = self.active if box.focused else col

        def draw_shape():
            if box_idx != curr_idx:
                if self.vertical:
                    box.drawer.ctx.move_to(cx-r, cy)
                    box.drawer.ctx.arc(cx, cy-r//2, r, pi, 0)
                    box.drawer.ctx.arc(cx, cy+r//2, r, 0, pi)
                else:
                    box.drawer.ctx.move_to(cx, cy+r)
                    box.drawer.ctx.arc(cx-r//2, cy, r, pi, 0)
                    box.drawer.ctx.arc(cx+r//2, cy, r, 0, pi)
            else:
                if self.vertical:
                    box.drawer.ctx.move_to(cx-r, cy)
                    box.drawer.ctx.arc(cx, cy - l//2 + 1.5*r, r, pi, 0)
                    box.drawer.ctx.arc(cx, cy + l//2 - 1.5*r, r, 0, pi)
                else:
                    box.drawer.ctx.move_to(cx, cy+r)
                    box.drawer.ctx.arc(cx - l//2 + 1.5*r, cy, r, pi/2, -pi/2)
                    box.drawer.ctx.arc(cx + l//2 - 1.5*r, cy, r, -pi/2, pi/2)

        draw_shape()
        box.drawer.set_source_rgb(col)
        box.drawer.ctx.fill()

    def tab_draw_func(self, box):
        curr_idx = int(box.qtile.current_group.name)
        box_idx = int(box.group.name)
        
        r = self.radius
        l = box.size
        w = box.bar.width-1 if box.focused else box.bar.width*self.shrink

        def draw_shape():
            if box_idx <= curr_idx:
                box.drawer.ctx.arc_negative(r, 0, r, pi, pi/2)
                box.drawer.ctx.arc(w-r, 2*r, r, -pi/2, 0)
            else:
                box.drawer.ctx.arc(r, 0, r, pi, -pi/2)
                box.drawer.ctx.arc(w-r, 0, r, -pi/2, 0)

            if box_idx < curr_idx:
                box.drawer.ctx.arc(w-r, l, r, 0, pi/2)
                box.drawer.ctx.arc(r, l, r, pi/2, pi)
            else:
                box.drawer.ctx.arc(w-r, l-2*r, r, 0, pi/2)
                box.drawer.ctx.arc_negative(r, l, r, -pi/2, pi)

        draw_shape()
        box.drawer.set_source_rgb(self.active if box.focused else self.inactive)
        box.drawer.ctx.fill()
        draw_shape()
        box.drawer.set_source_rgb(self.occupied)
        box.drawer.ctx.set_line_width(width=0.5)
        box.drawer.ctx.stroke()

        if box.occupied:
            if box_idx < curr_idx:
                c_x, c_y = w/2, r + l/2
            elif box_idx > curr_idx:
                c_x, c_y = w/2, l/2 - r
            else:
                c_x, c_y = w/2, l/2
            box.drawer.ctx.move_to(c_x, c_y)
            box.drawer.ctx.arc(c_x, c_y, r/2, 0, 2*pi)
            box.drawer.set_source_rgb(self.occupied)
            box.drawer.ctx.fill()

