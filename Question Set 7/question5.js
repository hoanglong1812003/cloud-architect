// Question 5 - Set 7
window.questionSet7 = window.questionSet7 || {};
window.questionSet7[5] = {
    question: "What is the right arrangement of the AWS Global Infrastructure components according to their geographical coverage area size, in descending order?",
    answers: [
        "Availability Zones, Edge Locations, Regions",
        "Regions, Edge Locations, Availability Zones",
        "Regions, Availability Zones, Edge Locations",
        "Edge Locations, Availability Zones, Regions"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Global Infrastructure is organized hierarchically. Regions cover the largest geographical area and consist of multiple Availability Zones (AZs). Each Availability Zone contains one or more physically separate data centers with redundant power, networking, and connectivity. Edge Locations are smaller points of presence used by services such as CloudFront to deliver content closer to end users. Therefore, in descending order of geographical coverage, the correct arrangement is Regions → Availability Zones → Edge Locations.",
        incorrectReasons: [
            "This order is reversed. Availability Zones are contained within Regions and do not have a larger geographical coverage area than Regions.",
            "Edge Locations are not larger than Availability Zones. Regions contain multiple Availability Zones, making this order incorrect.",
            null,
            "Edge Locations are the smallest infrastructure component in terms of geographical coverage and cannot be placed ahead of Regions or Availability Zones."
        ]
    }
};