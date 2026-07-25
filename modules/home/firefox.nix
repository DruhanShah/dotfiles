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
            "svg.context-properties.content.enabled" = true;
            "browser.newtabpage.activity-stream.nova.enabled" = false;
          };
          extensions = {
            force = true;
            packages = with config.modules.firefox.addons; [
              firefox-color
              ublock-origin
              sidebery
              bitwarden
              refined-github
              sponsorblock
              zotero-connector
            ];
            settings = {
              firefox-color.settings = lib.importJSON ../../dots/firefox/flexoki.json;
            };
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

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".mozilla/firefox/default/chrome/userContent.css".source = symlink "${dotDir}/firefox/userContent.css";
        ".mozilla/firefox/default/chrome/userChrome.css".source = symlink "${dotDir}/firefox/userChrome.css";
        ".mozilla/firefox/default/chrome/user.js".source = symlink "${dotDir}/firefox/user.js";
      };

    xdg.mimeApps =
      let
        associations = builtins.listToAttrs (
          map (name: {
            inherit name;
            value = "firefox.desktop";
          }) [
            "application/x-extension-shtml"
            "application/x-extension-xhtml"
            "application/x-extension-html"
            "application/x-extension-xht"
            "application/x-extension-htm"
            "x-scheme-handler/unknown"
            "x-scheme-handler/mailto"
            "x-scheme-handler/chrome"
            "x-scheme-handler/about"
            "x-scheme-handler/https"
            "x-scheme-handler/http"
            "application/xhtml+xml"
            "application/json"
            "text/html"
          ]
        );
      in {
        enable = true;
        associations.added = associations;
        defaultApplications = associations;
      };
  };
}
