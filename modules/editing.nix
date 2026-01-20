{ pkgs, lib, config, ... }:
{
  options = {
    editing.enable = lib.mkEnableOption "Enable GIMP, Inkscape, and other editing software";
  };

  config = lib.mkIf config.editing.enable {
    home.packages = with pkgs; [
      gimp
      inkscape
      openscad
    ];
  };
}