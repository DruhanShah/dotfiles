{ pkgs, lib, config, ... }:
{
  options = {
    modules.ghostty.enable = lib.mkEnableOption "Enable Ghostty config";
  };

  config = lib.mkIf config.modules.ghostty.enable {
    programs.ghostty = {
      enable = true;
      enableFishIntegration = true;
      enableBashIntegration = true;
      settings = {
        theme = "Flexoki Light";
        font-family = "Iosevka";
        font-size = 10.8;
        window-padding-x = 20;
        window-padding-y = 10;
        window-padding-color = "extend";
        window-show-tab-bar = "always";
      };
    };
  };
}
