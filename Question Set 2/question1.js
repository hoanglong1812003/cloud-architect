// Question 1 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[1] = {
    question: "A company is designing a new cloud architecture for its mission-critical application in AWS which must be highly-available. Which of the following is the recommended pattern to meet this requirement?",
    answers: [
        "Make sure that each component of the application has high bandwidth and low-latency network connectivity using ENIs.",
        "Deploy an AWS VPN connection to ensure secure communication between components.",
        "Deploy an Amazon EC2 Spot Fleet with a diversified allocation strategy.",
        "Use multiple Availability Zones to ensure that the application can handle the failure of any single component."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Availability Zones are the core of the AWS infrastructure architecture and they form the foundation of AWS's and customers' reliability and operations. Availability Zones are designed for physical redundancy and they provide resilience, enabling uninterrupted performance, even in the event of power outages, Internet downtime, floods, and other natural disasters.\n\nAmazon operates state-of-the-art, highly-available data centers. Although rare, failures can occur that affect the availability of instances in the same location. If you host all your instances in a single location that is affected by such a failure, none of your instances would be available. By using multiple Availability Zones, your application can handle the failure of any single component.",
        incorrectReasons: [
            "improving the network connectivity through the use of Elastic Network Interfaces (ENIs) is simply not enough to make your architecture highly available. You still need to deploy your application to multiple Availability Zones.",
            "it only provides secure network connectivity between resources. While it enables private communication, it does not ensure that the application remains highly available during failures. High availability requires distributing resources across multiple Availability Zones.",
            "although using a diversified allocation strategy for your EC2 Spot Fleet can improve the availability of your compute capacity, this solution is still inappropriate since Spot Instances can be interrupted by AWS.",
            null
        ]
    }
};

