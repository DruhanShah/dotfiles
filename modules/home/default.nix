{ pkgs, lib, ... }:
{
  imports = [
    ./zen.nix
    ./vicinae.nix
    ./kitty.nix
    ./media.nix
    ./editing.nix
    ./discord.nix
    ./flameshot.nix
    ./syncthing.nix
    ./emacs.nix
    ./qtile.nix
    ./wallpapers.nix
    ./fish.nix
  ];
}
