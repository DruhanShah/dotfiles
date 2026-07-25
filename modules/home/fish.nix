{ pkgs, lib, config, ... }:
{
  options = {
    modules.fish.enable = lib.mkEnableOption "Enable Fish and other shell config";
  };

  config = lib.mkIf config.modules.fish.enable {
    programs.fish = {
      enable = true;
      interactiveShellInit = ''
set fish_greeting
'';
      shellAliases = {
        ltrcgpu3 = "ssh gamba@ltrcgpu3";
        ada = "ssh druhan@ada.iiit.ac.in";
        python = "python3.14";
      };
      functions = {
        fish_prompt = ''
echo (string repeat -n (math $COLUMNS-1) "─") (set_color normal)
echo -s (set_color A3BE8C) "  " (set_color normal)
'';
        ed = ''
if test $INSIDE_EMACS = "ghostel"
    if test -n "$argv[1]"
        ghostel_cmd dired $argv[1]
    else
        ghostel_cmd dired ~
    end
else
    cd $argv[1]
end
'';
      };
    };

    programs.git = {
      enable = true;
      lfs.enable = true;
      settings.user.name = "DruhanShah";
      settings.user.email = "druhanrshah@gmail.com";
    };
    
    programs.btop = {
      enable = true;
      settings = {
        vim_keys = true;
        color_theme = "flexoki_light";
      };
      themes.flexoki_light = ../../dots/flexoki-btop.theme;
    };

    # Other shell utils
    home.packages = with pkgs; [
      # Archiving
      atool
      unzip
      zip
      unrar
      xz
      gzip
      p7zip

      trash-cli
      jq
    ];
  };
}
