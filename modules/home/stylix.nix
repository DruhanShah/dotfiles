{ pkgs, lib, config, ... }:
{
  options = {
    modules.stylix.enable = lib.mkEnableOption "Enable Stylix-like customizations";
  };

  config = lib.mkIf config.modules.stylix.enable {
    home.packages = with pkgs; [
      bibata-cursors
      adw-gtk3
    ];
    
    gtk = {
      enable = true;
      iconTheme = {
        package = pkgs.papirus-icon-theme;
        name = "Papirus";
      };
    };

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/gtk-3.0/gtk.css".source = symlink "${dotDir}/gtk/gtk3.css";
        ".config/gtk-4.0/gtk.css".source = symlink "${dotDir}/gtk/gtk4.css";
      };
  };
}
