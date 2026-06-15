// Question 8 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[8] = {
    question: "A company has a cloud architecture composed of Linux and Windows Amazon EC2 instances that process high volumes of financial data 24 hours a day, 7 days a week. To ensure high availability of the systems, the Solutions Architect must create a solution that enables monitoring of memory and disk utilization metrics for all instances.\n\nWhich of the following is the most suitable monitoring solution to implement?",
    answers: [
        "Install the Amazon CloudWatch agent to all the EC2 instances that gather the memory and disk utilization data. View the custom metrics in the CloudWatch console.",
        "Use the default Amazon CloudWatch configuration to EC2 instances where the memory and disk utilization metrics are already available. Install the AWS Systems Manager (SSM) Agent on all the EC2 instances and enable AWS Systems Manager Inventory to track instance configuration and metadata.",
        "Enable the Enhanced Monitoring option in EC2 and install Amazon CloudWatch agent to all the EC2 instances to be able to view the memory and disk utilization in the CloudWatch dashboard.",
        "Use Amazon Inspector and install the Inspector agent to all EC2 instances."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Amazon CloudWatch has available Amazon EC2 Metrics for you to use for monitoring CPU utilization, Network utilization, Disk performance, and Disk Reads/Writes. In case you need to monitor memory utilization, disk swap utilization, disk space utilization, page file utilization, and log collection, you need to prepare a custom metric.\n\nThere is a multi-platform CloudWatch agent which can be installed on both Linux and Windows-based instances. You can use a single agent to collect both system metrics and log files from Amazon EC2 instances and on-premises servers. This agent supports both Windows Server and Linux and enables you to select the metrics to be collected, including sub-resource metrics such as per-CPU core.",
        incorrectReasons: [
            null,
            "memory and disk utilization metrics are not available in the default CloudWatch configuration. These metrics are not natively collected by CloudWatch and require the CloudWatch agent to be installed on each instance. Furthermore, AWS Systems Manager Inventory is designed to collect instance metadata and configuration data, not performance metrics.",
            "Enhanced Monitoring is only a feature of Amazon RDS. By default, Enhanced Monitoring metrics are only stored for 30 days in the CloudWatch Logs.",
            "Amazon Inspector is primarily an automated security assessment service that helps you test the network accessibility of your Amazon EC2 instances. It does not provide a custom metric to track the memory and disk utilization of EC2 instances."
        ]
    }
};

