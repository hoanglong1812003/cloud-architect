// Question 8 - Set 6
window.questionSet6[8] = {
    question: "A leading IT consulting company has an application which processes a large stream of financial data by an Amazon ECS Cluster then stores the result to a DynamoDB table. You have to design a solution to detect new entries in the DynamoDB table then automatically trigger a Lambda function to run some tests to verify the processed data. What solution can be easily implemented to alert the Lambda function of new entries while requiring minimal configuration change to your architecture?",
    answers: [
        "Invoke the Lambda functions using SNS each time that the ECS Cluster successfully processed financial data.",
        "Use CloudWatch Alarms to trigger the Lambda function whenever a new entry is created in the DynamoDB table.",
        "Enable DynamoDB Streams to capture table activity and automatically trigger the Lambda function.",
        "Use Systems Manager Automation to detect new entries in the DynamoDB table then automatically invoke the Lambda function for processing."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "DynamoDB Streams capture item-level changes in a DynamoDB table. By enabling DynamoDB Streams and associating a Lambda function with the stream, AWS Lambda automatically invokes the function whenever new records are inserted, updated, or deleted. This provides a serverless, event-driven solution with minimal architectural changes.",
        incorrectReasons: [
            "SNS could be used to invoke Lambda, but it would require additional integration logic from the ECS application. DynamoDB Streams provide a more direct and simpler solution.",
            "CloudWatch Alarms monitor metrics and thresholds, not individual item-level changes within a DynamoDB table. They cannot directly detect new table entries.",
            "AWS Systems Manager Automation is designed for operational and maintenance tasks on AWS resources. It is not intended to monitor DynamoDB table activity or trigger Lambda functions based on data changes."
        ]
    }
};