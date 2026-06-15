// Question 4 - Set 5
window.questionSet5[4] = {
    question: "Which of the following allows you to set coverage targets and receive alerts when your utilization drops below the threshold you define?",
    answers: [
        "AWS Cost Explorer",
        "AWS Trusted Advisor",
        "AWS Budgets",
        "Amazon CloudWatch Billing Alarm"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Budgets allows you to create custom budgets and receive alerts when actual or forecasted costs exceed thresholds. It also supports reservation utilization and coverage budgets, enabling you to define coverage targets and receive notifications when utilization falls below your specified threshold.",
        incorrectReasons: [
            "AWS Cost Explorer is used to visualize and analyze AWS costs and usage over time, but it does not provide configurable utilization or coverage threshold alerts.",
            "AWS Trusted Advisor provides recommendations for cost optimization, security, performance, fault tolerance, and service limits, but it does not allow you to define reservation coverage targets and alerts.",
            "CloudWatch Billing Alarms can monitor estimated AWS charges but do not provide reservation utilization or coverage target monitoring capabilities."
        ]
    }
};