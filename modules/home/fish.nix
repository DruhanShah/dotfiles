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
echo (set_color -o) (prompt_pwd --full-length-dirs 2) (set_color 40a02b)" "(set_color normal)
'';
      };
    };
  };
}
