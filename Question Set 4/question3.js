// Question 3 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[3] = {
    question: "Which of the following is the most cost-effective AWS Support Plan that provides access to the AWS Support API for programmatic case management?",
    answers: [
        "Basic",
        "Enterprise",
        "Unified Operations",
        "Business Support+"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Support offers a range of plans that provide access to tools and expertise that support the success and operational health of your AWS solutions.\n\nThe AWS Support API provides access to some of the features of the AWS Support Center. This API allows programmatic access to AWS Support Center features to create, manage, and close support cases, and operationally manage Trusted Advisor requests and status.\n\nAWS provides this access for customers with a Business Support+, Enterprise Support, or Unified Operations plan. Among these plans, Business Support+ is the most cost-effective option.\n\nHence, the correct answer is: Business Support+.",
        incorrectReasons: [
            "it only provides access to billing and account support, documentation, and forums. It does not include access to the AWS Support API.",
            "although it provides access to the AWS Support API, it is more expensive than the Business Support+ plan.",
            "although it provides access to the AWS Support API, it is generally more expensive than the Business Support+ plan.",
            null
        ]
    }
};
