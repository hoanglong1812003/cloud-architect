// Question 10 - Set 6
window.questionSet6 = window.questionSet6 || {};
window.questionSet6[10] = {
    question: "A company wants to release a weather forecasting app for mobile users. The application servers generate a weather forecast every 15 minutes, and each forecast update overwrites the older forecast data. Each weather forecast outputs approximately 1 billion unique data points, where each point is about 20 bytes in size. This results in about 20 GB of data for each forecast. Approximately 1,500 global users access the forecast data concurrently every second, and this traffic can spike up to 10 times more during weather events. The company requires that each user query be processed in less than two seconds. Which solution will meet the required application request rate and response time?",
    answers: [
        "Create an Amazon OpenSearch cluster to store the weather forecast data points. Write AWS Lambda functions to query the cluster. Create an Amazon CloudFront distribution and point the origin to an Amazon API Gateway endpoint that invokes the Lambda functions. Configure a cache-control timeout of 15 minutes in API Gateway.",
        "Use an Amazon EFS volume to store the weather forecast data points. Mount the EFS volume on a fleet of Auto Scaling Amazon EC2 instances behind an Elastic Load Balancer. Create an Amazon CloudFront distribution and point the origin to the ELB. Configure a 15-minute cache-control timeout for CloudFront.",
        "Create an Amazon OpenSearch cluster to store the weather forecast data points. Write AWS Lambda functions to query the cluster. Create an Amazon CloudFront distribution and point the origin to an Amazon API Gateway endpoint that invokes the Lambda functions. Write a Lambda@Edge function to cache the data points on edge locations for 15 minutes.",
        "Create an Amazon S3 bucket to store the weather forecast data points as individual objects. Create a fleet of Auto Scaling Amazon EC2 instances behind an Elastic Load Balancer to query the objects in the S3 bucket. Create an Amazon CloudFront distribution and point the origin to the ELB. Configure a 15-minute cache-control timeout for CloudFront."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon EFS is a highly scalable and fully managed file system that can scale to petabytes while providing low latency and throughput exceeding 10 GB/s. Since the application generates 20 GB of forecast data every 15 minutes and serves thousands of concurrent users globally, EFS provides massively parallel access for multiple EC2 instances. Combining EFS with Auto Scaling EC2 instances behind an ELB ensures high throughput and scalability, while Amazon CloudFront caches forecast data at edge locations worldwide, reducing latency and ensuring users receive responses within the required two-second threshold.",
        incorrectReasons: [
            "Although OpenSearch and Lambda can be used to query large datasets, Lambda concurrency limits may become a bottleneck during large traffic spikes. This architecture may struggle to scale quickly enough to serve peak demand.",
            null,
            "Lambda@Edge is primarily intended for customizing CloudFront request and response behavior. It is not designed to serve as the primary caching mechanism for very large datasets such as billions of weather forecast data points.",
            "Using S3 introduces additional HTTP calls from EC2 instances to retrieve data, increasing response latency. In addition, continuously overwriting billions of objects every 15 minutes is less efficient than storing the forecast data in Amazon EFS."
        ]
    }
};