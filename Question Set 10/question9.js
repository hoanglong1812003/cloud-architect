// Question 9 - Set 10
window.questionSet10 = window.questionSet10 || {};
window.questionSet10[9] = {
    question: "A company is hosting its application and MySQL database in its on-premises data center. The database increases at about 10GB per day and is approximately 25TB in total size. The company wants to migrate the database workload to the AWS cloud. A 50Mbps VPN connection is currently in place to connect the corporate network to AWS. The company plans to complete the migration to AWS within 3 weeks with the LEAST downtime possible. Which solution should be implemented?",
    answers: [
        "Create a snapshot of the on-premises database server and use VM Import/Export to import it to AWS. Launch an EC2 instance from the snapshot and replicate changes through the VPN.",
        "Temporarily stop the application, export the database, transfer it through AWS Data Transfer Terminal, load it into Aurora MySQL, update DNS, and restart the application.",
        "Export the database, transfer it through AWS Data Transfer Terminal, load it into Aurora MySQL, configure replication over the VPN, wait for synchronization, then cut over to Aurora.",
        "Use AWS DMS over the 50Mbps VPN connection to migrate the entire 25TB database directly to Aurora MySQL."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Data Transfer Terminal can efficiently handle the initial transfer of a large 25TB database. After loading the data into Amazon Aurora MySQL, ongoing changes can be replicated over the VPN connection until synchronization is complete. This approach minimizes downtime because the application remains operational during the bulk migration and only requires a short cutover period when DNS is updated.",
        incorrectReasons: [
            "VM Import/Export is not suitable for migrating a 25TB MySQL database workload. Additionally, transferring such a large snapshot over a 50Mbps connection would not realistically meet the 3-week migration deadline.",
            "This option requires shutting down the application for the entire migration process, resulting in significant downtime. The requirement specifically calls for the least downtime possible.",
            null,
            "Migrating the full 25TB database over a 50Mbps VPN connection would take too long. The database also grows by 10GB per day, making it difficult for replication to catch up within the required migration window."
        ]
    }
};
