# Haiku File Watcher Daemon - Light Version
$opsPath = "C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB\_ops"
$progressPath = "$opsPath\PROGRESS.md"
$screenshotsPath = "$opsPath\SCREENSHOTS"

$lastP = 0; $lastS = 0

if (Test-Path $progressPath) { $lastP = (Get-Item $progressPath).Length }
if (Test-Path $screenshotsPath) { $lastS = ((Get-ChildItem $screenshotsPath -Filter *.png -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum) }

$ts = Get-Date -Format "HH:mm:ss"
Write-Output "[HAIKU WATCH] $ts daemon iniciado — baseline: PROGRESS=$lastP bytes, SCREENSHOTS=$lastS bytes"

while($true) {
    Start-Sleep -Seconds 30

    $cp = 0; $cs = 0
    if (Test-Path $progressPath) { $cp = (Get-Item $progressPath).Length }
    if (Test-Path $screenshotsPath) { $cs = ((Get-ChildItem $screenshotsPath -Filter *.png -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum) }

    $ts = Get-Date -Format "HH:mm:ss"

    if ($cp -ne $lastP) {
        Write-Output "[HAIKU WATCH] $ts mudança detectada"
        Write-Output "path: PROGRESS.md"
        Write-Output "evento: arquivo_modificado"
        Write-Output "delta_bytes: $lastP → $cp"
        $lastP = $cp
    }

    if ($cs -ne $lastS) {
        Write-Output "[HAIKU WATCH] $ts mudança detectada"
        Write-Output "path: SCREENSHOTS/"
        Write-Output "evento: arquivo_modificado"
        Write-Output "delta_bytes: $lastS → $cs"
        $lastS = $cs
    }
}
