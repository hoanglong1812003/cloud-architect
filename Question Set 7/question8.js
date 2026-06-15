// Question 8 - Set 7
window.questionSet7[8] = {
    question: "A new company policy requires IAM users to change their passwords’ minimum length to 12 characters. After a random inspection, you found out that there are still employees who do not follow the policy. How can you automatically check and evaluate whether the current password policy for an account complies with the company password policy?",
    answers: [
        "Create a Scheduled Lambda Function that will run a custom script to check compliance against changes made to the passwords periodically.",
        "Create a CloudTrail trail. Filter the result by setting the attribute to 'Event Name' and lookup value to 'ChangePassword'. This easily gives you the list of users who have made changes to their passwords.",
        "Configure AWS Config to trigger an evaluation that will check the compliance for a user’s password periodically.",
        "Create a rule in the Amazon CloudWatch event. Build an event pattern to match events on IAM. Set the event name to 'ChangePassword' in the event pattern. Configure SNS to send notifications to you whenever a user has made changes to his password."
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Config continuously monitors and evaluates AWS resource configurations against desired settings. By enabling the IAM_PASSWORD_POLICY managed rule, AWS Config can automatically evaluate whether the account password policy complies with the company's requirements, including minimum password length. It can also aggregate compliance information across multiple AWS accounts through AWS Organizations.",
        incorrectReasons: [
            "Although a scheduled Lambda function could perform compliance checks, this approach requires custom development and maintenance. AWS Config already provides built-in compliance evaluation capabilities and integrates with Lambda behind the scenes.",
            "CloudTrail can show which users changed their passwords, but it cannot evaluate whether the password policy meets the required minimum length or compliance standards.",
            null,
            "CloudWatch Events and SNS can notify administrators when a password change occurs, but they do not evaluate whether the password policy complies with organizational requirements."
        ]
    }
};