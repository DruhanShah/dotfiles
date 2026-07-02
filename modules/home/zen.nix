{ pkgs, lib, config, ... }:
{
  options = {
    modules.zen.enable = lib.mkEnableOption "Enables Zen Browser";
    modules.zen.addons = lib.mkOption {
      type = lib.types.attrs;
      description = "Firefox Addons module";
    };
  };

  config = lib.mkIf config.modules.zen.enable {
    programs.zen-browser = {
      enable = true;
      setAsDefaultBrowser = true;
      profiles = {
        default = {
          settings = {
            # Settings in about:config
          };
          sine = {
            enabled = true;
            mods = [
              # Sine Mods
              # Zen Mods
              "181e41d4-dfd3-410d-9a73-561381a2f77d" # Extensions List
              "c8d9e6e6-e702-4e15-8972-3596e57cf398" # Zen Back Forward
              "e122b5d9-d385-4bf8-9971-e137809097d0" # No Top Sites
            ];
          };
          search = {
            force = true;
            default = "ddg";
          };
          spacesForce = true;
          spaces = {
            "Default Space" = {
              id = "bf1efaf8-2a90-41de-8674-fa27f77d0336";
              position = 1000;
              theme = {
                type = "gradient";
                colors = [
                  {
                    algorithm = "complementary";
                    type = "undefined";
                    red = 255;
                    green = 252;
                    blue = 240;
                  }
                ];
                opacity = 1.0;
              };
            };
          };
          extensions = {
            force = true;
            packages = with config.modules.firefox.addons; [
              ublock-origin
              sidebery
              bitwarden
              refined-github
              sponsorblock
              zotero-connector
            ];
          };
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
