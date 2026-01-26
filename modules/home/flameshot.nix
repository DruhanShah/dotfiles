{ pkgs, lib, config, ... }:
{
  options = {
    modules.flameshot.enable = lib.mkEnableOption "Enable Flameshot with Grim";
  };

  config = lib.mkIf config.modules.flameshot.enable {
    home.packages = with pkgs; [
      wl-clipboard
    ];
    services.flameshot = {
      enable = true;
      settings.General = {
	      saveAsFileExtension = ".png";
	      showStartupLaunchMessage = false;
	      showDesktopNotification = true;
	      showAbortNotification = false;
	      showHelp = false;
	      showSidePanelButton = true;

        uiColor = "#f85552";
        contrastUiColor = "#270032";
        drawColor = "#ff0000";

        useGrimAdapter = true;
	      disabledGrimWarning = true;
      };
    };
  };
}
