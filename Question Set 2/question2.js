// Question 2 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[2] = {
    question: "Which of the following is a key use case of AWS Control Tower?",
    answers: [
        "An easy way to establish a landing zone that implements an AWS well-architected, multi-account environment and applies the AWS best practices.",
        "A way for customers to send instructions to an AWS account on how to deploy popular technologies such as WordPress.",
        "A centralized logging service for all types of log files.",
        "A fast monitoring engine used to detect if any of your AWS accounts deviate from the AWS best practices."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "AWS Control Tower is for customers who want to create or manage their multi-account AWS environment with best practices. It offers prescriptive guidance to govern your AWS environment at scale. It gives you control over your environment without sacrificing the speed and agility AWS provides for builders.\n\nAWS Control Tower offers the easiest way to set up and govern a secure, multi-account AWS environment. It establishes a landing zone that is based on best-practices blueprints and enables governance using guardrails you can choose from a pre-packaged list. The landing zone is a well-architected, multi-account baseline that follows AWS best practices.",
        incorrectReasons: [
            null,
            "this is typically the use case of AWS Quick Starts, not AWS Control Tower.",
            "AWS Control Tower is not a logging service. There are other services that have this feature, such as Amazon CloudWatch Logs and Amazon OpenSearch Service.",
            "this is primarily the use case of either AWS Trusted Advisor or AWS Config, not AWS Control Tower."
        ]
    }
};

