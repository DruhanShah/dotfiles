{ pkgs, lib, ... }:
{
  imports = [
    ./desktop.nix
    ./devtools.nix
    ./fonts.nix
    ./games.nix
    ./kmonad.nix
    ./stylix.nix
  ];
}
