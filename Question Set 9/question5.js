// Question 5 - Set 9
window.questionSet9[5] = {
    question: "A Solutions Architect is designing a monitoring application which generates audit logs of all operational activities of the company’s cloud infrastructure. Their IT Security and Compliance team mandates that the application retain the logs for 5 years before the data can be deleted. How can the Architect meet the above requirement?",
    answers: [
        "Store the audit logs in an EBS volume and then take EBS snapshots every month.",
        "Store the audit logs in an EFS volume and use Network File System version 4 (NFSv4) file-locking mechanism.",
        "Store the audit logs in an Amazon S3 bucket and enable Multi-Factor Authentication Delete (MFA Delete) on the S3 bucket.",
        "Store the audit logs in a Glacier vault and use the Vault Lock feature."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Amazon S3 Glacier Vault Lock allows organizations to enforce compliance retention policies that become immutable after being locked. This ensures audit logs cannot be deleted before the required retention period, making it ideal for long-term regulatory compliance.",
        incorrectReasons: [
            "EBS volumes and snapshots can still be modified or deleted by authorized users and do not provide immutable retention guarantees.",
            "Although NFS file locking provides some protection, it does not guarantee immutable storage and can be bypassed by authorized users.",
            "MFA Delete adds protection against accidental deletion, but users with sufficient permissions and MFA access can still modify or delete the data, making it insufficient for strict compliance requirements."
        ]
    }
};