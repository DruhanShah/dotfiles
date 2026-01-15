{ pkgs, lib, config, ... }:
{
  options = {
    media.enable = lib.mkEnableOption "Enable Zathura, Calibre and MPV";
  };

  config = lib.mkIf config.media.enable {
    programs.zathura = {
      enable = true;
      options = { recolor = true; };
    };
    programs.calibre.enable = true;
    programs.mpv.enable = true;
  };
}