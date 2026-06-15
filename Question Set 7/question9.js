// Question 9 - Set 7
window.questionSet7 = window.questionSet7 || {};
window.questionSet7[9] = {
    question: "A company stores confidential financial documents as well as sensitive corporate information in an Amazon S3 bucket. There is a new security policy that prohibits any public S3 objects in the company’s S3 bucket. In the event that a public object was identified, the IT Compliance team must be notified immediately and the object’s permissions must be remediated automatically. The notification must be sent as soon as a public object was created in the bucket. What is the MOST suitable solution that should be implemented by the Solutions Architect to comply with this data policy?",
    answers: [
        "Set up a Systems Manager (SSM) Automation document that changes any public object in the bucket to private. Integrate Amazon EventBridge with AWS Lambda to create a scheduled process that checks the S3 bucket every hour. Configure the Lambda function to invoke the SSM Automation document when a public object is identified and to notify the IT Compliance team via email using Amazon SNS.",
        "Enable object-level logging in the S3 bucket to automatically track S3 actions using CloudTrail. Set up an Amazon EventBridge rule with an SNS Topic to notify the IT Compliance team when a PutObject API call with public-read permission is detected in the CloudTrail logs. Launch another CloudWatch Events rule that invokes an AWS Lambda function to turn the newly uploaded public object to private.",
        "Automatically track S3 actions using the Trusted Advisor API and AWS Cloud Development Kit (CDK). Set up an Amazon EventBridge rule with an Amazon SNS Topic to notify the IT Compliance team when the Trusted Advisor detected a PutObject API call with public-read permission. Launch another CloudWatch Events rule that invokes an AWS Lambda function to turn the newly uploaded public object to private.",
        "Integrate Amazon Lex with Amazon GuardDuty to detect public objects in the S3 bucket and to automatically update the permission of a public object to private. Associate an SNS Topic to Amazon Lex to notify the IT Compliance team via email if a public object was identified."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon S3 integrates with AWS CloudTrail, which can capture object-level API activities such as PutObject operations. By enabling object-level logging, CloudTrail can detect when an object is uploaded with public-read permissions. Amazon EventBridge can then immediately trigger actions such as sending notifications through Amazon SNS and invoking an AWS Lambda function to automatically remediate the object permissions. This solution provides near real-time detection, notification, and automated remediation as required by the security policy.",
        incorrectReasons: [
            "This solution relies on a scheduled process that runs every hour. The requirement specifies that notifications must be sent immediately after a public object is created, so hourly checks introduce unacceptable delays.",
            null,
            "Trusted Advisor does not provide object-level monitoring of S3 permissions. It offers high-level recommendations and checks but cannot reliably detect every public object creation event in real time.",
            "Amazon Lex is a conversational AI service and is unrelated to S3 object permission monitoring. Although Amazon GuardDuty provides threat detection, neither service is designed to automatically detect and remediate public S3 objects in the manner required."
        ]
    }
};
