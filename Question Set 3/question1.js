// Question 1 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[1] = {
    question: "Which of the following provides the most granular data about AWS costs and usage and can also load that information into Amazon Athena, Amazon Redshift, Amazon QuickSight, or a preferred tool, and also leveraged by AWS Billing Conductor for billing group level reporting?",
    answers: [
        "AWS Budgets",
        "AWS Cost Explorer",
        "Consolidated Billing",
        "AWS Cost and Usage Reports"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Cost and Usage Reports is your one-stop shop for accessing the most granular data about your AWS costs and usage. You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.\n\nIt lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes. You can also customize the AWS Cost & Usage Report to aggregate your usage data to the daily or hourly level.\n\nWith the AWS Cost and Usage Report, you can do the following:\n\nâ€¢ Access comprehensive AWS cost and usage information.\nThe AWS Cost and Usage Reports give you the ability to delve deeply into your AWS cost and usage data, understand how you are using your AWS implementation, and identify opportunities for optimization.\n\nâ€¢ Track your Amazon EC2 Reserved Instance (RI) usage.\nEach line item of usage that receives an RI discount contains information about where the discount was allocated. This makes it easier to trace which instances are benefiting from specific reservations.\n\nâ€¢ Leverage strategic data integrations.\nUsing the Amazon Athena data integration feature, you can quickly query your cost and usage information using standard SQL queries. You can also upload your data directly into Amazon Redshift or Amazon QuickSight.\n\nHence, the correct answer is: AWS Cost and Usage Reports.",
        incorrectReasons: [
            "it simply gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.",
            "it is just a tool that enables you to view and analyze your costs and usage, but not at a granular level like the AWS Cost and Usage Report. It also does not provide a way to load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.",
            "it just allows you to track the combined costs of all the linked AWS accounts in your organization. This feature does not provide the most granular data about your AWS costs and usage.",
            null
        ]
    }
};
