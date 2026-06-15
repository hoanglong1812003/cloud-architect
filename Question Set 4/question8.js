// Question 8 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[8] = {
    question: "A company uses an Application Load Balancer (ALB) for its public-facing multi-tier web applications. The security team has recently reported that there has been a surge of SQL injection attacks lately, which causes critical data discrepancy issues. The same issue is also encountered by its other web applications in other AWS accounts that are behind an ALB. An immediate solution is required to prevent the remote injection of unauthorized SQL queries and protect their applications hosted across multiple accounts. As a Solutions Architect, what solution would you recommend?",
    answers: [
        "Use AWS Network Firewall to filter web vulnerabilities and brute force attacks using stateful rule groups across all Application Load Balancers on all AWS accounts. Refactor the web application to be less susceptible to SQL injection attacks based on the security assessment.",
        "Use Amazon Macie to scan for vulnerabilities and unintended network exposure. Refactor the web application to be less susceptible to SQL injection attacks based on the security assessment. Utilize the AWS Audit Manager to reuse the security assessment across all AWS accounts.",
        "Use Amazon GuardDuty and set up a managed rule to block request patterns associated with the exploitation of SQL databases, like SQL injection attacks. Associate it with the Application Load Balancer and utilize the AWS Security Hub service to reuse the managed rules across all the AWS accounts.",
        "Use AWS WAF and set up a managed rule to block request patterns associated with the exploitation of SQL databases, like SQL injection attacks. Associate it with the Application Load Balancer. Integrate AWS WAF with AWS Firewall Manager to reuse the rules across all the AWS accounts."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS WAF is a web application firewall that protects web applications from common web exploits and vulnerabilities.\n\nAWS provides AWSManagedRulesSQLiRuleSet, which contains rules designed to block request patterns associated with SQL injection attacks and prevent unauthorized SQL queries from reaching backend databases.\n\nAWS WAF integrates directly with Application Load Balancers, Amazon CloudFront, API Gateway, and AWS AppSync.\n\nTo centrally manage and reuse WAF rules across multiple AWS accounts, AWS Firewall Manager can be used to deploy and enforce security policies consistently across an organization.\n\nTherefore, the correct answer is: Use AWS WAF and set up a managed rule to block request patterns associated with SQL databases. Associate it with the ALB and integrate AWS WAF with AWS Firewall Manager.",
        incorrectReasons: [
            "AWS Network Firewall is primarily designed for network-level protection within VPCs and is not the best service for protecting web applications from SQL injection attacks behind Application Load Balancers.",
            "Amazon Macie is used for discovering and protecting sensitive data, not for detecting and blocking SQL injection attacks against web applications.",
            "Amazon GuardDuty is a threat detection service and cannot be directly associated with an Application Load Balancer to block SQL injection requests.",
            null
        ]
    }
};