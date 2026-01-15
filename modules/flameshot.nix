{ pkgs, lib, config, ... }:
{
  options = {
    flameshot.enable = lib.mkEnableOption "Enable Flameshot with Grim";
  };

  config = lib.mkIf config.flameshot.enable {
    services.flameshot = {
      enable = true;
      settings.General = {
        savePath = "/home/druhan/documents/screenshots";
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