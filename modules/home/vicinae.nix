{ pkgs, lib, config, ... }:
{
  options = {
    modules.vicinae.enable = lib.mkEnableOption "Enable Vicinae config";
  };

  config = lib.mkIf config.modules.vicinae.enable {
    services.vicinae = {
      enable = true;
      systemd = {
        enable = true;
        autoStart = true;
        environment = {
          USE_LAYER_SHELL = 1;
        };
      };
      settings = {
        close_on_focus_loss = true;
        consider_preedit = true;
        pop_to_root_on_close = true;
        favicon_service = "native";
        search_files_in_root = false;
      };
    };
  };
}
