// Question 7 - Set 8
window.questionSet8[7] = {
    question: "A company has an Application Load Balancer (ALB) that accepts HTTP and HTTPS traffic on ports 80 and 443, respectively. Recently, the company associated a new domain for its website, and they want to ensure that all HTTP traffic for this new domain is automatically redirected to HTTPS to improve security. Which ALB configuration should be done to satisfy the requirement?",
    answers: [
        "Configure the existing HTTP listener to redirect traffic to port 443.",
        "Configure the existing on port 443 and add a redirect action to HTTP on port 80.",
        "Create a new HTTP listener on port 80 and add a redirect action to the HTTPS protocol on port 443.",
        "Create a new ALB listener on port 443 and configure it to redirect HTTP traffic to HTTPS."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "The recommended approach is to configure the existing HTTP listener on port 80 with a redirect action that forwards all requests to HTTPS on port 443. This ensures that all HTTP traffic is automatically redirected to a secure HTTPS connection.",
        incorrectReasons: [
            null,
            "A new listener on port 80 cannot be created because an HTTP listener already exists on that port.",
            "A new listener on port 443 cannot be created because an HTTPS listener already exists on that port. ALBs do not allow duplicate listeners on the same port."
        ]
    }
};