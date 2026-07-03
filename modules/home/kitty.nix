{ pkgs, lib, config, ... }:
{
  options = {
    modules.kitty.enable = lib.mkEnableOption "Enable Kitty config";
  };

  config = lib.mkIf config.modules.kitty.enable {
    programs.kitty = {
      enable = true;
      font.name = "Iosevka";
      font.size = 10.8;
      settings = {
        window_padding_width = 20;
      };
      extraConfig = ''
confirm_os_window_close -1
modify_font cell_height 120%

symbol_map U+23fb-U+23fe Symbols Nerd Font
symbol_map U+2500-U+259f Symbols Nerd Font
symbol_map U+276c-U+2771 Symbols Nerd Font
symbol_map U+e000-U+e00a Symbols Nerd Font
symbol_map U+e0a0-U+e0a2 Symbols Nerd Font
symbol_map U+e0b0-U+e0b3 Symbols Nerd Font
symbol_map U+e0b4-U+e0c8 Symbols Nerd Font
symbol_map U+e0cc-U+e0d7 Symbols Nerd Font
symbol_map U+e200-U+e2a9 Symbols Nerd Font
symbol_map U+e300-U+e3e3 Symbols Nerd Font
symbol_map U+e5fa-U+e6b7 Symbols Nerd Font
symbol_map U+e700-U+e8ef Symbols Nerd Font
symbol_map U+ea60-U+ec1e Symbols Nerd Font
symbol_map U+ed00-U+efce Symbols Nerd Font
symbol_map U+f000-U+f2ff Symbols Nerd Font
symbol_map U+f300-U+f381 Symbols Nerd Font
symbol_map U+f400-U+f533 Symbols Nerd Font
symbol_map U+f500-U+fd46 Symbols Nerd Font
symbol_map U+f0001-U+f1af0 Symbols Nerd Font
symbol_map U+2630,U+2665,U+26a1,U+2b58,U+e0a3,U+e0ca Symbols Nerd Font
      '';
      shellIntegration.enableFishIntegration = true;
      themeFile = if config.modules.theme == "everforest" then "everforest_dark_hard" else "flexoki_light";
    };
  };
}
