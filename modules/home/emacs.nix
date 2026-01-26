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
        tree-sitter
        tree-sitter-langs
      	treesit-grammars.with-all-grammars
        (melpaBuild {
          ename = "reader";
          pname = "emacs-reader";
          version = "20250630";
          src = pkgs.fetchFromGitea {
            domain = "codeberg.org";
            owner = "divyaranjan";
            repo = "emacs-reader";
            rev = "0.3.0"; # replace with 'tag' for stable
            hash = "sha256-BpuWWGt46BVgQZPHzeLEbzT+ooR4v29R+1Lv0K55kK8=";
          };
          files = ''(:defaults "render-core.so")'';
          nativeBuildInputs = [ pkgs.pkg-config ];
          buildInputs = with pkgs; [ gcc mupdf gnumake pkg-config ];
          preBuild = "make clean all";
        })
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
      nixd
    ];

    home.file =
      let
        dotDir = "${config.home.homeDirectory}/dotfiles/dots/emacs";
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
