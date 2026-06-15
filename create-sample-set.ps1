# Script to create a sample question set for testing
# Usage: .\create-sample-set.ps1 -SetNumber 5

param(
    [Parameter(Mandatory=$true)]
    [int]$SetNumber
)

$folderPath = "d:\cloud-architect\Question Set $SetNumber"

# Check if folder already exists
if (Test-Path $folderPath) {
    Write-Host "ERROR: Question Set $SetNumber already exists!" -ForegroundColor Red
    Write-Host "Location: $folderPath" -ForegroundColor Gray
    exit 1
}

# Create folder
Write-Host ""
Write-Host "Creating Question Set $SetNumber..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path $folderPath | Out-Null
Write-Host "Created folder: $folderPath" -ForegroundColor Green

# Create 10 sample question files
for ($i = 1; $i -le 10; $i++) {
    $filePath = "$folderPath\question$i.js"
    
    $content = @"
// Question $i - Set $SetNumber
window.questionSet$SetNumber = window.questionSet$SetNumber || {};
window.questionSet$SetNumber[$i] = {
    question: "Sample question $i for Question Set $SetNumber - Replace this with your actual question?",
    answers: [
        "Answer A - Replace this",
        "Answer B - Replace this",
        "Answer C - Replace this (CORRECT)",
        "Answer D - Replace this"
    ],
    correctAnswer: 2,  // Index 0-3 (0=A, 1=B, 2=C, 3=D)
    explanation: {
        correct: "This is the explanation for why answer C is correct. Replace this with your actual explanation.",
        incorrectReasons: [
            "Reason why A is incorrect. Replace this with your actual reason.",
            "Reason why B is incorrect. Replace this with your actual reason.",
            null,  // C is correct, so set to null
            "Reason why D is incorrect. Replace this with your actual reason."
        ]
    }
};
"@
    
    Set-Content -Path $filePath -Value $content -Encoding UTF8
    Write-Host "  Created: question$i.js" -ForegroundColor Gray
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "   SUCCESS!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Question Set $SetNumber has been created with 10 sample questions." -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit the files in: $folderPath" -ForegroundColor Gray
Write-Host "2. Replace sample content with your actual questions" -ForegroundColor Gray
Write-Host "3. Refresh your browser - the new set will appear automatically!" -ForegroundColor Gray
Write-Host ""
