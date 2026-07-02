{ pkgs, lib, config, ... }:
{
  options = {
    modules.desktop.enable = lib.mkEnableOption "Enable barebones desktop with Niri, Firefox, Kitty and utilities";
  };

  config = lib.mkIf config.modules.desktop.enable {
    services.xserver = {
      enable = true;
      xkb.layout = "us";
    };
    xdg.portal = {
      enable = true;
      config.common.default = [ "wlr" ];
    };

    programs.niri.enable = true;
    programs.firefox.enable = true;
    
    environment.systemPackages = with pkgs; [
      xwayland-satellite
      kitty
      brightnessctl
      grim
      slurp
      cliphist
      wev
      wlr-randr
      wl-clipboard
      libnotify
      linux-wifi-hotspot
      haveged
      libqalculate
    ];
  };
}
