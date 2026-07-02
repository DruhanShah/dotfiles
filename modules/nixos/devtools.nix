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
      python314Packages.jedi-language-server
      yaml-language-server
      bash-language-server
      
      mupdf
      ffmpeg
      imagemagick
      # Doesn't actually belong here but I'm putting it next to ffmpeg
      yt-dlp
    ];

    programs.direnv.enable = true;
    programs.nix-ld = {
      enable = true;
      libraries = with pkgs; [
        stdenv.cc.cc.lib
        zlib
        imagemagick
      ];
    };
  };
}
