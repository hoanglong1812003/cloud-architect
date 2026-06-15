// Question 8 - Set 5
window.questionSet5[8] = {
    question: "A car dealership website hosted in Amazon EC2 stores car listings in an Amazon Aurora database managed by Amazon RDS. Once a vehicle has been sold, its data must be removed from the current listings and forwarded to a distributed processing system. Which of the following options can satisfy the given requirement?",
    answers: [
        "Create an RDS event subscription and send the notifications to AWS Lambda. Configure the Lambda function to fanout the event notifications to multiple Amazon SQS queues to update the target groups.",
        "Create an RDS event subscription and send the notifications to Amazon SNS. Configure the SNS topic to fan out the event notifications to multiple Amazon SQS queues. Process the data using AWS Lambda functions.",
        "Use an Aurora MySQL native function to invoke an AWS Lambda function whenever a vehicle listing is deleted. Configure the Lambda function to send the data to an Amazon SQS queue for the distributed processing system to consume.",
        "Create an RDS event subscription and send the notifications to Amazon SQS. Configure the SQS queues to fan out the event notifications to multiple Amazon SNS topics. Process the data using AWS Lambda functions."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Amazon Aurora MySQL supports native functions such as lambda_sync and lambda_async that can directly invoke AWS Lambda functions. In this scenario, a Lambda function can be triggered whenever a vehicle listing is deleted from the database. The Lambda function can then send the deleted listing data to an Amazon SQS queue, allowing downstream distributed processing systems to consume and process the information.",
        incorrectReasons: [
            "RDS event subscriptions are designed for operational and infrastructure events such as backups, failovers, or maintenance activities. They do not capture row-level database changes such as DELETE operations.",
            "Although SNS and SQS can be used for fan-out messaging patterns, RDS event subscriptions cannot detect application-level data changes such as deleted database records.",
            "RDS event subscriptions do not support capturing INSERT, UPDATE, or DELETE operations. Therefore, this solution cannot forward deleted vehicle listing data to downstream systems."
        ]
    }
};