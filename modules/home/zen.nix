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
      suppressXdgMigrationWarning = true;
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
      profiles."default" = let
        spaces = {
          "Default Space" = {
            id = "bf1efaf8-2a90-41de-8674-fa27f77d0336";
            position = 1000;
          };
        };
        pins = {
          "Comms" = {
            id = "1771828783964-79";
            position = 100;
            isGroup = true;
            isFolderCollapsed = true;
            editedTitle = true;
            workspace = spaces."Default Space".id;
          };
          "Whatsapp" = {
            id = "982a7951-708f-49b4-b769-afb496d604bc";
            position = 101;
            url = "https://web.whatsapp.com/";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Comms".id;
          };
          "GMail" = {
            id = "efa7e4b7-843c-4f3f-a476-4052d16c960f";
            position = 102;
            url = "https://mail.google.com/";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Comms".id;
          };
          "Outlook" = {
            id = "13404255-dbc9-4312-b14a-2e31af18251f";
            position = 103;
            url = "https://outlook.office.com/";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Comms".id;
          };
          "GCal" = {
            id = "03b3d3cd-545e-4a61-93f9-38bbbab5d867";
            position = 104;
            url = "https:/calendar.google.com/";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Comms".id;
          };
          "Courses" = {
            id = "1771828795483-41";
            position = 200;
            isGroup = true;
            isFolderCollapsed = true;
            editedTitle = true;
            workspace = spaces."Default Space".id;
          };
          "AoLM Sprints" = {
            id = "cd68a279-e723-4027-8823-f2f9c40ee72f";
            position = 201;
            url = "https://docs.google.com/spreadsheets/d/1KqJUGdRLknI6Kf-Hy4dVDkzZ5madsDp181DNh2A8jrA/edit";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Courses".id;
          };
          "iNLP Mastersheet" = {
            id = "d5ba7578-0471-4daf-b455-b6528bb2f5cf";
            position = 202;
            url = "https://docs.google.com/spreadsheets/d/1lNR-9DU3Fx2ZgrmGbNOhTJ3cKjznUT9OWxIvNJgCABY/edit?gid=0";
            workspace = spaces."Default Space".id;
            folderParentId = pins."Courses".id;
          };
        };
      in {
        extensions.packages = with config.modules.zen.addons; [
	        bitwarden
          sponsorblock
	        stylus
	        ublock-origin
          zen-internet
	        zotero-connector
        ];
	      spacesForce = true;
        pinsForce = true;
        inherit spaces pins;
      };
    };
  };
}
