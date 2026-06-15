// Question 4 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[4] = {
    question: "Which of the following AWS Global Infrastructure components is made up of one or more discrete data centers, each with redundant power, networking, and connectivity and housed in separate facilities?",
    answers: [
        "Availability Zone",
        "VPC",
        "Edge location",
        "AWS Region"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "The AWS Cloud infrastructure is built around AWS Regions and Availability Zones. An AWS Region is a physical location in the world where we have multiple Availability Zones. Availability Zones consist of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities.\n\nThese Availability Zones offer you the ability to operate production applications and databases that are more highly available, fault-tolerant, and scalable than would be possible from a single data center. Each Availability Zone is designed as an independent failure zone with physically separated infrastructure within a typical metropolitan region.",
        incorrectReasons: [
            null,
            "it is just a service that lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
            "this is just a site that CloudFront uses to cache copies of your content for faster delivery to users at any location.",
            "this consists of multiple Availability Zones (AZ), not the other way around."
        ]
    }
};

