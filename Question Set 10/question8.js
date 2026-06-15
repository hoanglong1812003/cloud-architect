// Question 8 - Set 10
window.questionSet10[8] = {
    question: "A privately funded aerospace and sub-orbital spaceflight services company hosts its rapidly evolving applications in AWS. For its deployment process, the company is using CloudFormation templates which are regularly updated to map the latest AMI IDs for its Amazon EC2 instances clusters. It takes a lot of time to execute this on a regular basis which is why the solutions architect has been instructed to automate this process. Which of the following options is the most suitable solution that can satisfy the above requirements?",
    answers: [
        "Configure your Systems Manager State Manager to store the latest AMI IDs and integrate them with your CloudFormation template. Call the update-stack API in CloudFormation whenever you decide to update the EC2 instances in your CloudFormation template.",
        "Use CloudFormation with Systems Manager Parameter Store to retrieve the latest AMI IDs for your template. Whenever you decide to update the EC2 instances, call the update-stack API in CloudFormation in your CloudFormation template.",
        "Use a combination of AWS Service Catalog with AWS Config to automatically fetch the latest AMI and use it for succeeding deployments.",
        "Use CloudFormation with AWS Service Catalog to fetch the latest AMI IDs and automatically use them for succeeding deployments."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Systems Manager Parameter Store can store the latest AMI IDs and CloudFormation can reference those parameters directly. During stack creation or update, CloudFormation resolves the current parameter value, allowing automatic usage of the latest AMI without modifying the template.",
        incorrectReasons: [
            "Systems Manager State Manager is used to maintain configuration state for EC2 and hybrid infrastructure. It is not intended to act as a parameter repository for AMI IDs.",
            null,
            "AWS Service Catalog is designed for managing approved IT service catalogs and is not intended for automatically resolving the latest AMI IDs during CloudFormation deployments.",
            "AWS Service Catalog does not provide the dynamic parameter resolution capability offered by Systems Manager Parameter Store."
        ]
    }
};