// Question 10 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[10] = {
    question: "A company is using AWS Organizations to manage their multi-account and multi-region AWS infrastructure. They are currently doing large-scale automation for their key daily processes to save costs. One of these key processes is sharing specified AWS resources, which an organizational account owns, with other AWS accounts of the company using AWS RAM. There is already an existing service which was previously managed by a separate organization account moderator, who also maintained the specific configuration details.\n\nIn this scenario, what could be a simple and effective solution that would allow the service to perform its tasks on the organization accounts on the moderator's behalf?",
    answers: [
        "Configure a service-linked role for AWS RAM and modify the permissions policy to specify what the role can and cannot do. Lastly, modify the trust policy of the role so that other processes can utilize AWS RAM.",
        "Attach an IAM role on the service detailing all the allowed actions that it will be able to perform. Install an SSM agent in each of the worker VMs. Use AWS Systems Manager to build automation workflows that involve the daily key processes.",
        "Use trusted access by running the enable-sharing-with-aws-organization command in the AWS RAM CLI. Mirror the configuration changes that was performed by the account that previously managed this service.",
        "Enable cross-account access with AWS Organizations in the Resource Access Manager Console. Mirror the configuration changes that was performed by the account that previously managed this service."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Resource Access Manager (AWS RAM) enables you to share specified AWS resources that you own with other AWS accounts. To enable trusted access with AWS Organizations, you can use trusted access by running the enable-sharing-with-aws-organizations command from the AWS RAM CLI.\n\nYou can use trusted access to enable an AWS service that you specify, called the trusted service, to perform tasks in your organization and its accounts on your behalf. This involves granting permissions to the trusted service. When you enable access, the trusted service can create an IAM role called a service-linked role in every account in your organization. That role has a permissions policy that allows the trusted service to maintain settings and configuration details in your organization's accounts on your behalf.",
        incorrectReasons: [
            "this is not the simplest solution for integrating AWS RAM and AWS Organizations since using AWS Organization's trusted access will create the service-linked role for you. Also, the trust policy of a service-linked role cannot be modified. Only the linked AWS service can assume a service-linked role.",
            "this is not the simplest way to automate the interaction of AWS RAM with AWS Organizations. AWS Systems Manager is a tool that helps with the automation of EC2 instances, on-premises servers, and other virtual machines. It might not support all the services being used by the key processes.",
            null,
            "you should enable trusted access to AWS RAM, not cross-account access. Trusted access allows AWS RAM to create service-linked roles and manage resources across the organization."
        ]
    }
};

