// Question 10 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[10] = {
    question: "A media company hosts its entire infrastructure on the AWS cloud. There is a requirement to copy information to or from the shared resources from another AWS account. The solutions architect has to provide the other account access to several AWS resources, such as Amazon S3, AWS KMS, and Amazon OpenSearch Service, in the form of a list of AWS account ID numbers. In addition, the user in the other account should still work in the trusted account, and there is no need to give up the user permissions in place of the role permissions. The solutions architect must also set up a solution that continuously assesses, audits, and monitors the policy configurations.\n\nWhich of the following is the MOST suitable type of policy that should be used in this scenario?",
    answers: [
        "Set up a service-linked role with a service control policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.",
        "Set up a service-linked role with an identity-based policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.",
        "Set up cross-account access with a user-based policy configuration. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.",
        "Set up cross-account access with a resource-based Policy. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "For some AWS services, you can grant cross-account access to your resources. To do this, you attach a policy directly to the resource that you want to share, instead of using a role as a proxy. The resource that you want to share must support resource-based policies. Unlike a user-based policy, a resource-based policy specifies who (in the form of a list of AWS account ID numbers) can access that resource.\n\nCross-account access with a resource-based policy has some advantages over a role. With a resource that is accessed through a resource-based policy, the user still works in the trusted account and does not have to give up his or her user permissions in place of the role permissions. AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources.",
        incorrectReasons: [
            "a service control policy is primarily used in AWS Organizations and not for cross-account access. You should also use AWS Config, and not AWS Systems Manager, to periodically audit changes to the IAM policy.",
            "a service-linked role is just a unique type of IAM role that is linked directly to an AWS service. It is the AWS Config service, and not the AWS Systems Manager, that enables you to assess, audit, and evaluate the configurations of your AWS resources.",
            "a user-based policy only maps the access to a certain IAM user and not to a certain AWS resource.",
            null
        ]
    }
};

