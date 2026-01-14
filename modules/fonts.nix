{ pkgs, lib, config, ... }:
{
  options = {};

  config = {
    fonts.packages = with pkgs; [
      noto-fonts
      noto-fonts-cjk-sans
      noto-fonts-color-emoji
      inter
      iosevka
      nerd-fonts.symbols-only
    ];
  };
}
