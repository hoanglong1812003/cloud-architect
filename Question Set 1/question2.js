// Question 2 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[2] = {
    question: "A company is planning to adopt a hybrid cloud architecture with AWS. Which of the following options can they use to help them estimate their costs?",
    answers: [
        "AWS Cost Explorer",
        "Cost allocation tag",
        "Consolidated Billing",
        "AWS Pricing Calculator"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS offers you a pay-as-you-go approach for pricing of more than 165 cloud services. To estimate a bill, use the AWS Pricing Calculator. You can enter your planned resources by service, and the Pricing Calculator provides an estimated cost per month. The AWS Pricing Calculator is an easy-to-use online tool that enables you to estimate the monthly cost of AWS services for your use case based on your expected usage. It is continuously updated with the latest pricing for all AWS services in all regions.",
        incorrectReasons: [
            "this service can only forecast your costs based on your previous usage. Remember that the scenario says that the company is just planning to adopt a hybrid cloud architecture with AWS which means that they can't use Cost Explorer yet to forecast nor estimate their cost.",
            "this is primarily used to make it easier for you to categorize and track your AWS costs by tagging your resources.",
            "this just allows you to track the combined costs of all the linked AWS accounts in your organization. This will not help you estimate your upcoming AWS costs.",
            null
        ]
    }
};

