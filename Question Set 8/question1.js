// Question 1 - Set 8
window.questionSet8 = window.questionSet8 || {};
window.questionSet8[1] = {
    question: "Which of the following RDS engines allows you to bring your own license (BYOL)?",
    answers: [
        "PostgreSQL",
        "MS SQL",
        "MySQL",
        "Oracle"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Amazon RDS for Oracle supports two licensing models: License Included and Bring Your Own License (BYOL). The BYOL model allows customers to use existing Oracle licenses or purchase licenses directly from Oracle while running Oracle databases on Amazon RDS.",
        incorrectReasons: [
            "PostgreSQL is an open-source database engine and does not use a BYOL licensing model in Amazon RDS.",
            "Amazon RDS for Microsoft SQL Server primarily uses the License Included model and does not currently support the BYOL model in the same way Oracle does.",
            "MySQL is an open-source database engine and does not require a BYOL licensing model in Amazon RDS."
        ]
    }
};
