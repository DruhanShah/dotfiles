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
        ltrcgpu3 = "kitty +kitten ssh gamba@ltrcgpu3";
        ada = "kitty +kitten ssh druhan@ada.iiit.ac.in";
        python = "python3.14";
      };
      functions = {
        fish_prompt =
          let
            blue = "(set_color 81A1C1)";
            green = "(set_color A3BE8C)";
          in ''
if test -n "$IN_NIX_SHELL"
    set nix " 󱄅 "
else
    set nix ""
end
echo -s (set_color -o) (prompt_pwd --full-length-dirs 2) ${blue} $nix ${green}"  "(set_color normal)
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
