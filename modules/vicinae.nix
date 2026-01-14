{ pkgs, lib, config, ... }:
{
  options = {
    vicinae.enable = lib.mkEnableOption "Enables Vicinae launcher";
    vicinae.addons = lib.mkOption {
        type = lib.types.attrs;
	description = "Vicinae extensions attribute set";
    };
  };

  config = lib.mkIf config.vicinae.enable {
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
        font = {
          normal = {
            size = 11;
            normal = "Inter";
          };
        };
        theme = {
          light = {
            name = "everforest-light-medium";
            icon_theme = "default";
          };
          dark = {
            name = "everforest-light-medium";
            icon_theme = "default";
          };
        };
        launcher_window.opacity = 1.0;
      };
      themes = {
        everforest-light-medium = {
          meta = {
            version = 1;
            name = "Everforest Light Medium";
            description = "Warm light theme with earthy green accents";
            variant = "light";
            inherits = "vicinae-light";
	  };
          colors = {
            core = {
              background = "#efebd4";
              foreground = "#5c6a72";
              secondary_background = "#e0dcc7";
              border = "#bdc3af";
              accent = "#8da101";
            };
            accents = {
              blue = "#3a94c5";
              green = "#8da101";
              magenta = "#e9b2d7";
              orange = "#f57d26";
              purple = "#df69ba";
              red = "#f85552";
              yellow = "#dfa000";
              cyan = "#35a77c";
            };
          };
        };
      };
      extensions = with config.vicinae.addons; [
         bluetooth
         nix
      ];
    };
  };
}