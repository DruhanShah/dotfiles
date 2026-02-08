{ config, pkgs, inputs, ... }:
{
  imports = [
    ../../modules/home
    inputs.zen-browser.homeModules.beta
    inputs.nixcord.homeModules.nixcord
    inputs.noctalia.homeModules.default
  ];

  programs.git = {
    enable = true;
    settings.user.name = "DruhanShah";
    settings.user.email = "druhanrshah@gmail.com";
  };

  programs.btop = {
    enable = true;
    settings.vim_keys = true;
  };

  modules.fish.enable = true;
  modules.kitty.enable = true;
  modules.emacs.enable = true;
  modules.niri.enable = true;
  modules.qtile.enable = true;
  modules.wallpapers.enable = true;
  modules.media.enable = true;
  modules.editing.enable = true;
  modules.syncthing.enable = true;
  modules.social.enable = true;
  modules.zen.enable = true;
  modules.zen.addons = inputs.firefox-addons.packages.${pkgs.stdenv.hostPlatform.system};
  stylix.targets.zen-browser.profileNames = [ "default" ];

  home.username = "druhan";
  home.homeDirectory = "/home/druhan";
  home.stateVersion = "25.11";

  xdg.userDirs = {
    enable = true;
    desktop = "$HOME";
    download = "$HOME/downloads";
    documents = "$HOME/documents";
  };

  home.packages = with pkgs; [
    atool
    unzip
    zip
    unrar
    xz
    gzip

    wl-clipboard
    trash-cli
    texliveFull
    zotero
  ];

}
