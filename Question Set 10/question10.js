// Question 10 - Set 10
window.questionSet10[10] = {
    question: "An analytics company hosts its data processing application on-premises. Uploaded files are placed on a NAS and processed through a message queue. Processing each file can take up to 30 minutes, and workload spikes during business hours. The company wants to migrate this workload to AWS in a cost-effective manner. Which solution is recommended?",
    answers: [
        "Use Amazon SQS and trigger an AWS Lambda function for each message. Store processed files in Amazon S3.",
        "Use Amazon SQS and an Auto Scaling group of EC2 instances that scale based on queue length. Store processed files in Amazon S3.",
        "Use Amazon MQ and trigger AWS Lambda functions to process messages. Store processed files in Amazon EFS.",
        "Use Amazon MQ and an Auto Scaling group of EC2 instances. Store processed files in Amazon EFS and power off instances when the queue is empty."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon SQS provides a scalable and durable messaging service. Using an Auto Scaling group of EC2 instances that scales based on queue length ensures processing capacity matches workload demand. Amazon S3 offers highly durable storage at a much lower cost than Amazon EFS, making this the most cost-effective solution.",
        incorrectReasons: [
            "AWS Lambda has a maximum execution time of 15 minutes, but each file may require up to 30 minutes to process. Therefore, Lambda is not suitable for this workload.",
            null,
            "Although this solution can work, Amazon EFS is significantly more expensive than Amazon S3, making it less cost-effective. Additionally, Amazon MQ is unnecessary when Amazon SQS can satisfy the requirements.",
            "This solution is not the most cost-effective because Amazon EFS costs more than Amazon S3. Amazon MQ also adds unnecessary complexity compared to Amazon SQS."
        ]
    }
};