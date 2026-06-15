// Question 9 - Set 5
window.questionSet5[9] = {
    question: "A travel photo-sharing website is using Amazon S3 to serve high-quality photos to visitors. After a few days, it was discovered that other travel websites are linking to and using these photos. This has resulted in financial losses for the business. The team initially applied PutBucketPolicy with referrer restrictions, but found that referrer headers can be spoofed, rendering this approach insufficient. What is the MOST effective method to mitigate this issue?",
    answers: [
        "Configure your S3 bucket to remove public read access and use pre-signed URLs with expiry dates.",
        "Block the IP addresses of the offending websites using NACL.",
        "Use Amazon CloudFront distributions for your photos.",
        "Move the high-quality photos to Amazon WorkDocs to serve them privately."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "The most effective solution is to make the S3 objects private and provide access using pre-signed URLs. Pre-signed URLs grant temporary access to specific objects and automatically expire after a defined period. This prevents unauthorized websites from indefinitely hotlinking or reusing content while still allowing legitimate users to access the photos.",
        incorrectReasons: [
            null,
            "Blocking IP addresses using Network ACLs is not a reliable solution because websites can easily change IP addresses, making the restriction ineffective over time.",
            "Amazon CloudFront improves content delivery performance and caching but does not by itself prevent unauthorized hotlinking of publicly accessible S3 objects.",
            "Amazon WorkDocs is intended for document collaboration and content management. It is not designed as a replacement for serving static media content such as website photos."
        ]
    }
};