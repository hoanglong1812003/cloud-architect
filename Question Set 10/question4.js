
// Question 4 - Set 10
window.questionSet10[4] = {
    question: "A startup plans to develop a multiplayer game that uses UDP as the protocol for communication between clients and game servers. The data of the users will be stored in a key-value store. As the Solutions Architect, you need to implement a solution that will distribute the traffic across a number of servers. Which of the following could help you achieve this requirement?",
    answers: [
        "Distribute the traffic using Application Load Balancer and store the data in Amazon DynamoDB.",
        "Distribute the traffic using Network Load Balancer and store the data in Amazon Aurora.",
        "Distribute the traffic using Application Load Balancer and store the data in Amazon RDS.",
        "Distribute the traffic using Network Load Balancer and store the data in Amazon DynamoDB."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Network Load Balancer (NLB) operates at Layer 4 and supports UDP traffic, making it suitable for multiplayer gaming workloads. Amazon DynamoDB is a key-value and document database, making it the ideal storage solution for user data in this scenario.",
        incorrectReasons: [
            "Application Load Balancer only supports Layer 7 protocols such as HTTP and HTTPS and does not support UDP traffic.",
            "Although Network Load Balancer supports UDP traffic, Amazon Aurora is a relational database and not a key-value store.",
            "Application Load Balancer does not support UDP traffic, and Amazon RDS is not designed as a key-value database."
        ]
    }
};

