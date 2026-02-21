{ pkgs, lib, config, ... }:
{
  options = {
    modules.niri.enable = lib.mkEnableOption "Enable Niri configuration with Noctalia and Quickshell";
  };

  config = lib.mkIf config.modules.niri.enable {
    programs.noctalia-shell.enable = true;
    home.packages = with pkgs; [
      quickshell
    ];

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/niri".source = symlink "${dotDir}/niri";
        ".config/niri".recursive = true;

        ".config/quickshell".source = symlink "${dotDir}/quickshell";
        ".config/quickshell".recursive = true;
        
        ".cache/noctalia/wallpapers.json".text = builtins.toJSON {
          defaultWallpaper = "${dotDir}/wallpapers/blank.png";
        };
      };
  };
}
