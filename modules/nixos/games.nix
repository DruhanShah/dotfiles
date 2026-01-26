{ pkgs, lib, config, ... }:
{
  options = {
    modules.games.enable = lib.mkEnableOption "Enable Steam and other games";
  };

  config = lib.mkIf config.modules.games.enable {
    programs.steam.enable = true;
    environment.systemPackages = with pkgs; [
      zeroad
      mindustry
    ];
  };
}
