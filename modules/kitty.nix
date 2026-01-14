{ pkgs, lib, config, ... }:
{
  options = {
    kitty.enable = lib.mkEnableOption "Enable Kitty config";
  };

  config = lib.mkIf config.kitty.enable {
    programs.kitty = {
      enable = true;
      font = {
        name = "Iosevka";
	package = pkgs.iosevka;
	size = 12;
      };
      shellIntegration.enableFishIntegration = true;
      themeFile = "everforest-medium-light";
    };
  };
}