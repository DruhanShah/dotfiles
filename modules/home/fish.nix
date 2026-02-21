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
  };
}
