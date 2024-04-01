import catppuccin
from qutebrowser.api import interceptor

catppuccin.setup(c, "mocha", True)

config.load_autoconfig(False)

config.set('content.cookies.accept', 'all', 'chrome-devtools://*')
config.set('content.cookies.accept', 'all', 'devtools://*')

config.set('content.headers.accept_language', '', 'https://matchmaker.krunker.io/*')
config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}) AppleWebKit/{webkit_version} (KHTML, like Gecko) {upstream_browser_key}/{upstream_browser_version} Safari/{webkit_version}', 'https://web.whatsapp.com/')
config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}; rv:90.0) Gecko/20100101 Firefox/90.0', 'https://accounts.google.com/*')
config.set('content.headers.user_agent', 'Mozilla/5.0 ({os_info}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99 Safari/537.36', 'https://*.slack.com/*')

c.url.start_pages = "/home/druhan/.config/qutebrowser/startpage.html"
c.url.default_page = "/home/druhan/.config/qutebrowser/startpage.html"

c.content.blocking.method = "both"
c.tabs.position = "left"
c.tabs.show = "switching"
c.content.images = True
c.content.javascript.enabled = True
c.content.javascript.clipboard = "access-paste"

c.colors.webpage.preferred_color_scheme = "dark"
c.colors.webpage.bg = "#cdd6f4"

c.statusbar.padding = {
    "top": 6,
    "bottom": 6,
    "left": 2,
    "right": 2,
}
c.colors.statusbar.insert.bg = "#a6e3a1"
c.colors.statusbar.insert.fg = "#11111b"

c.tabs.padding = {
    "top": 10,
    "bottom": 10,
    "left": 10,
    "right": 6,
}

c.editor.command = ["wezterm", "-e", "nvim", "{}"]

c.fileselect.handler = "external"
c.fileselect.single_file.command = [
    "wezterm",
    "start",
    "--class",
    "file-picker",
    "ranger",
    "--choosefile",
    "{}"
]
c.fileselect.multiple_files.command = [
    "wezterm",
    "start",
    "--class",
    "file-picker",
    "ranger",
    "--choosefiles",
    "{}"
]
c.fileselect.folder.command = [
    "wezterm",
    "start",
    "--class",
    "file-picker",
    "ranger",
    "--choosedir",
    "{}"
]

c.fonts.default_family = "JetBrains Mono"
c.fonts.default_size = "12pt"

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
    },
}

c.aliases["reskin"] = "spawn --userscript rebuild-qutebrowser-grease-styles.py"
c.aliases["zotero"] = "spawn --userscript zotero.py"
c.aliases["Zotero"] = "hint links userscript zotero.py"


def filter_yt(info: interceptor.Request):
    """Block the given request if necessary."""
    url = info.request_url
    if (url.host() == 'www.youtube.com'
        and url.path() == '/get_video_info'
        and '&adformat=' in url.query()):
        info.block()


interceptor.register(filter_yt)
