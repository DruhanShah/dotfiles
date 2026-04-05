{ pkgs, lib, config, ... }:
{
  options = {
    modules.firefox.enable = lib.mkEnableOption "Enables Firefox browser";
    modules.firefox.addons = lib.mkOption {
      type = lib.types.attrs;
      description = "Firefox Addons module";
    };
  };

  config = lib.mkIf config.modules.firefox.enable {
    programs.firefox = {
      enable = true;
      profiles = {
        default = {
          id = 0;
          name = "default";
          isDefault = true;
          settings = {
            "toolkit.legacyUserProfileCustomizations.stylesheets" = true;
            # "fennec.drawer.autohide" = true;
          };
          extensions = {
            force = true;
            packages = with config.modules.firefox.addons; [
              ublock-origin
              sidebery
              bitwarden
              refined-github
              sponsorblock
              stylus
              zotero-connector
            ];
          };
          extraConfig = builtins.readFile ../../dots/firefox/user.js;
          userChrome = ../../dots/firefox/userChrome.css;
          userContent = ../../dots/firefox/userContent.css;
        };
      };
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
    };
  };
}
