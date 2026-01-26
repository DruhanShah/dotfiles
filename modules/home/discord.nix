{ pkgs, lib, config, ... }:
{
  options = {
    modules.discord.enable = lib.mkEnableOption "Enables Equicord (from Nixcord)";
  };

  config = lib.mkIf config.modules.discord.enable {
    programs.nixcord = {
      enable = true;
      discord.vencord.enable = false;
      discord.equicord.enable = true;
      equibop.enable = true;
      config = {
        frameless = true;
      };
    };
  };
}
