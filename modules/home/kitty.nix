{ pkgs, lib, config, ... }:
{
  options = {
    modules.kitty.enable = lib.mkEnableOption "Enable Kitty config";
  };

  config = lib.mkIf config.modules.kitty.enable {
    programs.kitty = {
      enable = true;
      settings.window_padding_width = 20;
      extraConfig = ''
	confirm_os_window_close -1
	modify_font cell_height 120%
      '';
      themeFile = "everforest_light_medium";
    };
  };
}
