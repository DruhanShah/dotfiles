{ config, pkgs, inputs, ... }:
{
  imports =
    [
      ./hardware-configuration.nix
      ../../modules/nixos
    ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  boot.kernelPackages = pkgs.linuxPackages_latest;

  networking.hostName = "inspiron";
  networking.networkmanager.enable = true;

  time.timeZone = "Asia/Kolkata";
  i18n.defaultLocale = "en_US.UTF-8";
  i18n.extraLocaleSettings = {
    LC_ADDRESS = "en_IN";
    LC_IDENTIFICATION = "en_IN";
    LC_MEASUREMENT = "en_IN";
    LC_MONETARY = "en_IN";
    LC_NAME = "en_IN";
    LC_NUMERIC = "en_IN";
    LC_PAPER = "en_IN";
    LC_TELEPHONE = "en_IN";
    LC_TIME = "en_IN";
  };

  services.displayManager.sddm = {
    enable = true;
    wayland.enable = true;
  };
  services.xserver = {
    enable = true;
    xkb.layout = "us";
    xkb.options = "caps:escape, compose:ralt";
  };
  xdg.portal = {
    enable = true;
    config.common.default = [ "wlr" ];
  };

  hardware.bluetooth.enable = true;

  services.upower.enable = true;
  services.printing.enable = true;
  services.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
  };
  services.libinput.enable = true;

  nixpkgs.config.allowUnfree = true;
  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  users.users.druhan = {
    isNormalUser = true;
    description = "Druhan Shah";
    extraGroups = [ "networkmanager" "wheel" "video" ];
    shell = pkgs.fish;
  };

  programs.firefox.enable = true;
  programs.light.enable = true;
  programs.fish.enable = true;
  programs.niri.enable = true;

  programs.nh = {
    enable = true;
    clean.enable = true;
    clean.extraArgs = "--keep 3";
    flake = "/home/druhan/dotfiles";
  };

  modules.devtools.enable = true;
  modules.fonts.enable = true;
  modules.games.enable = true;
  modules.stylix.enable = true;

  environment.systemPackages = with pkgs; [
    git
    vim
    wget
    kitty
    grim
    slurp
    mupdf
    ffmpeg
    xwayland-satellite
    wev
    linux-wifi-hotspot
    haveged
  ];

  services.openssh = {
    enable = true;
    settings = {
      PermitRootLogin = "no";
      PasswordAuthentication = false;
    };
    openFirewall = true;
  };

  system.stateVersion = "26.05";

}
