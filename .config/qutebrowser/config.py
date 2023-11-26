import catppuccin

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

c.editor.command = ["kitty", "--", "nvim", "{}"]

c.fileselect.handler = "external"
c.fileselect.single_file.command = ["kitty", "-T", "file-picker", "--", "ranger", "--choosefile", "{}"]
c.fileselect.multiple_files.command = ["kitty", "-T", "file-picker", "--", "ranger", "--choosefiles", "{}"]
c.fileselect.folder.command = ["kitty", "-T", "file-picker", "--", "ranger", "--choosedir", "{}"]

c.fonts.default_family = "JetBrains Mono"
c.fonts.default_size = "12pt"

c.bindings.commands["normal"] = {}
c.bindings.commands["normal"]["xt"] = "config-cycle tabs.show always switching"
c.bindings.commands["normal"]["xs"] = "config-cycle statusbar.show always in-mode"
c.bindings.commands["normal"][" m"] = "spawn mpv {url}"
c.bindings.commands["normal"][",o"] = "download-open"
c.bindings.commands["normal"][",p"] = "spawn --userscript qute-pass"
c.bindings.commands["normal"][",de"] = "spawn --userscript darkreader.py enable domain"
c.bindings.commands["normal"][",dd"] = "spawn --userscript darkreader.py disable domain"
c.bindings.commands["normal"]["$"] = "fake-key <End>"
c.bindings.commands["normal"]["0"] = "fake-key <Home>"
c.bindings.commands["normal"]["I"] = "fake-key <Home>;; mode-enter insert"
c.bindings.commands["normal"]["A"] = "fake-key <End>;; mode-enter insert"
c.bindings.commands["normal"]["cw"] = "fake-key <Ctrl-Delete>;; mode-enter insert"
c.bindings.commands["normal"]["cc"] = "fake-key <Home><Shift-End><Delete>;; mode-enter insert"
c.bindings.commands["normal"]["c$"] = "fake-key <Shift-End><Delete>;; mode-enter insert"

c.aliases["zotero"] = "spawn --userscript zotero.py"
c.aliases["Zotero"] = "hint links userscript zotero.py"
