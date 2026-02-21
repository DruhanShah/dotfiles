{ pkgs, lib, config, ... }:
{
  options = {
    modules.media.enable = lib.mkEnableOption "Enable Zathura, Calibre and MPV";
  };

  config = lib.mkIf config.modules.media.enable {
    programs.zathura = {
      enable = true;
      options = {
        recolor = true;
        selection-clipboard = "clipboard";
      };
    };
    programs.calibre.enable = true;
    programs.mpv.enable = true;

    xdg.mimeApps = {
      enable = true;
      defaultApplications = {
        "application/pdf" = ["org.pwmt.zathura-pdf-mupdf.desktop" "org.pwmt.zathura.desktop"];
        "application/epub+zip" = ["org.pwmt.zathura-pdf-mupdf.desktop" "org.pwmt.zathura.desktop"];
      };
    };
  };
}
