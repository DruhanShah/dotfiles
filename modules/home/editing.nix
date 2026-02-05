{ pkgs, lib, config, ... }:
{
  options = {
    modules.editing.enable = lib.mkEnableOption "Enable GIMP, Inkscape, and other editing software";
  };

  config = lib.mkIf config.modules.editing.enable {
    home.packages = with pkgs; [
      gimp
      inkscape
      openscad
      kicad
    ];
  };
}
