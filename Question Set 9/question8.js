// Question 8 - Set 9
window.questionSet9[8] = {
    question: "A government technology agency has recently hired a team to build a mobile tax app that allows users to upload their tax deductions and income records using their devices. The app would also allow users to view or download their uploaded files later on. These files are confidential tax-related documents that need to be stored in a single secure S3 bucket. Which of the following options should the solutions architect implement in the infrastructure when a new user registers on the app?",
    answers: [
        "Use Amazon DynamoDB to record the user's information and when the user uses the mobile app, create access credentials using STS with appropriate permissions. Store these credentials in the mobile app's memory and use them to access the S3 bucket every time the user runs the app.",
        "Create a set of long-term credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app and use them to access Amazon S3.",
        "Create an IAM user then assign appropriate permissions to the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.",
        "Record the user's information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses his/her mobile app, create temporary credentials using the 'AssumeRole' function in STS. Store these credentials in the mobile app's memory and use them to access the S3 bucket. Generate new credentials the next time the user runs the mobile app."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "The recommended approach is to use an IAM Role and generate temporary security credentials through AWS STS using the AssumeRole operation. Temporary credentials are short-lived, more secure than long-term access keys, and are ideal for mobile applications that need direct access to AWS resources such as Amazon S3.",
        incorrectReasons: [
            "Although STS is used, this option does not properly leverage IAM Roles and implies reusing credentials across sessions instead of generating fresh temporary credentials as needed.",
            "AWS STS cannot create long-term credentials. Additionally, storing credentials directly in a mobile application is a major security risk.",
            "Embedding IAM user access keys and secret keys in a mobile application is not a security best practice. Long-term credentials should never be distributed with client applications."
        ]
    }
};