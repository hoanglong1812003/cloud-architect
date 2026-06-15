// Question 5 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[5] = {
    question: "Which AWS service provides access to compliance-related documents, such as ISO certifications, Payment Card Industry (PCI) reports, and Service Organization Control (SOC) reports, for security audits?",
    answers: [
        "AWS Certificate Manager",
        "AWS Trusted Advisor",
        "AWS Artifact",
        "AWS Security Token Service"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS' security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.\n\nAll AWS Accounts have access to AWS Artifact. Root users and IAM users with admin permissions can download all audit artifacts available to their accounts by agreeing to the associated terms and conditions. You will need to grant IAM users with non-admin permissions access to AWS Artifact using IAM permissions.",
        incorrectReasons: [
            "this service is primarily used for provisioning, managing, and deploying SSL/TLS certificates for use with AWS services.",
            "this is just an online tool that provides you with real-time guidance to help you provision your resources following AWS best practices. It inspects your AWS environment and makes recommendations for saving money, improving system performance and reliability, or closing security gaps.",
            null,
            "this is only used to generate temporary credentials for accessing AWS resources securely. It is not designed for retrieving compliance reports or certifications."
        ]
    }
};

