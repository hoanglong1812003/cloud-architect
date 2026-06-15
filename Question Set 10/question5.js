
// Question 5 - Set 10
window.questionSet10[5] = {
    question: "A company has a web application hosted in AWS cloud where the application logs are sent to Amazon CloudWatch. Lately, the web application has been encountering some errors which can be resolved simply by restarting the instance. What will you do to automatically restart the EC2 instances whenever the same application error occurs?",
    answers: [
        "First, look at the existing Flow logs for keywords related to the application error to create a custom metric. Then, create a CloudWatch alarm for that custom metric which calls a Lambda function that invokes an action to restart the EC2 instance.",
        "First, look at the existing CloudWatch logs for keywords related to the application error to create a custom metric. Then, create a CloudWatch alarm for that custom metric which invokes an action to restart the EC2 instance.",
        "First, look at the existing Flow logs for keywords related to the application error to create a custom metric. Then, create a CloudWatch alarm for that custom metric which invokes an action to restart the EC2 instance.",
        "First, look at the existing CloudWatch logs for keywords related to the application error to create a custom metric. Then, create an alarm in Amazon SNS for that custom metric which invokes an action to restart the EC2 instance."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "CloudWatch Logs can be analyzed using metric filters to create custom metrics based on application error patterns. A CloudWatch alarm can then trigger an EC2 reboot action automatically when the metric threshold is reached.",
        incorrectReasons: [
            "VPC Flow Logs capture network traffic information and are not intended for detecting application-level errors. Using Lambda adds unnecessary complexity because CloudWatch alarms can directly perform EC2 actions.",
            "Flow Logs do not contain application log data, so they cannot reliably detect application-specific errors.",
            "Amazon SNS does not create alarms. CloudWatch alarms can publish notifications to SNS, but the alarm itself must be created in CloudWatch."
        ]
    }
};

