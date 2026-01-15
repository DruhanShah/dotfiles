{ pkgs, lib, config, ... }:
{
  options = {
    kitty.enable = lib.mkEnableOption "Enable Kitty config";
  };

  config = lib.mkIf config.kitty.enable {
    programs.kitty = {
      enable = true;
      font.size = 12;
      settings = {
	window_padding_width = 20;
      };
      extraConfig = ''
	confirm_os_window_close -1
	modify_font cell_height 120%
      '';
      themeFile = "everforest_light_medium";
    };
  };
}
