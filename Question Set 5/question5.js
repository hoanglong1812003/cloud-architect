// Question 5 - Set 5
window.questionSet5[5] = {
    question: "A company is using Amazon S3 to store their static media contents such as photos and videos. Which of the following should you use to provide specific users access to the bucket?",
    answers: [
        "Bucket Policy",
        "Security Group",
        "Web application firewall",
        "Network Access Control List"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Bucket policies are JSON-based resource policies that allow you to grant access to specific IAM users, IAM roles, or AWS accounts for an Amazon S3 bucket and its objects. They are commonly used to control and manage access to S3 resources.",
        incorrectReasons: [
            null,
            "Security Groups act as virtual firewalls for resources such as EC2 instances. They are not used to grant or manage access permissions for Amazon S3 buckets.",
            "A Web Application Firewall (WAF) protects web applications from common web exploits such as SQL injection and cross-site scripting. It does not manage user access to S3 buckets.",
            "Network ACLs are subnet-level firewalls used within a VPC to control inbound and outbound traffic. They have no role in managing access permissions for Amazon S3 buckets."
        ]
    }
};