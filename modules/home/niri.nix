{ pkgs, lib, config, ... }:
{
  options = {
    modules.niri.enable = lib.mkEnableOption "Enable Niri configuration with Noctalia and Quickshell";
  };

  config = lib.mkIf config.modules.niri.enable {
    home.packages = with pkgs; [
      swaybg
      quickshell
    ];
    
    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/niri/config.kdl".source = symlink "${dotDir}/niri/${config.modules.theme}.kdl";

        ".config/quickshell".source = symlink "${dotDir}/quickshell/${config.modules.theme}";
        ".config/quickshell".recursive = true;
      };
  };
}
