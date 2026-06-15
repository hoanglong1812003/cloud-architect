// Question 6 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[6] = {
    question: "Which of the following Amazon EC2 instance purchasing options can help you address compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses?",
    answers: [
        "Dedicated Instance",
        "Reserved Instance",
        "Dedicated Host",
        "On-Demand Instance"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "An Amazon EC2 Dedicated Host is a physical server with EC2 instance capacity fully dedicated to your use. Dedicated Hosts can help you address compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses.\n\nDedicated Hosts allow you to use your existing per-socket, per-core, or per-VM software licenses, including Microsoft Windows Server, Microsoft SQL Server, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, or other software licenses that are bound to VMs, sockets, or physical cores. Dedicated Hosts give you additional visibility and control over how instances are placed on a physical server, and you can consistently deploy your instances to the same physical server over time.",
        incorrectReasons: [
            "although Dedicated instances also run on dedicated hardware, Dedicated Hosts provide further visibility and control by allowing you to place your instances on a specific, physical server.",
            "you would not be able to use your existing server-bound software licenses with this option. You have to use a Dedicated Host instead.",
            null,
            "this only enables you to pay for compute capacity per hour or per second, depending on which instances you run. You cannot use your existing server-bound software licenses with this option."
        ]
    }
};

