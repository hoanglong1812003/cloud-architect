// Question 3 - Set 8
window.questionSet8[3] = {
    question: "A Software Engineer is having trouble migrating and configuring a licensed application on an Amazon EC2 instance. Which option provides the fastest way to get the application running in AWS?",
    answers: [
        "Use AWS Application Discovery Service to create an exact copy of the application in EC2.",
        "Use Cloud Migration Factory on AWS to automate the migration process and replicate the application environment into EC2.",
        "Try to look for an AMI in the AWS Marketplace that provides a similar setup to her application stack.",
        "Create a Docker image of the application and launch Docker in the EC2 instances."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Marketplace provides thousands of preconfigured software solutions and AMIs that can be quickly deployed on AWS. Using a Marketplace AMI with a similar application stack is often the fastest way to get a licensed application running without dealing with complex migration, configuration, or licensing challenges. This migration strategy is known as repurchasing.",
        incorrectReasons: [
            "AWS Application Discovery Service helps collect information about on-premises environments for migration planning, but it does not automatically create or migrate applications to Amazon EC2.",
            "Cloud Migration Factory on AWS is designed for large-scale migration projects involving many servers. For a single application, it introduces unnecessary complexity and is not the fastest solution.",
            "Containerizing the application may still require significant configuration work and licensing validation. It does not necessarily provide the quickest path to getting the application operational."
        ]
    }
};