{ pkgs, lib, config, ... }:
{
  options = {
    modules.fish.enable = lib.mkEnableOption "Enable Fish config";
  };

  config = lib.mkIf config.modules.fish.enable {
    programs.fish = {
      enable = true;
      interactiveShellInit = ''
set fish_greeting
'';
      functions = {
        fish_prompt = ''
if test -n "$IN_NIX_SHELL"
    set nix " 󱄅"
else
    set nix ""
end
echo -s (set_color -o) (prompt_pwd --full-length-dirs 2) (set_color 113384) $nix (set_color 226022)"  "(set_color normal)
'';
      };
    };

    # Also some git stuff
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
      themes.flexoki_light = ../../dots/btop/flexoki_light.theme;
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

      # Shell utils
      gh
      trash-cli
      jq
    ];
  };
}
