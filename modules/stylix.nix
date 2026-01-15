{ pkgs, lib, config, ... }:
{
  options = {};

  config = {
    stylix.enable = true;
    stylix.polarity = "light";
    stylix.base16Scheme = ./themes/everforest-light-medium.yaml;
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