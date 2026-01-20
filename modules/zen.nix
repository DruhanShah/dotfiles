{ pkgs, lib, config, ... }:
{
  options = {
    zen.enable = lib.mkEnableOption "Enables Zen browser";
    zen.addons = lib.mkOption {
        type = lib.types.attrs;
	description = "Firefox Addons attribute set";
    };
  };

  config = lib.mkIf config.zen.enable {
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
        OfferToSaveLogins = true;
        EnableTrackingProtection = {
          Value = true;
          Locked = true;
          Cryptomining = true;
          Fingerprinting = true;
        };
      };
      profiles.default = {
        extensions.packages = with config.zen.addons; [
	  bitwarden
	  stylus
	  to-google-translate
	  ublock-origin
	  zotero-connector
        ];
	spacesForce = true;
	spaces."Default Space" = {
	  id = "0b1d689e-7896-4ecb-80d6-24e9df9e0188";
	  position = 1000;
        };
      };
    };
  };
}
