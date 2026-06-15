// Navigate to homepage
function startQuiz(setNumber) {
    localStorage.setItem('currentSet', setNumber);
    localStorage.setItem('currentQuestion', 1);
    window.location.href = 'quiz.html';
}

function goHome() {
    window.location.href = 'index.html';
}
