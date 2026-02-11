{ pkgs, lib, config, ... }:
{
  options = {
    modules.editing.enable = lib.mkEnableOption "Enable media editing software like GIMP, Inkscape, and others";
  };

  config = lib.mkIf config.modules.editing.enable {
    home.packages = with pkgs; [
      gimp
      inkscape
      # openscad
      # kicad
    ];
  };
}
