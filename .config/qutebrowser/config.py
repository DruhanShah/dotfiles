import os
import catppuccin
from qutebrowser.api import interceptor

home = os.path.expanduser("~")

catppuccin.setup(c, "mocha", True)

config.load_autoconfig(False)

config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}) AppleWebKit/{webkit_version} (KHTML, like Gecko) {upstream_browser_key}/{upstream_browser_version} Safari/{webkit_version}', 'https://web.whatsapp.com/')
config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}; rv:90.0) Gecko/20100101 Firefox/90.0', 'https://accounts.google.com/*')
config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99 Safari/537.36', 'https://*.slack.com/*')

c.url.start_pages = f"{home}/.config/qutebrowser/homepage/index.html"
c.url.default_page = f"{home}/.config/qutebrowser/homepage/index.html"

c.content.blocking.method = "both"
c.tabs.position = "left"
c.tabs.show = "switching"
c.content.images = True
c.content.javascript.enabled = True
c.content.javascript.clipboard = "access-paste"

c.colors.webpage.preferred_color_scheme = "dark"

c.statusbar.padding = {
    "top": 8,
    "bottom": 8,
    "left": 4,
    "right": 4,
}
c.colors.statusbar.insert.bg = "#a6e3a1"
c.colors.statusbar.insert.fg = "#11111b"

c.tabs.padding = {
    "top": 16,
    "bottom": 16,
    "left": 16,
    "right": 6,
}

c.completion.height = "40%"


c.editor.command = ["kitty", "-e", "nvim", "{}"]

c.fileselect.handler = "external"
c.fileselect.single_file.command = [
    "kitty",
    "-T",
    "file-picker",
    "-e",
    "ranger",
    "--choosefile",
    "{}"
]
c.fileselect.multiple_files.command = [
    "kitty",
    "-T",
    "file-picker",
    "-e",
    "ranger",
    "--choosefiles",
    "{}"
]
c.fileselect.folder.command = [
    "kitty",
    "-T",
    "file-picker",
    "-e",
    "ranger",
    "--choosedir",
    "{}"
]

c.fonts.default_family = "Operator Mono SSm Lig Book"
c.fonts.default_size = "14px"

c.bindings.commands = {
    "normal": {
        "xt": "config-cycle tabs.show always switching",
        "xs": "config-cycle statusbar.show in-mode always",
        ",m": "spawn mpv {url}",
        ",M": "hint links spawn mpv {hint-url}",
        ",o": "download-open",
        ",p": "spawn --userscript qute-pass",
        ",de": "spawn --userscript darkreader.py enable domain",
        ",dd": "spawn --userscript darkreader.py disable domain",
        "$": "fake-key <End>",
        "0": "fake-key <Home>",
        "I": "fake-key <Home>;; mode-enter insert",
        "A": "fake-key <End>;; mode-enter insert",
        "cw": "fake-key <Ctrl-Delete>;; mode-enter insert",
        "cc": "fake-key <Home><Shift-End><Delete>;; mode-enter insert",
        "c$": "fake-key <Shift-End><Delete>;; mode-enter insert",
        "<Esc>": "mode-enter insert;; fake-key <Shift-Esc>;; mode-enter normal"
    },
}

c.aliases["reskin"] = "spawn --userscript rebuild-qutebrowser-grease-styles.py"
c.aliases["zotero"] = "spawn --userscript zotero.py"
c.aliases["Zotero"] = "hint links userscript zotero.py"


# Block YouTube ads
def filter_yt(info: interceptor.Request):
    """Block the given request if necessary."""
    url = info.request_url
    if (
        url.host() == 'www.youtube.com'
        and url.path() == '/get_video_info'
        and '&adformat=' in url.query()
       ):
        info.block()


interceptor.register(filter_yt)
