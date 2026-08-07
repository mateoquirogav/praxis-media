# Sube un video a Supabase Storage (bucket publico) y devuelve el link.
# Uso:  .\subir-video.ps1 -Archivo "C:\ruta\video.mp4" -Cliente "tacuba"
param(
  [Parameter(Mandatory=$true)][string]$Archivo,
  [Parameter(Mandatory=$true)][string]$Cliente
)

$envFile = "C:\Users\mateo\praxis-secrets\supabase.env"
if (-not (Test-Path $envFile)) { Write-Host "No encuentro el archivo de credenciales: $envFile" -ForegroundColor Red; exit 1 }
if (-not (Test-Path $Archivo)) { Write-Host "No existe el archivo: $Archivo" -ForegroundColor Red; exit 1 }

# Leer credenciales del .env
$cfg = @{}
Get-Content $envFile | ForEach-Object {
  if ($_ -match '^\s*([^#=]+)=(.*)$') { $cfg[$Matches[1].Trim()] = $Matches[2].Trim() }
}
$url    = $cfg['SUPABASE_URL']
$bucket = $cfg['SUPABASE_BUCKET']
$key    = $cfg['SUPABASE_KEY']
if (-not $key -or $key -eq 'PEGA_TU_CLAVE_ACA') { Write-Host "Falta pegar la clave en $envFile" -ForegroundColor Red; exit 1 }

$nombre = Split-Path $Archivo -Leaf
$ruta   = "$Cliente/$nombre"

# MIME por extension
$ext = [System.IO.Path]::GetExtension($nombre).ToLower()
$mime = switch ($ext) {
  ".mp4"  { "video/mp4" }
  ".webm" { "video/webm" }
  ".mov"  { "video/quicktime" }
  ".m4v"  { "video/x-m4v" }
  ".ogg"  { "video/ogg" }
  default { "application/octet-stream" }
}

$endpoint = "$url/storage/v1/object/$bucket/$ruta"
$headers = @{
  "Authorization" = "Bearer $key"
  "apikey"        = $key
  "x-upsert"      = "true"
}

try {
  Invoke-RestMethod -Uri $endpoint -Method Post -Headers $headers -ContentType $mime -InFile $Archivo -TimeoutSec 300 | Out-Null
  $publica = "$url/storage/v1/object/public/$bucket/$ruta"
  Write-Host ""
  Write-Host "LISTO. Link del video para pegar en Tiendanube:" -ForegroundColor Green
  Write-Host $publica -ForegroundColor Cyan
} catch {
  Write-Host "Fallo la subida: $($_.Exception.Message)" -ForegroundColor Red
  if ($_.ErrorDetails.Message) { Write-Host $_.ErrorDetails.Message }
}
