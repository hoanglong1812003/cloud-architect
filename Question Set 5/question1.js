// Question 1 - Set 5
window.questionSet5 = window.questionSet5 || {};
window.questionSet5[1] = {
    question: "Which of the following IAM identities is associated with the access keys that are used in managing your cloud resources via the AWS Command Line Interface (AWS CLI)?",
    answers: [
        "IAM Role",
        "IAM User",
        "IAM Group",
        "IAM Policy"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Access keys are long-term credentials associated with an IAM user or the AWS account root user. They are used to sign programmatic requests made through the AWS CLI, SDKs, or APIs. An IAM user can have up to two access keys, consisting of an Access Key ID and a Secret Access Key. Since the scenario specifically refers to access keys used with AWS CLI, the correct answer is IAM User.",
        incorrectReasons: [
            "IAM roles are typically used to provide temporary security credentials through AWS STS. While roles can be assumed when using the AWS CLI, they are not directly associated with long-term access keys as described in the scenario.",
            null,
            "An IAM group is simply a collection of IAM users used to simplify permission management. Groups do not have credentials or access keys and cannot directly authenticate AWS CLI requests.",
            "An IAM policy is not an IAM identity. Policies define permissions and are attached to users, groups, or roles, but they are not associated with access keys."
        ]
    }
};