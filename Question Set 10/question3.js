
// Question 3 - Set 10
window.questionSet10[3] = {
    question: "An employee is asking for access to your S3 buckets. What should be the level of access that you should provide to him?",
    answers: [
        "Give him read-only access",
        "Ask what type of access he requires and only provide him those permissions",
        "Give him administrator access levels",
        "Give him S3 full access"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS security best practices follow the principle of least privilege. Users should be granted only the permissions necessary to perform their job responsibilities and nothing more.",
        incorrectReasons: [
            "Read-only access may not be sufficient if the employee requires additional permissions to perform specific tasks.",
            "Administrator access grants excessive permissions and increases security risks.",
            "Providing S3 Full Access violates the principle of least privilege if the employee does not require full administrative control over S3 resources."
        ]
    }
};

