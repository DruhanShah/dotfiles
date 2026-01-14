{ pkgs, lib, config, ... }:
{
  options = {
    qtile.enable = lib.mkEnableOption "Enable Qtile config";
  };

  config = lib.mkIf config.qtile.enable {
    home.file =
    let
      dotDir = "${config.home.homeDirectory}/dotfiles/modules/qtile";
      symlink = config.lib.file.mkOutOfStoreSymlink;
    in {
      ".config/qtile/bindings.py".source = symlink "${dotDir}/bindings.py";
      ".config/qtile/config.py".source = symlink "${dotDir}/config.py";
      ".config/qtile/groups.py".source = symlink "${dotDir}/groups.py";
      ".config/qtile/hooks.py".source = symlink "${dotDir}/hooks.py";
      ".config/qtile/screens.py".source = symlink "${dotDir}/screens.py";
      ".config/qtile/wayland.py".source = symlink "${dotDir}/wayland.py";

      ".config/qtile/assets".source = symlink "${dotDir}/assets";
      ".config/qtile/assets".recursive = true;
      ".config/qtile/layouts".source = symlink "${dotDir}/layouts";
      ".config/qtile/layouts".recursive = true;
      ".config/qtile/popups".source = symlink "${dotDir}/popups";
      ".config/qtile/popups".recursive = true;
      ".config/qtile/theme".source = symlink "${dotDir}/theme";
      ".config/qtile/theme".recursive = true;
      ".config/qtile/utils".source = symlink "${dotDir}/utils";
      ".config/qtile/utils".recursive = true;
      ".config/qtile/widgets".source = symlink "${dotDir}/widgets";
      ".config/qtile/widgets".recursive = true;
    };
  };
}