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
          "Flexoki-Light" = ''
@import url('https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.css');

:root {
    --accentcolor: 58, 169, 159; /* cy-2 */
    --accentcolor2: 160, 47, 111; /* ma */
    --linkcolor: 36, 131, 123; /* cy */
    --mentioncolor: 173, 131, 1; /* ye */
    --textbrightest: 16, 15, 15; /* tx */
    --textbrighter: 40, 39, 38;
    --textbright: 64, 62, 60;
    --textdark: 111, 110, 105; /* tx-2 */
    --textdarker: 135, 133, 128;
    --textdarkest: 183, 181, 172; /* tx-3 */
    --font: gg sans;
    --backgroundcode: 230, 228, 217; /* ui */
    --backgroundaccent: 206, 205, 195; /* ui-3 */
    --backgroundprimary: 255, 252, 240; /* bg */
    --backgroundsecondary: 242, 240, 229; /* bg-2 */
    --backgroundsecondaryalt: 242, 240, 229; /* bg-2 */
    --backgroundtertiary: 255, 252, 240; /* bg */
    --backgroundfloating: 242, 240, 229; /* bg-2 */
    --settingsicons: 0;
}
'';
          "Nord" = ''
@import url('https://mwittrien.github.io/BetterDiscordAddons/Themes/DiscordRecolor/DiscordRecolor.css');

:root {
    --accentcolor: 58, 169, 159; /* cy-2 */
    --accentcolor2: 160, 47, 111; /* ma */
    --linkcolor: 36, 131, 123; /* cy */
    --mentioncolor: 173, 131, 1; /* ye */
    --textbrightest: 16, 15, 15; /* tx */
    --textbrighter: 40, 39, 38;
    --textbright: 64, 62, 60;
    --textdark: 111, 110, 105; /* tx-2 */
    --textdarker: 135, 133, 128;
    --textdarkest: 183, 181, 172; /* tx-3 */
    --font: gg sans;
    --backgroundcode: 230, 228, 217; /* ui */
    --backgroundaccent: 206, 205, 195; /* ui-3 */
    --backgroundprimary: 255, 252, 240; /* bg */
    --backgroundsecondary: 242, 240, 229; /* bg-2 */
    --backgroundsecondaryalt: 242, 240, 229; /* bg-2 */
    --backgroundtertiary: 255, 252, 240; /* bg */
    --backgroundfloating: 242, 240, 229; /* bg-2 */
    --settingsicons: 0;
}
'';
        };
        enabledThemes = if config.modules.theme == "nord" then [ "Nord.css" ] else [ "Flexoki-Light.css" ];
      };
    };

    home.packages = with pkgs; [
      signal-desktop
    ];
  };
}
