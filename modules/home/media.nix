{ pkgs, lib, config, ... }:
{
  options = {
    modules.media.enable = lib.mkEnableOption "Enable Zathura, Calibre and MPV";
  };

  config = lib.mkIf config.modules.media.enable {
    programs.zathura = {
      enable = true;
      options = { recolor = true; };
    };
    programs.calibre.enable = true;
    programs.mpv.enable = true;

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        # ".config/mpv/mpv.conf".source = symlink "${dotDir}/mpv/mpv.conf";
        # ".config/mpv/input.conf".source = symlink "${dotDir}/mpv/input.conf";
        # ".config/mpv/scripts".source = symlink "${dotDir}/mpv/scripts";
        # ".config/mpv/scripts".recursive = true;
        # ".config/mpv/script-opts".source = symlink "${dotDir}/mpv/script-opts";
        # ".config/mpv/script-opts".recursive = true;

        ".config/calibre/resources/images".source = symlink "${dotDir}/calibre/resources/images";
        ".config/calibre/resources/images".recursive = true;
        ".config/calibre/everforest.calibre-palette".source = symlink "${dotDir}/calibre/everforest.calibre-palette";
      };
  };
}
