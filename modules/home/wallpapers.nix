{ pkgs, lib, config, ... }:
{
  options = {
    modules.wallpapers.enable = lib.mkEnableOption "Enable Wallpaper collection";
  };

  config = lib.mkIf config.modules.wallpapers.enable {
    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        "wallpapers" = {
          source = symlink "${dotDir}/wallpapers";
	        recursive = true;
        };
      };
  };
}
