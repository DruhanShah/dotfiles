{ pkgs, lib, ... }:
{
  imports = [
    ./stylix.nix
    ./firefox.nix
    ./niri.nix
    ./kitty.nix
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
