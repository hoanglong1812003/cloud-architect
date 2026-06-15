// Question 1 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[1] = {
    question: "Which of the following Cost Management Tools allows tracking of Amazon EC2 Reserved Instance (RI) usage and provides visibility into the discounted RI rate charged to resources?",
    answers: [
        "AWS Cost Explorer",
        "AWS Price List Bulk API",
        "AWS Budgets",
        "AWS Cost and Usage report"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "The Cost and Usage Report is your one-stop shop for accessing the most granular data about your AWS costs and usage. You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.\n\nIt lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes. You can also customize the AWS Cost & Usage Report to aggregate your usage data to the daily or hourly level.\n\nWith the AWS Cost & Usage Report, you can do the following:\n\nâ€¢ Access comprehensive AWS cost and usage information.\nThe AWS Cost & Usage Report gives you the ability to delve deeply into your AWS cost and usage data, understand how you are using your AWS implementation, and identify opportunities for optimization.\n\nâ€¢ Track your Amazon EC2 Reserved Instance (RI) usage.\nEach line item of usage that receives an RI discount contains information about where the discount was allocated. This makes it easier to trace which instances are benefitting from specific reservations.\n\nâ€¢ Leverage strategic data integrations.\nUsing the Amazon Athena data integration feature, you can quickly query your cost and usage information using standard SQL queries. You can also upload your data directly into Amazon Redshift or Amazon QuickSight.\n\nHence, the correct answer is: AWS Cost and Usage report.",
        incorrectReasons: [
            "this is just a tool that enables you to view and analyze your costs and usage. It does not specifically provide detailed information about Amazon EC2 Reserved Instance (RI) usage or the discounted RI rate charged to your resources as what the scenario required.",
            "it is just a URL that provides up-to-date pricing information on the current AWS products and services. This API does not provide the most granular data about your AWS costs and usage.",
            "it simply gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.",
            null
        ]
    }
};
