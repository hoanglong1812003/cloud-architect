// Question 6 - Set 9
window.questionSet9[6] = {
    question: "A company has a web-based order processing system that is currently using a standard queue in Amazon SQS. The IT Manager noticed that there are a lot of cases where an order was processed twice. This issue has caused a lot of trouble in processing and made the customers very unhappy. The goal is to ensure that this issue will not recur. What solution should be implemented to prevent this from happening again in the future?",
    answers: [
        "Alter the retention period in SQS.",
        "Alter the visibility timeout of SQS.",
        "Change the message size in SQS.",
        "Use an Amazon SQS FIFO Queue instead."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Amazon SQS FIFO queues guarantee exactly-once processing and preserve message ordering. They use deduplication and sequencing mechanisms to prevent duplicate message delivery, making them ideal for order-processing systems where duplicates cannot be tolerated.",
        incorrectReasons: [
            "The message retention period only determines how long messages remain in the queue before being deleted. It does not prevent duplicate message processing.",
            "Visibility timeout helps prevent multiple consumers from processing the same message simultaneously, but standard queues still provide at-least-once delivery and can produce duplicates.",
            "Message size settings only affect the amount of data that can be stored in a message and have no impact on duplicate message delivery."
        ]
    }
};