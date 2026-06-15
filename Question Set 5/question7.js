// Question 7 - Set 5
window.questionSet5[7] = {
    question: "A company is using multiple AWS services to host its application. It wants to ensure the environment is optimized by adhering to AWS best practices. Which of the following services is capable of inspecting an AWS environment and making recommendations to lower expenditures, improve system performance and reliability, and close security gaps?",
    answers: [
        "Amazon Inspector",
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Trusted Advisor"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Trusted Advisor is an online tool that analyzes your AWS environment and provides recommendations based on AWS best practices. It helps optimize costs, improve performance, increase fault tolerance, strengthen security, and monitor service limits. Trusted Advisor organizes its recommendations into five categories: Cost Optimization, Security, Fault Tolerance, Performance, and Service Limits.",
        incorrectReasons: [
            "Amazon Inspector is an automated security assessment service that identifies vulnerabilities and security issues in workloads. It does not provide broad recommendations for cost optimization, performance improvements, and service limits.",
            "AWS Cost Explorer is used to visualize, understand, and analyze AWS costs and usage patterns. It does not perform best-practice assessments across your AWS environment.",
            "AWS Budgets helps track spending and usage against defined budget thresholds. Although it can generate alerts, it does not inspect resources and provide optimization recommendations."
        ]
    }
};