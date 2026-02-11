{ pkgs, lib, config, ... }:
{
  options = {
    modules.social.enable = lib.mkEnableOption "Enables Equicord";
  };

  config = lib.mkIf config.modules.social.enable {
    programs.nixcord = {
      enable = true;
      discord.vencord.enable = false;
      discord.equicord.enable = true;
      equibop.enable = true;
      config = {
        frameless = true;
      };
    };

    home.packages = with pkgs; [
      # signal-desktop
    ];
  };
}
