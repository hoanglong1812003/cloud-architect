// Question 7 - Set 6
window.questionSet6[7] = {
    question: "A few easily reproducible files must be stored in AWS without concerns about storage capacity. During the first month, all files will be accessed frequently, but after that period, access will become infrequent. Older files will only be accessed by developers, and no specific retrieval time requirement is defined. However, files under a specific tdojo-finance prefix in the Amazon S3 bucket will be used for post-processing that requires millisecond retrieval time. Given these conditions, which of the following options would be the most cost-effective solution for the storage requirements?",
    answers: [
        "Store the files in S3, then after a month, change the storage class of the bucket to S3 Intelligent-Tiering using a lifecycle policy.",
        "Store the files in S3, then after a month, change the storage class of the tdojo-finance prefix to S3 Standard-Infrequent Access (Standard-IA) while the remaining go to Glacier using a lifecycle policy.",
        "Store the files in S3, then after a month, change the storage class of the bucket to S3 Standard-Infrequent Access (Standard-IA) using a lifecycle policy.",
        "Store the files in S3, then after a month, change the storage class of the tdojo-finance prefix to S3 One Zone-Infrequent Access (One-Zone IA), while the remaining go to Glacier using a lifecycle policy."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "The files are initially accessed frequently, making S3 Standard appropriate. After one month, access becomes infrequent. Files under the tdojo-finance prefix still require millisecond retrieval times and are easily reproducible, making S3 One Zone-IA the most cost-effective choice. The remaining files can be archived to Glacier for the lowest storage cost. This combination provides the optimal balance between cost and retrieval requirements.",
        incorrectReasons: [
            "S3 Intelligent-Tiering is useful when access patterns are unknown or unpredictable. In this scenario, the access pattern is already known, so directly transitioning objects to lower-cost storage classes is more cost-effective.",
            "S3 Standard-IA provides millisecond retrieval times, but it is more expensive than S3 One Zone-IA. Since the data is easily reproducible, One Zone-IA is the more economical option.",
            "Moving all objects to S3 Standard-IA ignores the opportunity to further reduce storage costs by archiving non-critical data to Glacier and using One Zone-IA for reproducible files."
        ]
    }
};
