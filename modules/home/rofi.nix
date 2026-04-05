{ pkgs, lib, config, ... }:
{
  options = {
    modules.rofi.enable = lib.mkEnableOption "Enable Rofi config";
  };

  config = lib.mkIf config.modules.rofi.enable {
    programs.rofi = {
      enable = true;
      location = "center";
      cycle = true;
      theme = "main.rasi";
    };

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots/rofi";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/rofi/main.rasi".source = symlink "${dotDir}/main.rasi";
        ".config/rofi/flexoki.rasi".source = symlink "${dotDir}/flexoki.rasi";
      };
  };
}
