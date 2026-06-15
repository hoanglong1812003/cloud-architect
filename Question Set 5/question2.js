// Question 2 - Set 5
window.questionSet5[2] = {
    question: "Which Elastic Load Balancer can support path-based routing, host-based routing, and bi-directional communication channels using WebSockets?",
    answers: [
        "Network Load Balancer",
        "Both the Application Load Balancer and Network Load Balancer",
        "Gateway Load Balancer",
        "Application Load Balancer"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Application Load Balancer (ALB) operates at Layer 7 and supports advanced routing features such as path-based routing, host-based routing, and WebSocket connections. These capabilities make it ideal for modern web applications, microservices, and container-based architectures.",
        incorrectReasons: [
            "Network Load Balancer operates at Layer 4 and supports TCP, UDP, and TLS traffic. It does not provide path-based or host-based routing capabilities.",
            "Only the Application Load Balancer supports path-based routing, host-based routing, and WebSockets. Network Load Balancer does not provide these Layer 7 routing features.",
            "Gateway Load Balancer is designed for deploying and scaling third-party virtual appliances such as firewalls and intrusion detection systems. It does not support path-based or host-based routing."
        ]
    }
};
