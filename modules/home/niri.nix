{ pkgs, lib, config, ... }:
{
  options = {
    modules.niri.enable = lib.mkEnableOption "Enable Niri configuration with Noctalia and Quickshell";
  };

  config = lib.mkIf config.modules.niri.enable {
    home.packages = with pkgs; [
      wbg
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
      };
  };
}
