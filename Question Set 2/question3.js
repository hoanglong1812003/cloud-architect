// Question 3 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[3] = {
    question: "Which Amazon EC2 instance purchasing option allows you to take advantage of unused EC2 capacity in the AWS Cloud and provides up to a 90% discount compared to On-Demand prices?",
    answers: [
        "Spot Instance",
        "Convertible Reserved Instance",
        "Dedicated Host",
        "Standard Reserved Instance"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Amazon EC2 Spot Instances lets you take advantage of unused EC2 capacity in the AWS cloud. Spot Instances are available at up to a 90% discount compared to On-Demand prices. You can use Spot Instances for various stateless, fault-tolerant, or flexible applications such as big data, containerized workloads, CI/CD, web servers, high-performance computing (HPC), and other test & development workloads.\n\nDue to the operating scale of AWS, Spot Instances can offer scale and cost savings to run hyper-scale workloads. You also have the option to hibernate, stop or terminate your Spot Instances when EC2 reclaims the capacity back with two minutes of notice.",
        incorrectReasons: [
            null,
            "this type doesn't utilize unused EC2 capacity and actually costs more than a Standard Reserved Instance. This one only provides you with a discount of up to 54% compared to On-Demand Instances and can be purchased for a 1-year or 3-year term.",
            "this is actually a physical EC2 server dedicated for your use and not just an unused EC2 capacity in AWS.",
            "although it provides a significant discount, it is only up to 75% and not 90%, compared to On-Demand instance pricing."
        ]
    }
};

