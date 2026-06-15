// Question 2 - Set 9
window.questionSet9[2] = {
    question: "A leading mobile game company has a mission-critical server that is currently down in AWS. The Systems Administrator needs to bring it back up within 15 minutes for service continuity. Which of the following support plans will allow the Administrator to contact technical support to immediately resolve the issue?",
    answers: [
        "Enterprise Support",
        "Basic",
        "Unified Operations",
        "Business Support+"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "AWS Enterprise Support provides a response time of less than 15 minutes for business-critical system-down cases. This ensures rapid access to AWS technical experts to help restore service continuity.",
        incorrectReasons: [
            "Basic Support only includes billing support, documentation, and community forums. It does not provide technical support for production issues.",
            "Unified Operations offers advanced operational capabilities, but the documented 15-minute response SLA for business-critical cases is associated with Enterprise Support.",
            "Business Support+ provides faster support than Basic but offers a response time of less than 30 minutes for business-critical issues, which does not satisfy the 15-minute requirement."
        ]
    }
};