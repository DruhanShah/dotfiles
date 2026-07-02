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
              firefox-color.settings = {
                manifest_version = 2;
                name = "Flexoki Dynamic Theme";
                description = "Dynamic theme using the flexoki color scheme.";
                author = "Jost Alemann";
                version = "1.0";
                theme = {
                  properties = {
                    additional_backgrounds_alignment = [
                      "top"
                    ];
                    additional_backgrounds_tiling = [
                      "repeat"
                    ];
                  };
                  colors = {
                    toolbar = "rgb(255, 252, 240)";
                    toolbar_text = "rgb(64, 62, 60)";
                    frame = "rgb(242, 240, 229)";
                    tab_background_text = "rgb(64, 62, 60)";
                    toolbar_field = "rgb(230, 228, 217)";
                    toolbar_field_text = "rgb(64, 62, 60)";
                    tab_line = "rgb(159, 157, 150)";
                    popup = "rgb(255, 252, 240)";
                    popup_text = "rgb(64, 62, 60)";
                    button_background_active = "rgb(159, 157, 150)";
                    frame_inactive = "rgb(255, 252, 240)";
                    icons_attention = "rgb(32, 94, 166)";
                    icons = "rgb(64, 62, 60)";
                    ntp_background = "rgb(255, 252, 240)";
                    ntp_text = "rgb(64, 62, 60)";
                    popup_border = "rgb(32, 94, 166)";
                    popup_highlight_text = "rgb(64, 62, 60)";
                    popup_highlight = "rgb(159, 157, 150)";
                    sidebar_border = "rgba(255, 252, 240, 0)";
                    sidebar_highlight_text = "rgb(64, 62, 60)";
                    sidebar_highlight = "rgb(32, 94, 166)";
                    sidebar_text = "rgb(64, 62, 60)";
                    sidebar = "rgb(255, 252, 240)";
                    tab_background_separator = "rgb(32, 94, 166)";
                    tab_loading = "rgb(64, 62, 60)";
                    tab_selected = "rgb(255, 252, 240)";
                    tab_text = "rgb(64, 62, 60)";
                    toolbar_bottom_separator = "rgb(255, 252, 240)";
                    toolbar_field_border_focus = "rgb(32, 94, 166)";
                    toolbar_field_border = "rgb(255, 252, 240)";
                    toolbar_field_focus = "rgb(255, 252, 240)";
                    toolbar_field_highlight_text = "rgb(255, 252, 240)";
                    toolbar_field_highlight = "rgb(32, 94, 166)";
                    toolbar_field_separator = "rgb(32, 94, 166)";
                    toolbar_vertical_separator = "rgb(32, 94, 166)";
                  };
                };
              };
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
        ".mozilla/firefox/default/chrome/parfait".source = symlink "${dotDir}/firefox/parfait";
        ".mozilla/firefox/default/chrome/parfait".recursive = true;

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
            "text/plain"
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
