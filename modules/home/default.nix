{ pkgs, lib, ... }:
{
  imports = [
    ./niri.nix
    ./zen.nix
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
