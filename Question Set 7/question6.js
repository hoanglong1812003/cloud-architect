// Question 6 - Set 7
window.questionSet7[6] = {
    question: "A company plans to develop a custom messaging service that will be used to train an AI for an automatic response feature. The service is expected to receive thousands of messages per day, all of which will be processed by an Amazon EMR cluster. It is crucial that none of the messages are lost, no duplicates are produced, and that the messages are processed in EMR in the same order as arrival. Which of the following options can satisfy the given requirement?",
    answers: [
        "Create an Amazon Data Firehose to handle the messages.",
        "Set up an Amazon SNS Topic to handle the messages.",
        "Create an Amazon Kinesis Data Stream to collect the messages.",
        "Set up an Amazon SQS standard queue and configure a dead-letter queue (DLQ) to handle failed messages."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Amazon Kinesis Data Streams is designed for real-time ingestion and processing of streaming data. Records are stored durably and replicated across multiple Availability Zones. Within each shard, records are assigned sequence numbers and processed in order, ensuring message ordering. This makes Kinesis Data Streams ideal for workloads that require durable storage, ordered processing, and integration with analytics platforms such as Amazon EMR.",
        incorrectReasons: [
            "Amazon Data Firehose is designed for delivering streaming data to destinations such as Amazon S3, Redshift, or OpenSearch. Although it provides reliable delivery, it does not guarantee strict message ordering.",
            "Amazon SNS is a pub/sub messaging service. It does not guarantee ordered message processing and is not designed to provide the durability and sequencing requirements described in the scenario.",
            null,
            "Amazon SQS Standard queues provide at-least-once delivery and do not guarantee message ordering. Duplicate messages may occur, making them unsuitable for the stated requirements."
        ]
    }
};