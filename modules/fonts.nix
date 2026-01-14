{ pkgs, lib, config, ... }:
{
  options = {
    fonts.enable = lib.mkEnableOption "Enable custom fonts";
  };

  config = lib.mkIf config.fonts.enable {
    environment.systemPackages = with pkgs; [
      noto-fonts
      noto-fonts-cjk
      noto-fonts-color-emoji
      inter
      iosevka
      nerd-fonts.symbols-only
    ];
  };
}