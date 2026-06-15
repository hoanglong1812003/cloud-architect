// Question 10 - Set 5
window.questionSet5[10] = {
    question: "An IT consultancy company has multiple offices located in San Francisco, Frankfurt, Tokyo, and Manila. The company is using AWS Organizations to easily manage its several AWS accounts. A new AWS account was recently added to a specific organizational unit (OU). The solutions architect created a custom SCP that would deny the new account from performing certain ECS actions. However, after applying the policy, the account could still perform the restricted actions. Which of the following is the most likely reason for this problem?",
    answers: [
        "There is an SCP attached to a higher-level OU that permits the actions of the service-linked role. This permission would therefore be inherited by the current OU, and override the SCP placed by the administrator.",
        "The ECS service is being run outside the jurisdiction of the organization. SCPs affect only the principals that are managed by accounts that are part of the organization.",
        "SCPs do not affect any service-linked role. Service-linked roles enable other AWS services to integrate with AWS Organizations and can't be restricted by SCPs.",
        "The default SCP grants all permissions attached to every root, OU, and account. To apply stricter permissions, this policy is required to be modified."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "Service Control Policies (SCPs) do not apply to service-linked roles. AWS service-linked roles are special IAM roles that allow AWS services to integrate with other AWS services and perform actions on behalf of the customer. Because SCPs do not restrict service-linked roles, the ECS service-linked role can continue performing actions even after the SCP is applied.",
        incorrectReasons: [
            "An explicit Deny in an SCP overrides any Allow permissions granted by other SCPs. Therefore, an Allow policy in a higher-level OU would not override a Deny policy applied lower in the hierarchy.",
            "The ECS service and its service-linked role operate within the AWS account that belongs to the organization. The issue is not related to organizational boundaries.",
            "The default FullAWSAccess SCP allows all actions, but an explicit Deny statement in a custom SCP overrides any Allow granted by FullAWSAccess. Therefore, the default SCP is not the cause of the problem."
        ]
    }
};