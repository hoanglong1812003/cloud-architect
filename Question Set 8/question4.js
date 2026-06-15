// Question 4 - Set 8
window.questionSet8[4] = {
    question: "Availability Zones are physically separated by a meaningful distance from any other AZ, although all are within 100 km or 60 miles of each other. What is the primary reason why Availability Zones are set up the way they are now?",
    answers: [
        "To keep them as far apart from each other in case of a disaster",
        "Price of the land is cheaper in those locations",
        "To achieve better network connectivity to users in the location",
        "To maximize area coverage in a Region"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Availability Zones are physically separated to reduce the impact of localized disasters such as power failures, floods, earthquakes, or other disruptions. At the same time, they remain close enough to provide low-latency, high-bandwidth network connectivity that supports synchronous replication and highly available architectures.",
        incorrectReasons: [
            null,
            "The placement of Availability Zones is based on reliability, fault isolation, and network performance requirements, not on the cost of land.",
            "Availability Zones are designed to improve resiliency and fault tolerance within a Region, not to optimize connectivity for end users. Edge Locations and Regions are more relevant for user proximity.",
            "Availability Zones are not primarily designed to maximize geographic coverage. Their purpose is to provide isolated failure domains while maintaining low-latency connectivity between them."
        ]
    }
};