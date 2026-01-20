{ pkgs, lib, config, ... }:
{
  options = {};

  config = {
    stylix.enable = true;
    stylix.polarity = "light";
    stylix.base16Scheme = ../dots/stylix/everforest-light-medium.yaml;
    stylix.cursor = {
      package = pkgs.bibata-cursors;
      name = "Bibata-Modern-Classic";
      size = 24;
    };
    stylix.fonts = {
      serif = {
        name = "Inter";
	package = pkgs.inter;
      };
      sansSerif = {
        name = "Inter";
	package = pkgs.inter;
      };
      monospace = {
        name = "Iosevka";
	package = pkgs.iosevka;
      };
      emoji = {
        name = "Noto Color Emoji";
	package = pkgs.noto-fonts-color-emoji;
      };
    };

    stylix.autoEnable = true;
    stylix.targets.console.enable = false;
  };
}