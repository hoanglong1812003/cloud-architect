// Question 6 - Set 8
window.questionSet8[6] = {
    question: "A company needs to implement a solution that will process real-time streaming data of its users across the globe. This will enable them to track and analyze globally-distributed user activity on their website and mobile applications, including clickstream analysis. The solution should process the data in close geographical proximity to their users and respond to user requests at low latencies. Which of the following is the most suitable solution for this scenario?",
    answers: [
        "Use a CloudFront web distribution and Route 53 with a Geoproximity routing policy in order to process the data in close geographical proximity to users and respond to user requests at low latencies. Process real-time streaming data using Kinesis and durably store the results to an Amazon S3 bucket.",
        "Integrate CloudFront with Lambda@Edge in order to process the data in close geographical proximity to users and respond to user requests at low latencies. Process real-time streaming data using Amazon Athena and durably store the results to an Amazon S3 bucket.",
        "Use a CloudFront web distribution and Route 53 with a latency-based routing policy, in order to process the data in close geographical proximity to users and respond to user requests at low latencies. Process real-time streaming data using Kinesis and durably store the results to an Amazon S3 bucket.",
        "Integrate CloudFront with Lambda@Edge in order to process the data in close geographical proximity to users and respond to user requests at low latencies. Process real-time streaming data using Kinesis and durably store the results to an Amazon S3 bucket."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Lambda@Edge allows code to run at AWS edge locations close to end users, reducing latency and improving performance. Combined with Amazon Kinesis for real-time streaming data ingestion and processing, this solution enables efficient clickstream analysis and user activity tracking for globally distributed users while storing results durably in Amazon S3.",
        incorrectReasons: [
            "Route 53 can route traffic but does not provide compute capabilities to process data near users. The solution lacks edge processing functionality.",
            "Lambda@Edge is appropriate for low-latency processing, but Amazon Athena is designed for querying data stored in S3 and is not a real-time streaming data processing service.",
            "Latency-based routing only directs users to the lowest-latency endpoint. It does not provide the edge compute capability required to process data close to users."
        ]
    }
};