# Script to convert all question files to namespace pattern

# Function to convert a question file
function ConvertQuestionFile {
    param(
        [string]$FilePath,
        [int]$SetNumber,
        [int]$QuestionNumber
    )
    
    $content = Get-Content $FilePath -Raw
    
    # Replace: const questionX = { with window.questionSetY[X] = {
    $oldPattern = "const question$QuestionNumber = \{"
    $newPattern = "window.questionSet$SetNumber = window.questionSet$SetNumber || {};`nwindow.questionSet$SetNumber[$QuestionNumber] = {"
    
    $content = $content -replace [regex]::Escape($oldPattern), $newPattern
    
    # Save the file
    Set-Content -Path $FilePath -Value $content -Encoding UTF8
    
    Write-Host "✅ Converted: $FilePath" -ForegroundColor Green
}

# Convert Question Set 1
Write-Host "`n📁 Converting Question Set 1..." -ForegroundColor Cyan
for ($i = 1; $i -le 10; $i++) {
    $file = "d:\cloud-architect\Question Set 1\question$i.js"
    if (Test-Path $file) {
        ConvertQuestionFile -FilePath $file -SetNumber 1 -QuestionNumber $i
    }
}

# Convert Question Set 2
Write-Host "`n📁 Converting Question Set 2..." -ForegroundColor Cyan
for ($i = 1; $i -le 10; $i++) {
    $file = "d:\cloud-architect\Question Set 2\question$i.js"
    if (Test-Path $file) {
        ConvertQuestionFile -FilePath $file -SetNumber 2 -QuestionNumber $i
    }
}

# Convert Question Set 3
Write-Host "`n📁 Converting Question Set 3..." -ForegroundColor Cyan
for ($i = 1; $i -le 10; $i++) {
    $file = "d:\cloud-architect\Question Set 3\question$i.js"
    if (Test-Path $file) {
        ConvertQuestionFile -FilePath $file -SetNumber 3 -QuestionNumber $i
    }
}

Write-Host "`n✅ All files converted successfully!" -ForegroundColor Green
