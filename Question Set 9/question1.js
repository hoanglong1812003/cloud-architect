// Question 1 - Set 9
window.questionSet9[1] = {
    question: "What action can be taken to strengthen the security of an AWS root account in the event of suspected unauthorized usage?",
    answers: [
        "Disable root account credentials and use an IAM user with admin privileges instead",
        "Enable CloudTrail to monitor for suspicious logins",
        "Change the root account password often",
        "Configure MFA for your root account"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Multi-Factor Authentication (MFA) adds an extra layer of security beyond a username and password. Enabling MFA on the AWS root account is a best practice and significantly reduces the risk of unauthorized access, even if the password is compromised.",
        incorrectReasons: [
            "AWS does not provide a way to disable root account credentials. The root account always exists and should instead be protected with MFA.",
            "CloudTrail helps monitor and audit login activity, but it does not prevent unauthorized access. It only provides visibility after events occur.",
            "Regularly changing the root password is a good security practice, but MFA provides a stronger additional layer of protection against unauthorized access."
        ]
    }
};