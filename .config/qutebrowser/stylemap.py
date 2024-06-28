import os

file = os.path.expanduser("~/.config/rofi/theme")
with open(file, "r") as f:
    theme = f.read().strip()

styles = {
    "github.css": ["*github.com/*"],
    "whatsapp_mocha.css": ["*web.whatsapp.com/*"],
    "reddit_mocha.css": ["*reddit.com/*"],
    "youtube_mocha.css": ["*youtube.com/*"],
    "archwiki.css": ["*wiki.archlinux.org/*"],
    "instagram_mocha.css": ["*instagram.com/*"],
    "ddg.css": ["*duckduckgo.com/*"],
    "wikipedia_latte.css": ["*wikipedia.org/*"],
}
