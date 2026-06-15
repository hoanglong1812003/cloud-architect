// Question 3 - Set 9
window.questionSet9[3] = {
    question: "Which of the following is an example of having a highly available application in AWS?",
    answers: [
        "Using Amazon SQS to decouple messages between a sender and a receiver",
        "Running spot instances for your EC2 workloads",
        "Running CloudFront for the static website in your S3 bucket",
        "Running your RDS instance with multi-AZ enabled"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Amazon RDS Multi-AZ deployments provide high availability by maintaining a synchronous standby replica in another Availability Zone. If the primary database fails, RDS automatically performs a failover to the standby instance.",
        incorrectReasons: [
            "Amazon SQS improves decoupling and fault tolerance between application components, but it does not directly provide high availability for the application itself.",
            "Spot Instances can be interrupted and terminated by AWS with short notice, making them unsuitable for workloads that require high availability.",
            "CloudFront improves content delivery performance and global accessibility but is not specifically a high-availability mechanism for application infrastructure."
        ]
    }
};