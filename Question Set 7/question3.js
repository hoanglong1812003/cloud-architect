// Question 3 - Set 7
window.questionSet7 = window.questionSet7 || {};
window.questionSet7[3] = {
    question: "Which AWS service should a solutions architect provision if a local data center requires additional storage space without having to migrate data?",
    answers: [
        "AWS Direct Connect",
        "AWS Storage Gateway",
        "AWS Backup",
        "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Storage Gateway is a hybrid cloud storage service that extends on-premises storage using AWS cloud storage. It provides local access through standard protocols such as NFS, SMB, and iSCSI while storing data in AWS services such as Amazon S3, Amazon EBS, and Amazon S3 Glacier. This allows organizations to expand storage capacity without fully migrating their data.",
        incorrectReasons: [
            "AWS Direct Connect provides dedicated network connectivity between on-premises environments and AWS, but it does not extend storage capacity.",
            null,
            "AWS Backup is used for centralized backup management. It does not provide a local storage interface or hybrid storage functionality by itself.",
            "Amazon S3 offers scalable cloud storage, but it does not directly integrate with on-premises applications in the same seamless way as AWS Storage Gateway."
        ]
    }
};