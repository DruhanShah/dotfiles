{ pkgs, lib, config, ... }:
{
  options = {
    modules.stylix.enable = lib.mkEnableOption "Enable Stylix-like customizations";
    modules.theme = lib.mkOption {
      type = lib.types.enum [ "everforest" "flexoki" ];
      default = "flexoki";
      description = "Theme for user-wide customizations.";
    };
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
      gtk3 = {
        theme.name = "adw-gtk3";
      };
      gtk3.extraConfig.gtk-applications-prefer-dark-theme = (config.modules.theme == "everforest");
      gtk4.extraConfig.gtk-applications-prefer-dark-theme = (config.modules.theme == "everforest");
      font = {
        name = "Inter";
        size = 10.8;
      };
    };

    home.sessionVariables = {
      GTK_APPLICATION_PREFER_DARK_THEME = if (config.modules.theme == "everforest") then "1" else "0";
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
