// Question 7 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[7] = {
    question: "Which AWS service is suitable for launching a highly scalable MySQL OLTP database?",
    answers: [
        "Amazon Redshift",
        "Amazon Timestream",
        "Amazon Aurora",
        "Amazon DynamoDB"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud that combines the performance and availability of commercial databases with the simplicity and cost-effectiveness of open-source databases.\n\nAurora is fully managed by Amazon RDS and can deliver up to five times the performance of standard MySQL databases.\n\nIt features a distributed, fault-tolerant, self-healing storage system that automatically scales up to 128 TB, supports up to 15 low-latency read replicas, point-in-time recovery, continuous backups to Amazon S3, and replication across multiple Availability Zones.\n\nHence, the correct answer is: Amazon Aurora.",
        incorrectReasons: [
            "Amazon Redshift is a data warehouse service optimized for OLAP workloads rather than OLTP databases.",
            "Amazon Timestream is a purpose-built time-series database designed for storing and analyzing time-stamped data.",
            "although Amazon DynamoDB is highly scalable, it is a NoSQL database service and not a MySQL-compatible relational database.",
            null
        ]
    }
};