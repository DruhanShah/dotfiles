{ config, pkgs, inputs, ... }:
{

  imports = [
    ../../modules/zen.nix
    ../../modules/vicinae.nix
    ../../modules/kitty.nix
    ../../modules/emacs
    ../../modules/qtile
    ../../modules/wallpapers
    inputs.zen-browser.homeModules.beta
    inputs.vicinae.homeManagerModules.default
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

  programs.fish = {
    enable = true;
    interactiveShellInit = ''
      set fish_greeting
    '';
  };

  kitty.enable = true;
  emacs.enable = true;
  qtile.enable = true;
  wallpapers.enable = true;
  vicinae.enable = true;
  vicinae.addons = inputs.vicinae-extensions.packages.${pkgs.stdenv.hostPlatform.system};
  zen.enable = true;
  zen.addons = inputs.firefox-addons.packages.${pkgs.stdenv.hostPlatform.system};
  stylix.targets.emacs.enable = false;

  home.username = "druhan";
  home.homeDirectory = "/home/druhan";
  home.stateVersion = "25.11";

  home.packages = with pkgs; [
    atool
    unzip
    zip
    unrar
    xz
    gzip

    trash-cli
  ];

}
