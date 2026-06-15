// Question 9 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[9] = {
    question: "An online shopping platform is hosted on an Auto Scaling group of Amazon EC2 Spot instances and utilizes Amazon Aurora PostgreSQL as its database. It is required to optimize database workloads in the cluster by directing the production traffic to high-capacity instances and routing the reporting queries from the internal staff to the low-capacity instances.\n\nWhich is the most suitable configuration for the application as well as the Aurora database cluster to achieve this requirement?",
    answers: [
        "Configure your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas.",
        "In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries.",
        "Create a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries.",
        "Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Amazon Aurora typically involves a cluster of DB instances instead of a single instance. Each connection is handled by a specific DB instance. Aurora uses the endpoint mechanism to abstract these connections.\n\nFor clusters with DB instances of different capacities or configurations, you can connect to custom endpoints associated with different subsets of DB instances. The custom endpoint provides load-balanced database connections based on criteria other than the read-only or read-write capability of the DB instances. For example, you might define a custom endpoint to connect to instances that use a particular AWS instance class. You might direct internal users to low-capacity instances for report generation and direct production traffic to high-capacity instances.",
        incorrectReasons: [
            "although it is true that a reader endpoint enables your Aurora database to automatically perform load-balancing among all the Aurora Replicas, it is quite limited to doing read operations only. You still need to use a custom endpoint to load-balance the database connections based on the specified criteria.",
            "a cluster endpoint (also known as a writer endpoint) for an Aurora DB cluster simply connects to the current primary DB instance. This endpoint can perform write operations, which is perfect for handling production traffic but not suitable for handling queries for reporting. Moreover, the endpoint does not point to lower-capacity or high-capacity instances as per the requirement.",
            null,
            "Aurora does not do this by default. You have to create custom endpoints in order to accomplish this requirement."
        ]
    }
};

