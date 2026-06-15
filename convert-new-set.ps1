# Script to convert a new question set to namespace pattern
# Usage: .\convert-new-set.ps1 -SetNumber 5

param(
    [Parameter(Mandatory=$false)]
    [int]$SetNumber = 0
)

function Convert-QuestionSet {
    param([int]$SetNum)
    
    $folderPath = "d:\cloud-architect\Question Set $SetNum"
    
    if (-not (Test-Path $folderPath)) {
        Write-Host "ERROR: Folder not found: $folderPath" -ForegroundColor Red
        return $false
    }
    
    $files = Get-ChildItem "$folderPath\question*.js" -ErrorAction SilentlyContinue
    
    if (-not $files) {
        Write-Host "ERROR: No question files found in: $folderPath" -ForegroundColor Red
        return $false
    }
    
    Write-Host ""
    Write-Host "Converting Question Set $SetNum..." -ForegroundColor Cyan
    Write-Host "Location: $folderPath" -ForegroundColor Gray
    
    $converted = 0
    
    foreach ($file in $files) {
        $num = $file.BaseName -replace 'question', ''
        $content = Get-Content $file.FullName -Raw
        
        # Check if already converted
        if ($content -match "window\.questionSet$SetNum") {
            Write-Host "  $($file.Name) - Already converted" -ForegroundColor Yellow
            continue
        }
        
        # Create the new pattern
        $oldPattern = "const question$num = {"
        $newPattern = "window.questionSet$SetNum = window.questionSet$SetNum || {};`r`nwindow.questionSet$SetNum[$num] = {"
        
        # Replace
        $content = $content -replace [regex]::Escape($oldPattern), $newPattern
        
        Set-Content $file.FullName -Value $content -Encoding UTF8
        Write-Host "  $($file.Name) - Converted" -ForegroundColor Green
        $converted++
    }
    
    Write-Host ""
    Write-Host "Set $SetNum - Converted $converted files" -ForegroundColor Green
    return $true
}

# Main execution
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   QUESTION SET CONVERTER TOOL" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($SetNumber -eq 0) {
    # Auto-detect all question sets
    Write-Host ""
    Write-Host "Auto-detecting question sets..." -ForegroundColor Yellow
    
    $foundSets = @()
    for ($i = 1; $i -le 20; $i++) {
        $folderPath = "d:\cloud-architect\Question Set $i"
        if (Test-Path $folderPath) {
            $foundSets += $i
        }
    }
    
    if ($foundSets.Count -eq 0) {
        Write-Host "ERROR: No question sets found!" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "Found $($foundSets.Count) question sets: $($foundSets -join ', ')" -ForegroundColor Cyan
    Write-Host ""
    
    $totalConverted = 0
    foreach ($setNum in $foundSets) {
        $result = Convert-QuestionSet -SetNum $setNum
        if ($result) { $totalConverted++ }
    }
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "   CONVERSION COMPLETE" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Total sets processed: $totalConverted" -ForegroundColor Green
    
} else {
    # Convert specific set
    $result = Convert-QuestionSet -SetNum $SetNumber
    
    if ($result) {
        Write-Host ""
        Write-Host "Conversion successful!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "Conversion failed!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Tips:" -ForegroundColor Cyan
Write-Host "  - Your question sets are now ready to use" -ForegroundColor Gray
Write-Host "  - Refresh your browser to see the changes" -ForegroundColor Gray
Write-Host "  - No need to edit HTML files manually!" -ForegroundColor Gray
Write-Host ""
