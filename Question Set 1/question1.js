// Question 1 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[1] = {
    question: "Which AWS service helps review IAM policies to identify resources shared with an external entity and generates policies based on access activity?",
    answers: [
        "AWS License Manager",
        "AWS Proton",
        "AWS IAM Access Analyzer",
        "AWS Systems Manager Parameter Store"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. The AWS IAM Access Analyzer offers the following features: identify resources in your organization and accounts that are shared with an external entity, validate IAM policies against policy grammar and best practices, and generate IAM policies based on access activity in your AWS CloudTrail logs.\n\nIn this scenario, the key points are 'identify resources shared with an external entity' and 'generate policies based on access activity.' When you create an analyzer for your account, the analyzer keeps track of all the supported resources in your zone of trust. If IAM Access Analyzer detects an external principal outside your trusted zone with access privileges, it generates a finding. For policy generation, the IAM Access Analyzer uses CloudTrail logs for analysis and produces an IAM policy based on recognized actions and services.",
        incorrectReasons: [
            "this just allows you to manage software licenses from different vendors. You cannot use this to generate policies based on access activity in AWS CloudTrail.",
            "this service is a deployment workflow tool. It is mainly used to standardize infrastructure and automate the deployment of serverless & container-based applications.",
            null,
            "this service is primarily used to centralize the configuration data of its application. You can store data such as passwords, database strings, AMI IDs, and license codes as parameter values."
        ]
    }
};

