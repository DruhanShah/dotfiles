{ config, pkgs, inputs, ... }:
{
  imports = [
    ../../modules/home
    inputs.nixcord.homeModules.nixcord
  ];

  modules.fish.enable = true;
  modules.kitty.enable = true;
  modules.emacs.enable = true;
  modules.firefox.enable = true;
  modules.firefox.addons = inputs.firefox-addons.packages.${pkgs.stdenv.hostPlatform.system};
  modules.niri.enable = true;
  modules.qtile.enable = false;
  modules.wallpapers.enable = true;
  modules.media.enable = true;
  modules.editing.enable = true;
  modules.syncthing.enable = true;
  modules.social.enable = true;
  modules.stylix.enable = true;

  home.username = "druhan";
  home.homeDirectory = "/home/druhan";
  home.stateVersion = "26.05";

  xdg.userDirs = {
    enable = true;
    desktop = "$HOME";
    download = "$HOME/downloads";
    documents = "$HOME/documents";
    projects = "$HOME/stuff";
  };
}
