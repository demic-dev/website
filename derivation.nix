{ stdenv, hugo, terminal }:
stdenv.mkDerivation {
  name = "demic.dev website";

  src = ./.;

  nativeBuildInputs = [ hugo ];
  buildPhase = ''
    cp -r $src/* .
    mkdir -p ./themes/terminal
    cp -r ${terminal}/* ./themes/terminal/
    ${hugo}/bin/hugo
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p $out
    cp -r public/* $out/
    runHook postInstall
  '';
}
