window.questionSet7 = window.questionSet7 || {};
window.questionSet7[4] = {
    question: "As an AWS customer, what offering do you naturally inherit from AWS after you sign up?",
    answers: [
        "All the best practices of AWS policies, architecture, and operational processes built to satisfy your requirements",
        "All the responsibilities in enforcing security and compliance policies of your organization",
        "All the hardware and software that you provision in the AWS cloud",
        "All the data you store in and retrieve from AWS"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Under the AWS Shared Responsibility Model, customers inherit the benefits of AWS security controls, including best practices for security policies, architecture, and operational processes. AWS is responsible for the security of the cloud and maintains the infrastructure that supports AWS services. Customers benefit from these controls automatically when using AWS services.",
        incorrectReasons: [
            null,
            "Customers are responsible for enforcing their own security and compliance requirements. AWS does not assume responsibility for organizational policies or customer-specific compliance controls.",
            "AWS owns and manages the underlying physical infrastructure, but customers do not inherit ownership of AWS hardware and software. Customers only consume the services built on top of that infrastructure.",
            "Customers retain ownership and responsibility for their data. AWS does not take ownership of customer data, so there is nothing to inherit in this area."
        ]
    }
};