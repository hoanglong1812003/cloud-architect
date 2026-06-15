// Question 9 - Set 6
window.questionSet6 = window.questionSet6 || {};
window.questionSet6[9] = {
    question: "A company has a suite of IBM products in its on-premises data centers, such as IBM WebSphere, IBM MQ, and IBM DB2 servers. The solutions architect has been tasked to migrate all of the current systems to the AWS Cloud in the most cost-effective way and improve the availability of the cloud infrastructure. Which of the following options is the MOST suitable solution that the solutions architect should implement to meet the company’s requirements?",
    answers: [
        "Use the AWS Application Migration Service to migrate your servers to AWS. Upload the IBM licenses to AWS License Manager and use the licenses when configuring Amazon EC2 instances to re-host your IBM WebSphere and IBM DB2 servers separately. Re-host and migrate the IBM MQ service to Amazon MQ.",
        "Use the AWS Database Migration Service (DMS) and the AWS Schema Conversion Tool (SCT) to convert, migrate, and re-architect the IBM Db2 database to Amazon Aurora. Set up an Auto Scaling group of EC2 instances with an ELB in front to migrate and re-host your IBM WebSphere. Migrate and re-platform IBM MQ to Amazon MQ in a phased approach.",
        "Use the AWS Application Migration Service to migrate your servers to AWS. Set up Amazon EC2 instances to re-host your IBM WebSphere and IBM DB2 servers separately. Re-host and migrate the IBM MQ service to Amazon SQS Standard Queue.",
        "Use the AWS Database Migration Service (DMS) and the AWS Schema Conversion Tool (SCT) to convert, re-architect, and migrate the IBM Db2 database to Amazon Aurora. Set up an Auto Scaling group of EC2 instances with an ELB in front to migrate and re-host your IBM WebSphere. Re-host and migrate the IBM MQ service to Amazon SQS FIFO Queue."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Database Migration Service (DMS) and AWS Schema Conversion Tool (SCT) can convert and migrate IBM Db2 databases to Amazon Aurora, reducing licensing costs while improving scalability and availability. IBM WebSphere can be re-hosted on Amazon EC2 instances behind an Elastic Load Balancer with Auto Scaling for high availability. IBM MQ should be re-platformed to Amazon MQ using a phased migration approach because Amazon MQ is specifically designed as a managed message broker service and provides the closest feature parity to IBM MQ. This approach delivers the most cost-effective migration while improving overall infrastructure availability.",
        incorrectReasons: [
            "AWS Application Migration Service can migrate servers, but AWS License Manager is not used to store software licenses. In addition, IBM MQ cannot simply be re-hosted on Amazon MQ because they are different platforms. A phased re-platforming approach is required.",
            null,
            "AWS Application Migration Service only automates server migration and does not optimize the environment. Furthermore, Amazon SQS is not a direct replacement for IBM MQ because many IBM MQ features are not available in SQS.",
            "Although DMS and SCT are appropriate for migrating IBM Db2 to Aurora, Amazon SQS FIFO Queue is not a suitable replacement for IBM MQ. IBM MQ should be re-platformed to Amazon MQ instead."
        ]
    }
};