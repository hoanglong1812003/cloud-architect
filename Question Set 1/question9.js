// Question 9 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[9] = {
    question: "A travel photo-sharing website is using Amazon S3 to serve high-quality photos to visitors. After a few days, it was discovered that other travel websites are linking to and using these photos. This has resulted in financial losses for the business. The team initially applied PutBucketPolicy with referrer restrictions, but found that referrer headers can be spoofed, rendering this approach insufficient.\n\nWhat is the MOST effective method to mitigate this issue?",
    answers: [
        "Configure your S3 bucket to remove public read access and use pre-signed URLs with expiry dates.",
        "Use Amazon CloudFront distributions for your photos.",
        "Block the IP addresses of the offending websites using NACL.",
        "Move the high-quality photos to Amazon WorkDocs to serve them privately."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "In Amazon S3, all objects are private by default. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.\n\nWhen you create a pre-signed URL for your object, you must provide your security credentials, specify a bucket name, an object key, specify the HTTP method (GET to download the object), and the expiration date and time. The pre-signed URLs are valid only for the specified duration. Anyone who receives the pre-signed URL can then access the object.",
        incorrectReasons: [
            null,
            "CloudFront is primarily a content delivery network service that speeds up the delivery of content to your customers. It does not prevent hotlinking or unauthorized access.",
            "blocking IP addresses using NACLs is not a very efficient method because a quick change in IP address would easily bypass this configuration.",
            "WorkDocs is simply a fully managed, secure content creation, storage, and collaboration service. It is not a suitable service for storing static content. Amazon WorkDocs is more often used to easily create, edit, and share documents for collaboration and not for serving object data like Amazon S3."
        ]
    }
};

