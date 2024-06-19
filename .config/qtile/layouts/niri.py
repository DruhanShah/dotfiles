from libqtile.layout import base
from libqtile.command.base import expose_command
from libqtile.log_utils import logger


class Column(base._ClientList):
    cw = base._ClientList.current_client
    current = base._ClientList.current_index

    def __init__(self, insert_position, width=100):
        base._ClientList.__init__(self)
        self.width = width
        self.insert_position = insert_position
        self.heights = {}

    @expose_command()
    def info(self):
        info = base._ClientList.info(self)
        info.update(
            dict(
                heights=[self.heights[c] for c in self.clients],
                split=True,
            )
        )
        return info

    def add_client(self, client, height=100):
        base._ClientList.add_client(self, client, self.insert_position)
        self.heights[client] = height
        delta = 100 - height
        if delta != 0:
            n = len(self)
            growth = [int(delta / n)] * n
            growth[0] += delta - sum(growth)
            for c, g in zip(self, growth):
                self.heights[c] += g

    def remove(self, client):
        base._ClientList.remove(self, client)
        delta = self.heights[client] - 100
        del self.heights[client]
        if delta != 0:
            n = len(self)
            growth = [int(delta / n)] * n
            growth[0] += delta - sum(growth)
            for c, g in zip(self, growth):
                self.heights[c] += g

    def __str__(self):
        cur = self.current
        return "Column: " + ", ".join([
                "[%s: %d]" % (c.name, self.heights[c])
                if c == cur
                else "%s: %d" % (c.name, self.heights[c])
                for c in self.clients
            ])


