{ pkgs, lib, config, ... }:
{
  options = {
    wallpapers.enable = lib.mkEnableOption "Enable Wallpaper collection";
  };

  config = lib.mkIf config.wallpapers.enable {
    home.file =
    let
      dotDir = "${config.home.homeDirectory}/dotfiles/modules";
      symlink = config.lib.file.mkOutOfStoreSymlink;
    in {
      "wallpapers" = {
        source = symlink "${dotDir}/wallpapers";
	recursive = true;
      };
    };
  };
}