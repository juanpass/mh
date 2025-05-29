nix
    { pkgs ? import <nixpkgs> {} }:

    pkgs.mkShell {
      packages = with pkgs; [
        # other packages...
        nodejs
        python3
        asdf-vm
      ];
    }