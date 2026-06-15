// Question 9 - Set 8
window.questionSet8[9] = {
    question: "A company requires regular processing of a massive amount of product catalogs that need to be handled per batch. The data needs to be processed regularly by on-demand workers. The company instructed its solutions architect to design a workflow orchestration system that will enable to reprocess failures and handle multiple concurrent operations. What is the MOST suitable solution that the solutions architect should implement in order to manage the state of every workflow?",
    answers: [
        "Use Amazon MQ to set up a batch process workflow that handles the processing for a single batch. Develop worker jobs using AWS Lambda functions.",
        "Implement Step Functions to orchestrate batch processing workflows. Use the AWS Management Console to monitor workflow status and manage failure reprocessing.",
        "Store workflow data in an Amazon RDS with AWS Lambda functions polling the RDS database instance for status changes. Set up worker Lambda functions to process the next workflow steps, then use Amazon QuickSight to visualize workflow states directly out of RDS.",
        "Set up a workflow using AWS Config and AWS Step Functions in order to orchestrate multiple concurrent workflows. Visualize the status of each workflow using the AWS Management Console. Store the historical data in an Amazon S3 bucket and visualize the data using Amazon QuickSight."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Step Functions is a fully managed workflow orchestration service that enables you to coordinate multiple AWS services into stateful workflows. It provides built-in state management, error handling, retry mechanisms, parallel execution, and monitoring through the AWS Management Console, making it the most suitable solution for batch processing workflows that require failure reprocessing and concurrent operations.",
        incorrectReasons: [
            "Amazon MQ is a managed message broker service designed for messaging between applications. While it can decouple systems, it does not provide workflow orchestration, state management, retry policies, or monitoring capabilities comparable to AWS Step Functions.",
            "Although storing workflow state in Amazon RDS and polling with Lambda functions could work, it introduces significant operational overhead and complexity. AWS Step Functions already provides native workflow state management, monitoring, and failure handling without requiring custom implementations.",
            "AWS Config is a compliance and configuration auditing service, not a workflow orchestration service. Adding AWS Config does not provide any benefit for managing workflow execution states or coordinating concurrent processing tasks."
        ]
    }
};