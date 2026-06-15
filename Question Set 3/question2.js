// Question 2 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[2] = {
    question: "Which of the following is true regarding Elastic Load Balancing?",
    answers: [
        "It automatically increases or decreases the number of instances as the demand of your application changes.",
        "It distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, in multiple Availability Zones.",
        "It is a virtual server that allows you to run your applications in the AWS Cloud.",
        "It translates domain names (such as www.tutorialsdojo.com) into numeric IP addresses (such as 192.0.2.1) that Amazon EC2 instances use to connect to each other."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "AWS Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones.\n\nAWS Elastic Load Balancing offers multiple types of load balancers: Application Load Balancer (best for HTTP and HTTPS traffic at Layer 7), Network Load Balancer (best for TCP, UDP, and TLS traffic at Layer 4), and Gateway Load Balancer (provides Layer 3 gateway and Layer 4 load balancing capabilities).",
        incorrectReasons: [
            "this is a feature of Auto Scaling. AWS ELB does not have the capabilities to scale EC2 instances.",
            null,
            "this refers to Amazon EC2. Take note that AWS ELB is a load balancing service and not a virtual server.",
            "this refers to Route 53. You can only use ELB to distribute traffic to EC2 instances."
        ]
    }
};

