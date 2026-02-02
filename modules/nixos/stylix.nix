{ pkgs, lib, config, ... }:
{
  options = {
    modules.stylix.enable = lib.mkEnableOption "Enable Stylix";
  };

  config = lib.mkIf config.modules.stylix.enable {
    stylix.enable = true;
    stylix.polarity = "light";
    stylix.base16Scheme = ../../dots/stylix/e-ink.yaml;
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
      sizes = {
        desktop = 10.8;
        applications = 10.8;
        terminal = 10.8;
        popups = 10.8;
      };
    };

    stylix.autoEnable = true;
    stylix.targets.console.enable = false;
  };
}
