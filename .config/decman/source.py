import yaml
import decman
from decman import File, Directory

with open("config.yaml", "r") as f:
    config = yaml.safe_load(f)

decman.packages = []
for cat, packages in config["pacman"].items():
    decman.packages += packages

decman.aur_packages = [
    **config["aur"],
]

ignored_packages = [
    **config["ignore"]
]

decman.enabled_systemd_units = [
    **config["systemd"]["units"],
]
