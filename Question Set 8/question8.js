// Question 8 - Set 8
window.questionSet8[8] = {
    question: "A company has several web applications with users all around the world. Each application is hosted in an Auto Scaling group of EC2 instances in multiple AZs behind an Application Load Balancer (ALB). All applications have their own fully qualified domain name. For added security, the applications must use a publicly trusted SSL certificate. Which solution will meet this requirement with the LEAST operational overhead?",
    answers: [
        "Issue an SSL/TLS certificate using the AWS Certificate Manager Private Certificate Authority. Associate the new certificate on the HTTPS listener of the ALBs.",
        "Use the AWS Certificate Manager (ACM) to generate a public SSL/TLS certificate. Associate the new SSL/TLS certificate on the HTTPS listener of the ALBs.",
        "Launch a self-hosted certificate authority (CA) using the Let’s Encrypt tool in an Amazon EC2 instance. Utilize the built-in ISRG Root X1 trusted root CA certificate. Generate a new SSL/TLS certificate using the certbot CLI utility. Associate the new certificate on the HTTPS listener of the ALBs.",
        "Use OpenSSL to generate a self-signed certificate. Import the SSL/TLS certificate to the AWS Certificate Manager (ACM) and associate it with the HTTPS listener of the ALBs."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Certificate Manager (ACM) can provision publicly trusted SSL/TLS certificates at no additional cost and automatically renew them. ACM integrates directly with Application Load Balancers, making it the solution with the least operational overhead.",
        incorrectReasons: [
            "ACM Private Certificate Authority issues private certificates that are trusted only within an organization. The requirement specifically calls for publicly trusted certificates.",
            "Although Let's Encrypt certificates are publicly trusted, running and maintaining your own certificate authority infrastructure introduces unnecessary operational overhead compared to ACM.",
            "Self-signed certificates are not publicly trusted and require manual creation, import, and renewal, resulting in significantly higher operational overhead."
        ]
    }
};