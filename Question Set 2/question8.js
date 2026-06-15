// Question 8 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[8] = {
    question: "A business has recently migrated its applications to AWS. The audit team must be able to assess whether the services the company is using meet common security and regulatory standards. A solutions architect needs to provide the team with a report of all compliance-related documents for their account.\n\nWhich action should a solutions architect consider?",
    answers: [
        "Use AWS Identity and Access Management to retrieve the required compliance reports for the account.",
        "Use AWS Artifact to view the security reports as well as other AWS compliance-related information.",
        "Run an Amazon Inspector assessment job to download all of the AWS compliance-related information.",
        "Access all AWS security compliance reports through AWS Security Hub."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS's security and compliance reports and select online agreements. Reports available in AWS Artifact include Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.\n\nAll AWS Accounts have access to AWS Artifact. Root users and IAM users with admin permissions can download all audit artifacts available to their accounts by agreeing to the associated terms and conditions.",
        incorrectReasons: [
            "AWS Identity and Access Management is a service for controlling access to AWS resources through users, roles, and permissions. It does not store, generate, or provide access to security compliance reports.",
            null,
            "Amazon Inspector is simply a security tool for detecting vulnerabilities in AWS workloads. For this scenario, it is better to use the readily available security reports in AWS Artifact instead.",
            "AWS Security Hub only provides you with a comprehensive view of your high-priority security alerts and security posture across your AWS accounts. It does not provide compliance-related documents."
        ]
    }
};

