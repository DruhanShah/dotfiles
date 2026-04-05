{ pkgs, lib, config, ... }:
{
  options = {
    modules.social.enable = lib.mkEnableOption "Enables Equicord";
  };

  config = lib.mkIf config.modules.social.enable {
    programs.nixcord = {
      enable = true;
      discord.vencord.enable = false;
      discord.equicord.enable = false;
      equibop.enable = true;
      config = {
        frameless = true;
        useQuickCss = true;
        themes = {
          "Flexoki-Light" = ../../dots/discord/flexoki.css;
        };
        enabledThemes = [ "Flexoki-Light.css" ];
      };
    };

    home.packages = with pkgs; [
      signal-desktop
    ];
  };
}
