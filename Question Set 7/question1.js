// Question 1 - Set 7
window.questionSet7 = window.questionSet7 || {};
window.questionSet7[1] = {
    question: "What is the lowest support plan that allows an unlimited number of technical support cases to be opened?",
    answers: [
        "Basic",
        "Unified Operations",
        "Enterprise",
        "Business Support+"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Support offers four plans: Basic, Business Support+, Enterprise Support, and Unified Operations. The Basic plan only provides billing and account support. Business Support+ is the lowest-cost support plan that provides unlimited technical support cases, 24/7 access to technical support engineers, the full set of Trusted Advisor checks, and access to the AWS Personal Health Dashboard. Therefore, Business Support+ is the lowest support tier that satisfies the requirement.",
        incorrectReasons: [
            "The Basic support plan only provides support for billing, account management, documentation, and limited Trusted Advisor checks. It does not allow customers to open technical support cases.",
            "Unified Operations provides unlimited technical support cases, but it is a higher-tier and more expensive support offering. The question asks for the lowest support plan that meets the requirement.",
            "Enterprise Support also provides unlimited technical support cases, but it is designed for business-critical workloads and costs more than Business Support+.",
            null
        ]
    }
};
