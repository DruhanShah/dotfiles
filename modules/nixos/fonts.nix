{ pkgs, lib, config, ... }:
{
  options = {
    modules.fonts.enable = lib.mkEnableOption "Enable custom fonts";
  };

  config = lib.mkIf config.modules.fonts.enable {
    fonts.packages = with pkgs; [
      noto-fonts
      noto-fonts-cjk-sans
      noto-fonts-color-emoji
      nerd-fonts.symbols-only

      inter
      iosevka

      roboto
      roboto-slab
      roboto-serif
      roboto-mono
      roboto-flex
    ];
  };
}
