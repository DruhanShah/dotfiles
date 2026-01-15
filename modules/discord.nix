{ pkgs, lib, config, ... }:
{
  options = {
    discord.enable = lib.mkEnableOption "Enables Equicord (from Nixcord)";
  };

  config = lib.mkIf config.discord.enable {
    programs.nixcord = {
      enable = true;
      discord.equicord.enable = true;
      equibop.enable = true;
      config = {
        frameless = true;
      };
    };
  };
}