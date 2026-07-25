{ pkgs, lib, ... }:
{
  imports = [
    ./stylix.nix
    ./firefox.nix
    ./niri.nix
    ./ghostty.nix
    ./media.nix
    ./editing.nix
    ./syncthing.nix
    ./emacs.nix
    ./social.nix
    ./qtile.nix
    ./wallpapers.nix
    ./fish.nix
  ];
}
