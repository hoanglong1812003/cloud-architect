// Question 2 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[2] = {
    question: "A company has web servers running on Amazon EC2 instances that access a RESTful API hosted on their on-premises data center. What kind of architecture is the company using?",
    answers: [
        "Platform as a Service (PaaS)",
        "Serverless Architecture",
        "Software as a Service (SaaS)",
        "Hybrid Architecture"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Enterprise environments are often a mix of cloud, on-premises data centers, and edge locations. Hybrid cloud architectures help organizations integrate their on-premises and cloud operations to support a broad spectrum of use cases using a common set of cloud services, tools, and APIs across on-premises and cloud environments.\n\nCustomers can seamlessly integrate their on-premises and cloud storage, networking, identity management, and security policies to enable use cases such as data center extension to the cloud, backup and disaster recovery to the cloud, and hybrid data processing.\n\nSince the company has web servers running on Amazon EC2 instances that access a RESTful API hosted on their on-premises data center, they are considered to be using a hybrid cloud computing deployment model.\n\nHence, the correct answer is: Hybrid Architecture.",
        incorrectReasons: [
            "this is not a type of architecture but rather a Cloud Computing Model that removes the need for organizations to manage the underlying infrastructure and allows customers to focus on deploying and managing their applications.",
            "the company is using EC2 instances for its web servers instead of services such as AWS Lambda or Amazon S3 static website hosting. Serverless architecture eliminates infrastructure management tasks and abstracts server management from developers.",
            "this is a Cloud Computing Model that provides a completed product run and managed by a service provider. It does not describe the architecture used in the scenario.",
            null
        ]
    }
};
