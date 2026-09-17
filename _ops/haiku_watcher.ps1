# Haiku File Watcher Daemon
# Monitors 3 paths for changes and reports to stdout

$opsPath = "C:\Projetos\08_Renda_Extra\06_Prestacao_Servicos\02_PORTFOLIO_WEB\_ops"
$progressPath = "$opsPath\PROGRESS.md"
$pareceresPath = "$opsPath\PARECERES.md"
$screenshotsPath = "$opsPath\SCREENSHOTS"

# Initial baseline
$lastProgressTime = $null
$lastProgressSize = $null
$lastPareceresTime = $null
$lastPareceresSize = $null
$lastScreenshotsCount = $null
$lastScreenshotsSize = $null
$pollCount = 0
$noChangeCount = 0

# Get initial state
function Get-CurrentState {
    $state = @{}

    if (Test-Path $progressPath) {
        $f = Get-Item $progressPath
        $state.progressTime = $f.LastWriteTime
        $state.progressSize = $f.Length
    } else {
        $state.progressTime = $null
        $state.progressSize = $null
    }

    if (Test-Path $pareceresPath) {
        $f = Get-Item $pareceresPath
        $state.pareceresTime = $f.LastWriteTime
        $state.pareceresSize = $f.Length
    } else {
        $state.pareceresTime = $null
        $state.pareceresSize = $null
    }

    if (Test-Path $screenshotsPath) {
        $pngs = Get-ChildItem $screenshotsPath -Filter "*.png" -ErrorAction SilentlyContinue
        $state.screenshotsCount = $pngs.Count
        $state.screenshotsSize = ($pngs | Measure-Object -Property Length -Sum).Sum
        $state.screenshotsTime = ($pngs | Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime
    } else {
        $state.screenshotsCount = 0
        $state.screenshotsSize = 0
        $state.screenshotsTime = $null
    }

    return $state
}

# Capture initial baseline
$initial = Get-CurrentState
$lastProgressTime = $initial.progressTime
$lastProgressSize = $initial.progressSize
$lastPareceresTime = $initial.pareceresTime
$lastPareceresSize = $initial.pareceresSize
$lastScreenshotsCount = $initial.screenshotsCount
$lastScreenshotsSize = $initial.screenshotsSize

$timestamp = Get-Date -Format "HH:mm:ss"
Write-Output "[HAIKU WATCH] $timestamp daemon iniciado — baseline capturado: PROGRESS=$lastProgressSize bytes, SCREENSHOTS=$lastScreenshotsCount PNGs, PARECERES=$lastPareceresSize bytes"

# Main polling loop
while ($true) {
    Start-Sleep -Seconds 30
    $pollCount++
    $current = Get-CurrentState
    $timestamp = Get-Date -Format "HH:mm:ss"
    $changed = $false

    # Check PROGRESS.md
    if ($current.progressSize -ne $lastProgressSize -or $current.progressTime -ne $lastProgressTime) {
        $changed = $true
        $delta = "$lastProgressSize → $($current.progressSize)"

        # Detect new STEP
        if (Test-Path $progressPath) {
            $content = Get-Content $progressPath -Raw -ErrorAction SilentlyContinue
            if ($content -match '##\s+\[STEP\s+(\d+)\]') {
                $stepNum = $matches[1]
                Write-Output "[HAIKU WATCH] $timestamp mudança detectada"
                Write-Output "path: PROGRESS.md"
                Write-Output "evento: arquivo_modificado"
                Write-Output "delta_bytes: $delta"
                Write-Output "detalhes: novo STEP $stepNum detectado"
            } else {
                Write-Output "[HAIKU WATCH] $timestamp mudança detectada"
                Write-Output "path: PROGRESS.md"
                Write-Output "evento: arquivo_modificado"
                Write-Output "delta_bytes: $delta"
                Write-Output "detalhes: arquivo modificado"
            }
        }

        $lastProgressSize = $current.progressSize
        $lastProgressTime = $current.progressTime
    }

    # Check SCREENSHOTS
    if ($current.screenshotsCount -ne $lastScreenshotsCount -or $current.screenshotsSize -ne $lastScreenshotsSize) {
        $changed = $true
        $delta = "$lastScreenshotsSize → $($current.screenshotsSize)"

        # Find new PNGs
        if ($current.screenshotsCount -gt $lastScreenshotsCount) {
            $newCount = $current.screenshotsCount - $lastScreenshotsCount
            Write-Output "[HAIKU WATCH] $timestamp mudança detectada"
            Write-Output "path: SCREENSHOTS/"
            Write-Output "evento: novo_arquivo"
            Write-Output "delta_bytes: $delta"
            Write-Output "detalhes: $newCount novo(s) PNG detectado(s)"
        } else {
            Write-Output "[HAIKU WATCH] $timestamp mudança detectada"
            Write-Output "path: SCREENSHOTS/"
            Write-Output "evento: arquivo_modificado"
            Write-Output "delta_bytes: $delta"
            Write-Output "detalhes: diretório modificado"
        }

        $lastScreenshotsCount = $current.screenshotsCount
        $lastScreenshotsSize = $current.screenshotsSize
    }

    # Check PARECERES.md (only for tracking, but don't report to master)
    # We track it to detect our own writes returning, but don't report

    if (-not $changed) {
        $noChangeCount++
        if ($noChangeCount -ge 20) {  # 10 minutes (20 polls x 30s)
            Write-Output "[HAIKU WATCH] $timestamp heartbeat — 10min sem mudança em PROGRESS/SCREENSHOTS"
            $noChangeCount = 0
        }
    } else {
        $noChangeCount = 0
    }
}
