// Question 6 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[6] = {
    question: "Which of the following options below is solely the responsibility of the customer in accordance with the AWS shared responsibility model?",
    answers: [
        "Awareness & Training",
        "Service and Communications Protection or Zone Security",
        "Patching of the host operating system",
        "Configuration Management"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Under the AWS Shared Responsibility Model, AWS is responsible for security of the cloud, while customers are responsible for security in the cloud.\n\nSome controls are inherited from AWS, some are shared, and some are solely the customer's responsibility.\n\nExamples of shared controls include Patch Management, Configuration Management, and Awareness & Training. AWS manages these controls for its infrastructure while customers manage them for their own environments.\n\nCustomer-specific controls include Service and Communications Protection or Zone Security, where customers are responsible for routing, zoning, and protecting data within their own security environments.\n\nHence, the correct answer is: Service and Communications Protection or Zone Security.",
        incorrectReasons: [
            "this is considered a shared control. AWS trains its own employees while customers are responsible for training their employees.",
            null,
            "AWS is responsible for patching the host operating system. Customers are responsible for patching their guest operating systems and applications.",
            "this is considered a shared control. AWS manages configuration of its infrastructure while customers manage configuration of their guest operating systems, databases, and applications."
        ]
    }
};