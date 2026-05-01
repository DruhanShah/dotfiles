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

        # Flexoki theme
        default-fg = "#100f0f";
        default-bg = "#fffcf0";
        completion-bg = "#dad8ce";
        completion-fg = "#100f0f";
        completion-highlight-bg = "#5e409d";
        completion-highlight-fg = "#fffcf0";
        completion-group-bg = "#f2f0e5";
        completion-group-fg = "#100f0f";
        statusbar-fg = "#100f0f";
        statusbar-bg = "#f2f0e5";
        inputbar-fg = "#100f0f";
        inputbar-bg = "#fffcf0";
        notification-bg = "#fffcf0";
        notification-fg = "#100f0f";
        notification-error-bg = "#fffcf0";
        notification-error-fg = "#af3029";
        notification-warning-bg = "#fffcf0";
        notification-warning-fg = "#ad8301";
        recolor-lightcolor = "#fffcf0";
        recolor-darkcolor = "#100f0f";
        index-fg = "#100f0f";
        index-bg = "#fffcf0";
        index-active-fg = "#100f0f";
        index-active-bg = "#dad8ce";
        render-loading-bg = "#fffcf0";
        render-loading-fg = "#100f0f";
        highlight-color = "rgba(111, 110, 105, 0.3)";
        highlight-fg = "#100f0f";
        highlight-active-color = "rgba(94, 64, 157, 0.3)";
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

    # Not sure where else to put the LaTeX and research stuff so here it is
    home.packages = with pkgs; [
      zotero
    ];
  };
}
