// Question 9 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[9] = {
    question: "A company has a hybrid cloud architecture that connects its on-premises data center and cloud infrastructure in AWS. It requires a durable storage backup for its corporate documents stored on-premises and a local cache that provides low-latency access to recently accessed data to reduce data egress charges. The documents must be stored on and retrieved from AWS via the Server Message Block (SMB) protocol. These files must be immediately accessible within minutes for six months and archived for another decade to meet data compliance.\n\nWhich of the following is the best and most cost-effective approach to implement in this scenario?",
    answers: [
        "Launch a new file gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the file gateway and set up a lifecycle policy to move the data into Glacier for data archival.",
        "Launch a new tape gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the tape gateway and set up a lifecycle policy to move the data into Glacier for archival.",
        "Use AWS DataSync to transfer all files from the on-premises network directly to an Amazon S3 bucket, and set up a lifecycle policy to move the data into Glacier for archival.",
        "Establish a Direct Connect connection to integrate your on-premises network to your VPC. Upload the documents on Amazon EBS Volumes and use a lifecycle policy to automatically move the EBS snapshots to an Amazon S3 bucket, and then later to Glacier for archival."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "A file gateway supports a file interface into Amazon Simple Storage Service (Amazon S3) and combines a service and a virtual software appliance. The gateway provides access to objects in S3 as files or file share mount points. You can store and retrieve files directly using the SMB file system version 2 and 3 protocol.\n\nAWS Storage Gateway supports the Amazon S3 Standard, S3 Standard-Infrequent Access, S3 One Zone-Infrequent Access and Amazon Glacier storage classes. Objects stored in any of these storage classes can be transitioned to Amazon Glacier using a Lifecycle Policy. Although you can write objects directly to infrequent access storage classes, it is recommended that you use a Lifecycle Policy to transition your objects.",
        incorrectReasons: [
            null,
            "although tape gateways provide cost-effective and durable archive backup data in Amazon Glacier, it does not meet the criteria of being retrievable immediately within minutes. It also doesn't maintain a local cache that provides low latency access to the recently accessed data. Thus, it is still better to set up a file gateway instead.",
            "DataSync is primarily a data migration service that facilitates bulk transfers, but it does not offer local caching for low-latency access to recently accessed files. Without caching, the company may incur higher data egress charges, making this option less cost-effective.",
            "EBS Volumes are not only less durable compared with S3 and it would be more cost-efficient if you directly store the documents to an S3 bucket. An alternative solution is to use AWS Direct Connect with AWS Storage Gateway, but this solution is using EBS, hence, this option is still wrong."
        ]
    }
};

