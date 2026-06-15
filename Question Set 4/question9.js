// Question 9 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[9] = {
    question: "An organization requires a persistent block storage volume to support its mission-critical workloads. The backup data will be stored in an object storage service and, after 30 days, transitioned to an archival storage service for long-term retention. The team has already configured an Amazon EBS snapshot retention rule for point-in-time recovery. What should be done to meet the above requirement?",
    answers: [
        "Attach an EBS volume to your Amazon EC2 instance. Use Amazon S3 to store your backup data and configure a lifecycle policy to transition your objects to S3 One Zone-IA.",
        "Attach an EBS volume to your Amazon EC2 instance. Use Amazon S3 to store your backup data and configure a lifecycle policy to transition your objects to S3 Glacier Flexible Retrieval.",
        "Attach an instance store volume in your Amazon EC2 instance. Use Amazon S3 to store your backup data and configure a lifecycle policy to transition your objects to S3 One Zone-IA.",
        "Attach an instance store volume in your existing Amazon EC2 instance. Use Amazon S3 to store your backup data and configure a lifecycle policy to transition your objects to S3 Glacier Flexible Retrieval."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon EBS provides persistent block storage designed for mission-critical workloads.\n\nAmazon S3 is an object storage service commonly used for backup and restore solutions. S3 Lifecycle policies can automatically transition objects between storage classes.\n\nFor long-term archival storage, Amazon S3 Glacier Flexible Retrieval is the appropriate storage class.\n\nThe mention of EBS snapshots is a distractor. Although EBS snapshots are stored internally in Amazon S3, they are managed separately and cannot be transitioned to Glacier using S3 lifecycle policies.\n\nHence, the correct answer is: Attach an EBS volume to your EC2 instance, store backups in Amazon S3, and transition them to S3 Glacier Flexible Retrieval.",
        incorrectReasons: [
            "S3 One Zone-IA is intended for infrequently accessed data, not long-term archival storage.",
            null,
            "Instance store volumes are temporary storage and are not suitable for mission-critical workloads requiring persistence.",
            "Instance store volumes are ephemeral and cannot be attached after launch. In addition, S3 Glacier Flexible Retrieval does not compensate for the lack of persistent primary storage."
        ]
    }
};