class Scrolling(base.Layout):

    defaults = [
        ("border_width", 0, "Border width"),
        ("border_focus", "ffffff", "Border colour of focused window"),
        ("border_normal", "000000", "Border colour of unfocused window"),
        ("default_width", 50, "Default window width"),
        ("margin", 0, "Margin between windows"),
        ("width_rules", {}, "Rules for setting custom width"),
    ]
    viewx = 0

    def __init__(self, **config):
        base.Layout.__init__(self, **config)
        self.add_defaults(Scrolling.defaults)
        self.current = 0
        self.columns = [Column(0, self.default_width)]

    @property
    def cc(self):
        return self.columns[self.current]

    def clone(self, group):
        c = base.Layout.clone(self, group)
        c.current = 0
        c.columns = [Column(0, c.default_width)]
        return c

    def get_windows(self):
        clients = []
        for c in self.columns:
            clients.extend(c.clients)
        return clients

    @expose_command()
    def info(self):
        d = base.Layout.info(self)
        d["clients"] = []
        d["columns"] = []
        for c in self.columns:
            cinfo = c.info()
            d["clients"].extend(cinfo["clients"])
            d["columns"].append(cinfo)
        d["current"] = self.current
        return d

    def focus(self, client):
        for i, c in enumerate(self.columns):
            if client in c:
                c.focus(client)
                self.current = i
                break
            self.viewx += c.width

    def add_column(self, width):
        c = Column(self.insert_position, width)
        self.columns.append(c)
        return c

    def remove_column(self, col):
        if len(self.columns) == 1:
            logger.error("Can't remove last column")
            return

        idx = self.columns.index(col)
        del self.columns[idx]
        if idx <= self.current:
            self.current = max(0, self.current - 1)

    def get_width(self, client):
        for match, width in self.width_rules.items():
            if client.match(match):
                return width
        return self.default_width

    def add_client(self, client):
        c = self.cc
        if len(c) > 0 and len(self.columns) < self.num_columns:
            w = self.get_width(client)
            c = self.add_column(width=w)
        least = min(self.columns, key=len)
        if len(least) < len(c):
            c = least
        self.current = self.columns.index(c)
        c.add_client(client)

    def remove(self, client):
        remove = None
        for c in self.columns:
            if client in c:
                c.remove(client)
                if len(c) == 0 and len(self.columns) > 1:
                    remove = c
                break
        if remove is not None:
            self.remove_column(c)
        return self.columns[self.current].cw

    def configure(self, client, screen_rect):
        screenx = screen_rect.x
        screeny = screen_rect.y

        posx = 0
        for col in self.columns:
            if client in col:
                break
            posx += col.width
        else:
            client.hide()
            return
        posy = 0
        for c in col:
            if client == c:
                break
            posy += col.heights[c]

        if client.has_focus:
            color = self.border_focus
        else:
            color = self.border_normal

        border = self.border_width
        margin_size = self.margin

        width = int(0.5 + col.width * screenx * 0.01)
        x = screenx + int(0.5 + (posx-self.viewx) * screenx * 0.01)

        height = int(0.5 + col.heights[client] * screeny * 0.01 / len(col))
        y = screeny + int(0.5 + posy * screeny * 0.01 / len(col))
        client.place(
            x, y,
            width - 2*border, height - 2*border,
            border, color, margin=margin_size
        )
        client.unhide()

    def focus_first(self):
        if self.columns:
            return self.columns[0].focus_first()
        return None

    def focus_last(self):
        if self.columns:
            return self.columns[-1].focus_last()
        return None

    def focus_next(self, win):
        for idx, col in enumerate(self.columns):
            if win in col:
                if nxt := col.focus_next(win):
                    return nxt
                break
        if idx + 1 < len(self.columns):
            return self.columns[idx+1].focus_first()
        return None

    def focus_previous(self, win):
        for idx, col in enumerate(self.columns):
            if win in col:
                if prev := col.focus_previous(win):
                    return prev
                break
        if idx > 0:
            return self.columns[idx-1].focus_last()
        return None

    @expose_command()
    def left(self):
        if self.current > 0:
            self.current = self.current - 1
        self.group.focus(self.cc.cw, True)

    @expose_command()
    def right(self):
        if len(self.columns) - 1 > self.current:
            self.current = self.current + 1
        self.group.focus(self.cc.cw, True)

    @expose_command()
    def up(self):
        col = self.cc
        if col.current_index > 0:
            col.current_index -= 1
        self.group.focus(col.cw, True)

    @expose_command()
    def down(self):
        col = self.cc
        if col.current_index < len(col) - 1:
            col.current_index += 1
        self.group.focus(col.cw, True)

    @expose_command()
    def next(self) -> None:
        if self.columns:
            self.current = (self.current + 1) % len(self.columns)
            self.cc.current = 0
        self.group.focus(self.cc.cw, True)

    @expose_command()
    def previous(self) -> None:
        if self.columns:
            self.current = (self.current - 1) % len(self.columns)
            self.cc.current = len(self.cc) - 1
        self.group.focus(self.cc.cw, True)

    @expose_command()
    def shuffle_left(self):
        cur = self.cc
        client = cur.cw
        if client is None:
            return
        if self.current > 0:
            self.current -= 1
            new = self.cc
            new.add_client(client, cur.heights[client])
            cur.remove(client)
            if len(cur) == 0:
                self.remove_column(cur)
        elif len(cur) > 1:
            new = self.add_column(self.get_width(client))
            new.add_client(client, cur.heights[client])
            cur.remove(client)
            self.current = 0
        else:
            return
        self.group.layout_all()

    @expose_command()
    def shuffle_right(self):
        cur = self.cc
        client = cur.cw
        if client is None:
            return
        if self.current + 1 < len(self.columns):
            self.current += 1
            new = self.cc
            new.add_client(client, cur.heights[client])
            cur.remove(client)
            if len(cur) == 0:
                self.remove_column(cur)
        elif len(cur) > 1:
            new = self.add_column(self.get_width(client))
            new.add_client(client, cur.heights[client])
            cur.remove(client)
            self.current = len(self.columns) - 1
        else:
            return
        self.group.layout_all()

    @expose_command()
    def shuffle_up(self):
        if self.cc.current_index > 0:
            self.cc.shuffle_up()
            self.group.layout_all()

    @expose_command()
    def shuffle_down(self):
        if self.cc.current_index + 1 < len(self.cc):
            self.cc.shuffle_down()
            self.group.layout_all()

    @expose_command()
    def grow_left(self):
        if self.current > 0:
            if self.columns[self.current - 1].width > self.grow_amount:
                self.columns[self.current - 1].width -= self.grow_amount
                self.cc.width += self.grow_amount
                self.group.layout_all()
        elif len(self.columns) > 1:
            if self.columns[0].width > self.grow_amount:
                self.columns[1].width += self.grow_amount
                self.cc.width -= self.grow_amount
                self.group.layout_all()

    @expose_command()
    def grow_right(self):
        if self.current + 1 < len(self.columns):
            if self.columns[self.current + 1].width > self.grow_amount:
                self.columns[self.current + 1].width -= self.grow_amount
                self.cc.width += self.grow_amount
                self.group.layout_all()
        elif len(self.columns) > 1:
            if self.cc.width > self.grow_amount:
                self.cc.width -= self.grow_amount
                self.columns[self.current - 1].width += self.grow_amount
                self.group.layout_all()

    @expose_command()
    def grow_up(self):
        col = self.cc
        if col.current > 0:
            if col.heights[col[col.current - 1]] > self.grow_amount:
                col.heights[col[col.current - 1]] -= self.grow_amount
                col.heights[col.cw] += self.grow_amount
                self.group.layout_all()
        elif len(col) > 1:
            if col.heights[col.cw] > self.grow_amount:
                col.heights[col[1]] += self.grow_amount
                col.heights[col.cw] -= self.grow_amount
                self.group.layout_all()

    @expose_command()
    def grow_down(self):
        col = self.cc
        if col.current + 1 < len(col):
            if col.heights[col[col.current + 1]] > self.grow_amount:
                col.heights[col[col.current + 1]] -= self.grow_amount
                col.heights[col.cw] += self.grow_amount
                self.group.layout_all()
        elif len(col) > 1:
            if col.heights[col.cw] > self.grow_amount:
                col.heights[col[col.current - 1]] += self.grow_amount
                col.heights[col.cw] -= self.grow_amount
                self.group.layout_all()

    @expose_command()
    def normalize(self):
        """Give columns equal widths."""
        for col in self.columns:
            for client in col:
                col.heights[client] = 100
            col.width = 100
        self.group.layout_all()

    @expose_command()
    def reset(self):
        """Resets column widths, respecting 'initial_ratio' value."""
        if self.initial_ratio == 1 or len(self.columns) == 1 or self.fair:
            self.normalize()
            return

        self.group.layout_all()

    def swap_column(self, s, t):
        self.columns[s], self.columns[t] = self.columns[t], self.columns[s]
        self.current = t
        self.group.layout_all()

    @expose_command()
    def swap_column_left(self):
        src = self.current
        dst = src - 1 if src > 0 else len(self.columns) - 1
        self.swap_column(src, dst)

    @expose_command()
    def swap_column_right(self):
        src = self.current
        dst = src + 1 if src < len(self.columns) - 1 else 0
        self.swap_column(src, dst)
