{ pkgs, lib, config, ... }:
{
  options = {
    modules.zen.enable = lib.mkEnableOption "Enables Zen browser";
    modules.zen.addons = lib.mkOption {
      type = lib.types.attrs;
      description = "Firefox Addons attribute set";
    };
  };

  config = lib.mkIf config.modules.zen.enable {
    programs.zen-browser = {
      enable = true;
      policies = {
        AutofillAddressEnabled = true;
        AutofillCreditCardEnabled = false;
        DisableAppUpdate = true;
        DisableFeedbackCommands = true;
        DisableFirefoxStudies = true;
        DisablePocket = true;
        DisableTelemetry = true;
        DontCheckDefaultBrowser = true;
        NoDefaultBookmarks = true;
        OfferToSaveLogins = false;
        EnableTrackingProtection = {
          Value = true;
          Locked = true;
          Cryptomining = true;
          Fingerprinting = true;
        };
      };
      profiles.default = {
        extensions.packages = with config.modules.zen.addons; [
	        bitwarden
	        stylus
	        to-google-translate
	        ublock-origin
	        zotero-connector
        ];
	      spacesForce = true;
        spaces = {
          "Shenanigans" = {
            id = "bf1efaf8-2a90-41de-8674-fa27f77d0336";
            icon = "chrome://browser/skin/zen-icons/selectable/game-controller.svg";
            position = 1000;
          };
          "Work" = {
            id = "820b81a9-bb84-437f-8586-78f717b0887e";
            icon = "chrome://browser/skin/zen-icons/selectable/briefcase.svg";
            position = 2000;
          };
          "Research" = {
            id = "b314e855-ea4d-4ecc-8ca4-1a11da1a62f0";
            icon = "chrome://browser/skin/zen-icons/selectable/flask.svg";
            position = 3000;
          };
        };
      };
    };
  };
}
