// Question 8 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[8] = {
    question: "A company hosted an e-commerce website on an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer. The Solutions Architect noticed that the website is receiving a high number of illegitimate external requests from multiple systems with frequently changing IP addresses. To address the performance issues, the Solutions Architect must implement a solution that would block these requests while having minimal impact on legitimate traffic.\n\nWhich of the following options fulfills this requirement?",
    answers: [
        "Create a regular rule in AWS WAF and associate the web ACL to an Application Load Balancer.",
        "Create a private connection using AWS PrivateLink to block the offending requests.",
        "Create a rate-based rule in AWS WAF and associate the web ACL to an Application Load Balancer.",
        "Create a custom network ACL and associate it with the subnet of the Application Load Balancer to block the offending requests."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS WAF is tightly integrated with Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync. When you use AWS WAF on regional services, such as Application Load Balancer, your rules run in the region and can be used to protect Internet-facing resources as well as internal resources.\n\nA rate-based rule tracks the rate of requests for each originating IP address and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span. Based on the given scenario, the requirement is to limit the number of requests from the illegitimate requests without affecting the genuine requests. You can use AWS WAF web ACL with rate-based rules. When the rule action triggers, AWS WAF applies the action to additional requests from the IP address until the request rate falls below the limit.",
        incorrectReasons: [
            "a regular rule typically matches the statement defined in the rule. If you need to add a rate limit to your rule, you should create a rate-based rule.",
            "it simply is a networking service that provides private connectivity between VPCs and AWS services, not a request-filtering solution. It cannot inspect HTTP traffic, track request rates, or block malicious IPs.",
            null,
            "although NACLs can help you block incoming traffic, this option wouldn't be able to limit the number of requests from a single IP address that is dynamically changing."
        ]
    }
};

