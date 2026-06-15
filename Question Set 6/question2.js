// Question 2 - Set 6
window.questionSet6[2] = {
    question: "A startup plans to host a simple WordPress site on AWS. However, due to its developers’ limited knowledge on AWS, they seek the easiest method of deploying the site. Which AWS service should the startup use?",
    answers: [
        "Amazon Elastic Beanstalk",
        "AWS Glue",
        "Amazon Lightsail",
        "Amazon Elastic Compute Cloud (EC2)"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Amazon Lightsail is designed for users who need a simple VPS solution with minimal AWS expertise. It provides preconfigured application templates, including WordPress, and bundles compute, storage, networking, DNS management, and a static IP into a predictable monthly pricing model. This makes it the easiest option for quickly deploying and managing a WordPress website.",
        incorrectReasons: [
            "Elastic Beanstalk simplifies application deployment but still requires a deeper understanding of AWS infrastructure and configuration than Lightsail. It is not the easiest option for beginners.",
            "AWS Glue is a serverless ETL service used for data integration and transformation. It is not intended for hosting websites or WordPress applications.",
            "Amazon EC2 provides full control over virtual servers but requires manual provisioning, configuration, patching, and ongoing management, making it more complex than Lightsail."
        ]
    }
};