{ pkgs, lib, config, ... }:
{
  options = {
    modules.syncthing.enable = lib.mkEnableOption "Enables Syncthing";
  };

  config = lib.mkIf config.modules.syncthing.enable {
    services.syncthing = {
      enable = true;
      settings = {
        devices = {
          "Phone" = {
            id = "RWF3LTD-2JRPYJH-WHN7O4I-PGYGZ4X-YGZC5DE-DFL5PMQ-KMQKV4X-BK5NKAN";
            name = "Phone - Android";
          };
        };
        folders = {
          "books" = {
            enable = true;
            id = "books";
            label = "books";
            path = "~/books";
            devices = [ "Phone" ];
            type = "sendreceive";
          };
          "music" = {
            enable = true;
            id = "music";
            label = "music";
            path = "~/music";
            devices = [ "Phone" ];
            type = "sendreceive";
          };
          "notes" = {
            enable = true;
            id = "notes";
            label = "notes";
            path = "~/notes";
            devices = [ "Phone" ];
            type = "sendreceive";
          };
        };
      };
    };
  };
}
