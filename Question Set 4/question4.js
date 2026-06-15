// Question 4 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[4] = {
    question: "How can you apply and easily manage the common access permissions to a large number of IAM users in AWS?",
    answers: [
        "Apply permissions to multiple IAM Users by using a cross-account role.",
        "Attach the necessary policies or permissions required to a new IAM Group then afterwards, add the IAM Users to the IAM group.",
        "Attach the exact same IAM Policy to all of the IAM Users.",
        "Attach the IAM Policy to an IAM Role then afterwards, associate that role to all of the IAM Users."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "An IAM group is a collection of IAM users. Groups let you specify permissions for multiple users, making it easier to manage permissions for those users.\n\nFor example, you can create a group called Admins and assign administrator permissions to that group. Any user added to the group automatically receives those permissions.\n\nIf a new employee joins the organization, you can simply add them to the appropriate group instead of manually assigning permissions.\n\nHence, the correct solution is to attach the required permissions to an IAM Group and then add IAM users to that group.",
        incorrectReasons: [
            "cross-account roles are used to delegate access to resources across different AWS accounts and are not intended for managing permissions for large groups of IAM users within the same account.",
            null,
            "this approach creates unnecessary administrative overhead because you must manage permissions separately for every IAM user.",
            "using IAM Roles for this purpose is not the recommended method. IAM Groups are specifically designed for managing common permissions across many users."
        ]
    }
};
