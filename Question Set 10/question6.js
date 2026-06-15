// Question 6 - Set 10
window.questionSet10[6] = {
    question: "A Solutions Architect is working for a large global media company with multiple office locations all around the world. The Architect is instructed to build a system to distribute training videos to all employees. Using Amazon CloudFront, what method would be used to serve content that is stored in Amazon S3 but not publicly accessible from S3 directly?",
    answers: [
        "Create an Origin Access Control (OAC) for CloudFront and grant access to the objects in your S3 bucket to that OAC.",
        "Create an S3 bucket policy that lists the CloudFront distribution ID as the principal and the target bucket as the Amazon Resource Name (ARN).",
        "Create an Identity and Access Management (IAM) user for CloudFront and grant access to the objects in your S3 bucket to that IAM user.",
        "Create a web ACL in AWS WAF to block any public S3 access and attach it to the CloudFront distribution."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Origin Access Control (OAC) allows CloudFront to securely access private content stored in Amazon S3. By granting the OAC permission to access the bucket objects, users can access content only through CloudFront while preventing direct public access to the S3 bucket.",
        incorrectReasons: [
            null,
            "A CloudFront distribution ID cannot be directly used as a Principal in an S3 bucket policy. CloudFront access should be granted through OAC and appropriate bucket policy conditions.",
            "You cannot create an IAM user specifically for a CloudFront distribution. The recommended approach is to use Origin Access Control (OAC).",
            "AWS WAF is designed to protect web applications from common web exploits and attacks, not to provide secure access between CloudFront and private S3 content."
        ]
    }
};