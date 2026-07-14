{
  description = "NixOS Configuration flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    firefox-addons = {
      url = "gitlab:rycee/nur-expressions?dir=pkgs/firefox-addons";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    nixcord.url = "github:kaylorben/nixcord";
  };

  outputs = { self, nixpkgs, ... }@inputs: {
    nixosConfigurations.inspiron = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      modules = [
        ./hosts/inspiron/configuration.nix
	      inputs.home-manager.nixosModules.home-manager {
	        home-manager.useGlobalPkgs = true;
	        home-manager.useUserPackages = true;
	        home-manager.backupFileExtension = "back";
	        home-manager.extraSpecialArgs = { inherit inputs; };
	        home-manager.users.druhan = import ./hosts/inspiron/home.nix;
          home-manager.sharedModules = [
            inputs.nixcord.homeModules.nixcord
            ./modules/home
          ];
        }
      ];
    };
  };
}
