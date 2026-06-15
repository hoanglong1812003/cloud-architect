// Question 6 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[6] = {
    question: "A startup is developing a mobile app with a database service to store user data. The app is expected to grow rapidly, and the company needs a flexible and scalable database service that can handle unpredictable traffic and workload spikes.\n\nWhich service should the startup use if they need a scalable, fast, and flexible non-relational database service?",
    answers: [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database so that you don't have to worry about hardware provisioning, setup, and configuration, replication, software patching, or cluster scaling. DynamoDB also offers encryption at rest.\n\nFor decades, the predominant data model used for application development was the relational data model. It wasn't until the mid to late 2000s that other data models began to gain significant adoption. To differentiate these new classes of databases, the term 'NoSQL' was coined. Often the term 'NoSQL' is used interchangeably with 'nonrelational'.",
        incorrectReasons: [
            "this managed relational database service makes it easy to set up, operate, and scale a relational database in the cloud. It supports popular relational database engines like MySQL, PostgreSQL, and SQL Server but is not a non-relational database service.",
            null,
            "this is a data warehousing service that is specifically designed for online analytic processing (OLAP) and business intelligence (BI) applications which require complex queries against large datasets.",
            "this is commonly used as scalable object storage and not as a nonrelational database in itself."
        ]
    }
};

