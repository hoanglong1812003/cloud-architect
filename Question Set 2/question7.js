// Question 7 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[7] = {
    question: "Which AWS service allows Amazon EC2 compute capacity to automatically scale based on the incoming traffic, and can launch instances backed by On-Demand Capacity Reservations?",
    answers: [
        "AWS CloudTrail",
        "Amazon Lightsail",
        "Amazon Macie",
        "AWS Auto Scaling"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Auto Scaling enables you to configure automatic scaling for the AWS resources that are part of your application in a matter of minutes. The AWS Auto Scaling console provides a single user interface to use the automatic scaling features of multiple AWS services. You can configure automatic scaling for individual resources or for whole applications.\n\nWith AWS Auto Scaling, you configure and manage to scale your resources through a scaling plan. The scaling plan uses dynamic scaling and predictive scaling to automatically scale your application's resources. This ensures that you add the required computing power to handle the load on your application and then remove it when it's no longer required.",
        incorrectReasons: [
            "this service is primarily used for governance, compliance, operational auditing, and risk auditing of your AWS account.",
            "this service is just a virtual private server (VPS) solution and is not used for Amazon EC2 Scaling. This service provides developers compute, storage, and networking capacity to deploy and manage websites and web applications in the cloud.",
            "this is just a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS.",
            null
        ]
    }
};

