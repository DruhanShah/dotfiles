{ pkgs, lib, config, ... }:
{
  options = {
    games.enable = lib.mkEnableOption "Enable Steam and other games";
  };

  config = lib.mkIf config.games.enable {
    programs.steam.enable = true;
    environment.systemPackages = with pkgs; [
      zeroad
      mindustry
    ];
  };
}