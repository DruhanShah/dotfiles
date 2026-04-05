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
  modules.rofi.enable = true;

  stylix.targets.emacs.enable = false;
  stylix.targets.rofi.enable = false;
  stylix.targets.kitty.enable = false;
  stylix.targets.nixcord.enable = false;
  stylix.targets.firefox.colorTheme.enable = true;
  stylix.targets.firefox.profileNames = [ "default" ];

  home.username = "druhan";
  home.homeDirectory = "/home/druhan";
  home.stateVersion = "26.05";

  xdg.userDirs = {
    enable = true;
    desktop = "$HOME";
    download = "$HOME/downloads";
    documents = "$HOME/documents";
  };

  # This is only here because I don't wanna deal with passing inputs as an argument to the niri module.
  home.packages = with pkgs; [
    inputs.qml-niri.packages."x86_64-linux".quickshell
  ];
}
