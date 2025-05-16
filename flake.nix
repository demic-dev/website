{
  description = "demic.dev website";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    terminal = {
      flake = false;
      url = "github:panr/hugo-theme-terminal";
    };
  };

  outputs = { self, nixpkgs, flake-utils, terminal }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let pkgs = nixpkgs.legacyPackages.${system}; in
        {
          devShells.default = import ./shell.nix { inherit pkgs; };
          packages = rec {
            website = pkgs.callPackage ./derivation.nix {
              terminal = terminal;
            };
            default = website;
          };
        }
      );
}
