{ pkgs, lib, config, ... }:
{
  options = {
    modules.emacs.enable = lib.mkEnableOption "Enable Emacs config";
  };

  config = lib.mkIf config.modules.emacs.enable {
    programs.emacs = {
      enable = true;
      package = pkgs.emacs-pgtk;
      extraPackages = epkgs: with epkgs; [
        use-package

        evil
	      evil-collection
	      evil-surround
	      evil-commentary
	      evil-numbers
	      evil-god-state
	      evil-tex
        evil-textobj-tree-sitter

        modus-themes
	      spacious-padding
	      ultra-scroll
	      
        fontaine
	      ligature
	      nerd-icons
	      nerd-icons-dired
	      nerd-icons-ibuffer
	      nerd-icons-corfu
	      nerd-icons-completion
        rainbow-mode
	      
	      copilot

        vertico
	      marginalia
	      orderless
	      consult

        (melpaBuild {
          ename = "reader";
          pname = "emacs-reader";
          version = "20250630";
          src = pkgs.fetchFromGitea {
            domain = "codeberg.org";
            owner = "divyaranjan";
            repo = "emacs-reader";
            rev = "0.3.0";
            hash = "sha256-BpuWWGt46BVgQZPHzeLEbzT+ooR4v29R+1Lv0K55kK8=";
          };
          files = ''(:defaults "render-core.so")'';
          nativeBuildInputs = [ pkgs.pkg-config ];
          buildInputs = with pkgs; [ gcc mupdf gnumake pkg-config ];
          preBuild = "make clean all";
        })

        auctex
	      cdlatex

	      org-autolist
	      mixed-pitch
	      org-modern

        tree-sitter
        tree-sitter-langs
      	treesit-grammars.with-all-grammars
	      treesit-auto
	      exec-path-from-shell
	      direnv
	      highlight-indent-guides

	      corfu

	      yasnippet

	      ready-player

	      nix-mode
	      qml-mode
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

    home.packages = with pkgs; [
      texliveFull
      ghostscript
    ];

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots/emacs";
        symlink = config.lib.file.mkOutOfStoreSymlink;
      in {
        ".config/emacs/init.el".text = ''
(require 'org)
(require 'ob-tangle)
(mapc #'org-babel-load-file (directory-files "~/dotfiles/dots/emacs/" t "\\.org$"))
'';
        ".config/emacs/early-init.el".text = "";
        ".config/emacs/config.org".source = symlink "${dotDir}/config.org";

        ".config/emacs/snippets".source = symlink "${dotDir}/snippets";
        ".config/emacs/snippets".recursive = true;
        ".config/emacs/themes".source = symlink "${dotDir}/themes";
        ".config/emacs/themes".recursive = true;
      };
  };
}
