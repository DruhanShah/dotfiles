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
          config = ''
(defcfg
  input (device-file "/dev/input/by-path/platform-i8042-serio-0-event-kbd")
  output (uinput-sink "ergomech")
  fallthrough true)

(defsrc
  CapsLock)

(deflayer default
  (tap-hold-next-release 100 Esc LeftCtrl))
'';
        };
      };
    };
  };
}
