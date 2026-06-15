// Question 7 - Set 10
window.questionSet10[7] = {
    question: "A multinational investment bank has multiple cloud architectures across the globe. The company has a VPC in the US East region for their East Coast office and another VPC in the US West for their West Coast office. There is a requirement to establish a low latency, high-bandwidth connection between their on-premises data center in Texas and both of their VPCs in AWS. Which of the following options should the solutions architect implement to achieve the requirement in a cost-effective manner?",
    answers: [
        "Establish a Direct Connect connection between the VPC in US East region to the on-premise data center in Texas and then establish another Direct Connect connection between the VPC in US West region to the on-premises data center.",
        "Set up an AWS Direct Connect Gateway with two virtual private gateways.",
        "Set up two separate VPC peering connections for the two VPCs and for the on-premises data center.",
        "Set up an AWS VPN managed connection between the VPC in US East region and the on-premises data center in Texas."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "An AWS Direct Connect Gateway allows a single Direct Connect connection to connect multiple VPCs across different AWS Regions. This provides low-latency, high-bandwidth connectivity while minimizing costs compared to maintaining multiple Direct Connect connections.",
        incorrectReasons: [
            "Creating separate Direct Connect connections for each VPC is more expensive and less cost-effective than using a Direct Connect Gateway.",
            null,
            "VPC Peering is designed to connect VPCs together and cannot be used to connect an on-premises data center to AWS.",
            "AWS Site-to-Site VPN uses internet connectivity and is more suitable for lower bandwidth workloads that can tolerate variable network performance."
        ]
    }
};