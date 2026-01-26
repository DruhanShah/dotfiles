{ pkgs, lib, config, ... }:
{
  options = {
    modules.vicinae.enable = lib.mkEnableOption "Enables Vicinae launcher";
    modules.vicinae.addons = lib.mkOption {
      type = lib.types.attrs;
      description = "Vicinae extensions attribute set";
    };
  };

  config = lib.mkIf config.modules.vicinae.enable {
    services.vicinae = {
      enable = true;
      systemd = {
        enable = true;
        autoStart = true;
        environment = { USE_LAYER_SHELL = 1; };
      };
      settings = {
        close_on_focus_loss = true;
        pop_to_root_on_close = true;
        favicon_service = "twenty";
      };
      extensions = with config.modules.vicinae.addons; [
        bluetooth
        nix
	      wifi-commander
	      pulseaudio
      ];
    };
  };
}
