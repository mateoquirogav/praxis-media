# Sube una imagen al repo praxis-media y devuelve el link de jsDelivr.
# Uso:  .\subir.ps1 -Archivo "C:\ruta\foto.jpg" -Cliente "tacuba"
param(
  [Parameter(Mandatory=$true)][string]$Archivo,
  [Parameter(Mandatory=$true)][string]$Cliente
)
$env:PATH += ";C:\Program Files\GitHub CLI"
$repo = "C:\Users\mateo\praxis-media"
$user = "mateoquirogav"

if (-not (Test-Path $Archivo)) { Write-Host "No existe el archivo: $Archivo" -ForegroundColor Red; exit 1 }

$destinoDir = Join-Path $repo $Cliente
if (-not (Test-Path $destinoDir)) { New-Item -ItemType Directory -Path $destinoDir | Out-Null }

$nombre = Split-Path $Archivo -Leaf
Copy-Item $Archivo (Join-Path $destinoDir $nombre) -Force

Set-Location $repo
git add -A | Out-Null
git commit -m "add $Cliente/$nombre" | Out-Null
git push | Out-Null

$url = "https://cdn.jsdelivr.net/gh/$user/praxis-media@main/$Cliente/$nombre"
Write-Host ""
Write-Host "LISTO. Link para pegar en Tiendanube:" -ForegroundColor Green
Write-Host $url -ForegroundColor Cyan
