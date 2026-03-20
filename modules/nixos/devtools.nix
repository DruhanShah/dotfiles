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

      copilot-language-server
      mupdf
      ffmpeg # Didn't know where else to put this lol
    ];

    programs.direnv.enable = true;
    programs.nix-ld = {
      enable = true;
      libraries = with pkgs; [
        stdenv.cc.cc.lib
        zlib
      ];
    };
  };
}
