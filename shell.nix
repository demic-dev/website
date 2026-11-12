{ pkgs ? import <nixpkgs> { } }: with pkgs;
mkShell {
  buildInputs = [
    hugo
  ];
  MOTD = ''
    hugo server -D   serve the site with drafts and live reload
    hugo             build the site into public/
  '';
}
