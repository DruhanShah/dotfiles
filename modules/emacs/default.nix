{ pkgs, lib, config, ... }:
{
  options = {
    emacs.enable = lib.mkEnableOption "Enable Emacs config";
  };

  config = lib.mkIf config.emacs.enable {
    programs.emacs = {
      enable = true;
      package = pkgs.emacs-pgtk;
      extraPackages = epkgs: with epkgs; [
        tree-sitter
        tree-sitter-langs
      	treesit-grammars.with-all-grammars
      ];
    };
    services.emacs = {
      enable = true;
      defaultEditor = true;
      socketActivation.enable = true;
      startWithUserSession = true;
      client = {
        enable = true;
	arguments = ["-nca ''"];
      };
    };

    home.file =
    let
      dotDir = "${config.home.homeDirectory}/dotfiles/modules/emacs";
      symlink = config.lib.file.mkOutOfStoreSymlink;
    in {
      ".config/emacs/init.el".source = symlink "${dotDir}/init.el";
      ".config/emacs/early-init.el".source = symlink "${dotDir}/early-init.el";
      ".config/emacs/README.org".source = symlink "${dotDir}/README.org";
      ".config/emacs/elfeed.opml".source = symlink "${dotDir}/elfeed.opml";
      ".config/emacs/elfeed.org".source = symlink "${dotDir}/elfeed.org";

      ".config/emacs/assets".source = symlink "${dotDir}/assets";
      ".config/emacs/assets".recursive = true;
      ".config/emacs/nano".source = symlink "${dotDir}/nano";
      ".config/emacs/nano".recursive = true;
      ".config/emacs/snippets".source = symlink "${dotDir}/snippets";
      ".config/emacs/snippets".recursive = true;
    };
  };
}
