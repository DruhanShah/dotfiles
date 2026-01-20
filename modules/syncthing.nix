{ pkgs, lib, config, ... }:
{
  options = {
    syncthing.enable = lib.mkEnableOption "Enables Equicord (from Nixcord)";
  };

  config = lib.mkIf config.syncthing.enable {
    services.syncthing = {
      enable = true;
      settings = {
        devices = {};
	folders = {};
      };
    };
  };
}