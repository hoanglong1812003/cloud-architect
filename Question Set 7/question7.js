// Question 7 - Set 7
window.questionSet7[7] = {
    question: "A real-time data analytics application is using AWS Lambda to process data and store results in JSON format to an S3 bucket. To speed up the existing workflow, you have to use a service where you can run sophisticated Big Data analytics on your data without moving them into a separate analytics system. Which of the following group of services can you use to meet this requirement?",
    answers: [
        "Amazon Athena, Amazon Redshift Spectrum, AWS Glue",
        "Amazon Glue, Amazon Redshift, Amazon S3",
        "Amazon Neptune, DynamoDB DAX, Amazon Redshift Spectrum",
        "Amazon X-Ray, Amazon Neptune, DynamoDB"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Amazon Athena allows you to query data stored directly in Amazon S3 using standard SQL. Amazon Redshift Spectrum extends Amazon Redshift to analyze data stored in S3 without loading it into Redshift tables. AWS Glue provides data cataloging, ETL, and metadata management capabilities. Together, these services enable sophisticated Big Data analytics directly on S3 data without moving it into a separate analytics platform.",
        incorrectReasons: [
            null,
            "Although AWS Glue and Amazon S3 are relevant, Amazon Redshift requires data to be loaded into the cluster for analytics. This does not satisfy the requirement of querying data directly in S3.",
            "Amazon Neptune is a graph database service and DynamoDB DAX is an in-memory cache for DynamoDB. Neither service provides analytics capabilities for S3-based datasets.",
            "Amazon X-Ray is a tracing and monitoring service, while Neptune and DynamoDB are database services. None of these services are designed for Big Data analytics on S3 data."
        ]
    }
};