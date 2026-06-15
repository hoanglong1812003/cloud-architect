// Question 7 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[7] = {
    question: "What service provides the lowest-cost storage option for retaining database backups, which also allows occasional data retrieval in minutes, and can be used with Lifecycle policies to automatically move backups to the most cost-effective tier?",
    answers: [
        "Amazon EBS",
        "Amazon S3",
        "Amazon EFS",
        "Amazon S3 Glacier Flexible Retrieval"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Amazon S3 Glacier storage classes are designed to be the lowest-cost Amazon S3 storage classes, allowing you to archive large amounts of data at a very low cost. S3 Glacier provides: S3 Glacier Instant Retrieval for archiving data that needs to be restored quickly (milliseconds), S3 Glacier Flexible Retrieval for archiving data that might infrequently need to be restored within a few hours, and S3 Glacier Deep Archive for archiving long-term backup cycle data within 12 hours.\n\nTo keep costs low yet suitable for varying retrieval needs, Amazon S3 Glacier Flexible Retrieval provides three options for access to archives, from a few minutes to several hours.",
        incorrectReasons: [
            "this is a type of block storage that is not suitable for use in database backups. It is also more expensive than S3 Glacier Flexible Retrieval.",
            "this type of storage service costs more than S3 Glacier storage classes.",
            "this is a type of POSIX-compliant file storage suitable to be used as a file system and not for storing backups.",
            null
        ]
    }
};

