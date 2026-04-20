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
        font = "Inter 11";
      };
      extraConfig = ''
include flexoki
'';
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

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/zathura/flexoki".source = symlink "${dotDir}/zathura/flexoki";
      };

    # Not sure where else to put the LaTeX and research stuff so here it is
    home.packages = with pkgs; [
      zotero
    ];
  };
}
