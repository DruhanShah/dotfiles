{ pkgs, lib, config, ... }:
{
  options = {
    modules.devtools.enable = lib.mkEnableOption "Enable devtools";
  };

  config = lib.mkIf config.modules.devtools.enable {
    environment.systemPackages = with pkgs; [
      uv
      gcc
      gnumake
      zlib
      direnv
    ];

    programs.nix-ld = {
      enable = true;
      libraries = with pkgs; [
        stdenv.cc.cc.lib
        zlib
      ];
    };
  };
}
