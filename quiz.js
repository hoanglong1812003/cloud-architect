// Main Quiz Application
// This file handles quiz logic and uses auto-loaded question data

// Quiz Data Structure
const quizData = {};

// State management
let currentSet = 1;
let currentQuestion = 1;
let selectedAnswer = null;
let answered = false;

// Initialize quiz
function initQuiz() {
    // Load data from window.allQuestionSets (populated by auto-load-questions.js)
    if (window.allQuestionSets && Object.keys(window.allQuestionSets).length > 0) {
        Object.assign(quizData, window.allQuestionSets);
        
        console.log('✅ Quiz initialized with question sets:', Object.keys(quizData));
        
        // Get current set and question from localStorage
        currentSet = parseInt(localStorage.getItem('currentSet')) || 1;
        currentQuestion = parseInt(localStorage.getItem('currentQuestion')) || 1;
        
        // Validate that the set exists
        if (!quizData[currentSet]) {
            console.warn(`⚠️  Set ${currentSet} not found, defaulting to Set 1`);
            currentSet = 1;
            localStorage.setItem('currentSet', currentSet);
        }
        
        document.getElementById('quiz-title').textContent = `Bộ Đề ${currentSet}`;
        
        // Get total questions in current set
        const totalQuestionsInSet = Object.keys(quizData[currentSet] || {}).length;
        
        // Validate question number
        if (currentQuestion > totalQuestionsInSet) {
            currentQuestion = 1;
            localStorage.setItem('currentQuestion', currentQuestion);
        }
        
        loadQuestion();
        updateNavigationButtons();
    } else {
        document.getElementById('question-text').innerHTML = `
            <div style="color: red;">
                ❌ Lỗi: Không tìm thấy dữ liệu câu hỏi.<br>
                <small>Vui lòng kiểm tra xem các thư mục "Question Set X" có tồn tại không.</small>
            </div>
        `;
    }
}

// Load current question
function loadQuestion() {
    const questionData = quizData[currentSet] && quizData[currentSet][currentQuestion];
    
    if (!questionData) {
        document.getElementById('question-text').innerHTML = `
            <div style="color: orange;">
                ⚠️ Câu hỏi ${currentQuestion} của Bộ Đề ${currentSet} chưa có dữ liệu.<br>
                <small>Vui lòng kiểm tra file question${currentQuestion}.js trong thư mục Question Set ${currentSet}</small>
            </div>
        `;
        document.getElementById('submit-btn').disabled = true;
        return;
    }
    
    // Get total questions in current set
    const totalQuestionsInSet = Object.keys(quizData[currentSet] || {}).length;
    
    document.getElementById('current-question').textContent = currentQuestion;
    document.getElementById('total-questions').textContent = totalQuestionsInSet;
    document.getElementById('question-text').textContent = questionData.question;
    
    // Load answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    questionData.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.setAttribute('data-index', index);
        answerDiv.onclick = () => selectAnswer(index);
        
        answerDiv.innerHTML = `
            <span class="answer-label">${labels[index]}.</span>
            <span class="answer-text">${answer}</span>
        `;
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Reset state
    selectedAnswer = null;
    answered = false;
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('explanation-section').style.display = 'none';
}

// Select an answer
function selectAnswer(index) {
    if (answered) return;
    
    selectedAnswer = index;
    
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked answer
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
    
    // Enable submit button
    document.getElementById('submit-btn').disabled = false;
}

// Submit answer
function submitAnswer() {
    if (selectedAnswer === null || answered) return;
    
    answered = true;
    const questionData = quizData[currentSet][currentQuestion];
    const correctAnswer = questionData.correctAnswer;
    
    // Disable all answer options
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        option.classList.add('disabled');
        option.onclick = null;
        
        if (index === correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedAnswer) {
            option.classList.add('incorrect');
        }
    });
    
    // Show explanation
    showExplanation(questionData, correctAnswer);
    
    // Disable submit button
    document.getElementById('submit-btn').disabled = true;
}

// Show explanation
function showExplanation(questionData, correctAnswer) {
    const explanationSection = document.getElementById('explanation-section');
    const explanationContent = document.getElementById('explanation-content');
    
    const labels = ['A', 'B', 'C', 'D'];
    
    let explanationHTML = `
        <p><strong>Đáp án đúng: <span class="correct-answer">${labels[correctAnswer]}</span></strong></p>
        <p><strong class="correct-answer">Correct</strong></p>
        <p>${questionData.explanation.correct}</p>
    `;
    
    // Add incorrect answer explanations
    questionData.explanation.incorrectReasons.forEach((reason, index) => {
        if (reason !== null) {
            explanationHTML += `
                <p style="margin-top: 15px;">
                    <span class="incorrect-answer">The option that says: ${questionData.answers[index]}</span> 
                    is incorrect because ${reason}
                </p>
            `;
        }
    });
    
    explanationContent.innerHTML = explanationHTML;
    explanationSection.style.display = 'block';
}

// Navigation functions
function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        localStorage.setItem('currentQuestion', currentQuestion);
        loadQuestion();
        updateNavigationButtons();
    }
}

function nextQuestion() {
    const totalQuestionsInSet = Object.keys(quizData[currentSet] || {}).length;
    
    if (currentQuestion < totalQuestionsInSet) {
        currentQuestion++;
        localStorage.setItem('currentQuestion', currentQuestion);
        loadQuestion();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const totalQuestionsInSet = Object.keys(quizData[currentSet] || {}).length;
    
    document.getElementById('prev-btn').disabled = currentQuestion === 1;
    document.getElementById('next-btn').disabled = currentQuestion >= totalQuestionsInSet;
}

function goHome() {
    window.location.href = 'index.html';
}

console.log('📚 Quiz logic loaded');
