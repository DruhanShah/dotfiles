{ pkgs, lib, config, ... }:
{
  options = {
    modules.kmonad.enable = lib.mkEnableOption "Enable KMonad for keyboard modification";
  };

  config = lib.mkIf config.modules.kmonad.enable {
    environment.systemPackages = with pkgs; [
      kmonad
    ];

    services.kmonad = {
      enable = true;
      keyboards = {
        ergomech = {
          device = "/dev/input/by-path/platform-i8042-serio-0-event-kbd";
          config = builtins.readFile ../../dots/kmonad/emacs-pinky.kbd;
        };
      };
    };
  };
}
