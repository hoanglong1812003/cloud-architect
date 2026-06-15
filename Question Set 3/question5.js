// Question 5 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[5] = {
    question: "Which statement below is correct regarding the components of the AWS Global Infrastructure?",
    answers: [
        "An AWS Region contains multiple Availability Zones.",
        "An edge location contains multiple AWS Regions.",
        "An Availability Zone contains multiple AWS Regions.",
        "An Availability Zone contains edge locations."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "The AWS Global Infrastructure delivers a cloud infrastructure companies can depend onâ€”no matter their size, changing needs, or challenges. AWS provides a more extensive global footprint than any other cloud provider.\n\nUnlike other cloud providers that define a region as a single data center, at AWS, Regions consist of multiple Availability Zones, each of which is a fully isolated partition of the AWS infrastructure that consists of discrete data centers, each with redundant power, networking, and connectivity, and each housed in separate facilities. An Availability Zone gives customers the ability to operate production applications and databases that are more highly available, fault-tolerant, and scalable than would be possible from a single data center.",
        incorrectReasons: [
            null,
            "an edge location and an AWS Region are not geographically related. Hence, it is important to note that an edge location does not contain multiple AWS Regions.",
            "it is actually the other way around. It is the AWS Region which contains multiple Availability Zones.",
            "this is a false description of the relationship between these two components. An edge location is simply a site that CloudFront uses to cache copies of your content for faster delivery to users in any location."
        ]
    }
};

