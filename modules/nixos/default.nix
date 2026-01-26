{ pkgs, lib, ... }:
{
  imports = [
    ./devtools.nix
    ./fonts.nix
    ./games.nix
    ./stylix.nix
  ];
}
