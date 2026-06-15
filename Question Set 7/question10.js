// Question 10 - Set 7
window.questionSet7[10] = {
    question: "A company has data centers in Europe, Asia, and North America regions. Each data center has a 10Gbps Direct Connect connection to AWS, and the company uses a custom VPN to encrypt traffic between its data center network and AWS. In total, the data centers have about five hundred physical servers that host a mix of Windows and Linux-based applications and database services. The company plans to decommission these data centers and migrate its entire infrastructure to the AWS cloud instead. Separate accounts for staging and launching VMs must be implemented, as well as the ability to do AWS Region-to-Region Amazon VPC stack creation. Which of the following options is the recommended solution for this migration?",
    answers: [
        "Leverage the Application Discovery Service from AWS. Install the Application Discovery Service agents on each physical server and visualize the infrastructure on the AWS Migration Hub console. Trigger the replication to copy your servers to AWS. After the replication is completed, start the cutover to AWS.",
        "Leverage AWS Storage Gateway for the migration. Install the AWS Storage Gateway software appliance on their on-premises servers and use it to transfer their data to Amazon S3. Once the data is in S3, use Amazon EC2 to create virtual machines that replicate their on-premises infrastructure.",
        "Leverage AWS Application Migration Service (AWS MGN) for the migration. Install the AWS Replication agent on each physical machine to start the replication to the AWS Cloud. Once syncing is completed, launch test instances and initiate cutover to the AWS Cloud.",
        "Leverage AWS Outposts service for the migration of physical servers to AWS. Install the Outposts server agent on the data center to incrementally replicate the servers into Amazon Machine Images (AMIs). Deploy the AMIs into Amazon EC2 instances to initiate cutover."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Application Migration Service (AWS MGN) is a highly automated lift-and-shift migration service that enables organizations to migrate physical, virtual, and cloud-based servers to AWS with minimal downtime. It continuously replicates source servers into AWS and automatically converts them into native AWS instances during cutover. AWS MGN is specifically designed for large-scale server migrations involving hundreds of servers and significantly reduces manual effort, migration risk, and operational overhead.",
        incorrectReasons: [
            "AWS Application Discovery Service only collects infrastructure and dependency information to help plan migrations. It does not perform server replication or migration to AWS.",
            "AWS Storage Gateway is a hybrid storage service used to integrate on-premises environments with AWS storage services. It is not designed for migrating live applications, operating systems, and databases to AWS.",
            null,
            "AWS Outposts extends AWS infrastructure and services to on-premises environments. It is not a migration service and does not provide server replication capabilities for cloud migration projects."
        ]
    }
};