// Question 4 - Set 6
window.questionSet6[4] = {
    question: "Which of the following purchase options offers the most significant discount compared to On-Demand instance pricing to process steady-state workloads that will continuously be running for a year and also provide capacity reservation?",
    answers: [
        "Dedicated Instance",
        "Savings Plans",
        "Convertible Reserved Instance",
        "Standard Reserved Instance"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Standard Reserved Instances provide the largest discount compared to On-Demand pricing for predictable, steady-state workloads. They can be purchased for one- or three-year terms and, when scoped to an Availability Zone, also provide capacity reservation. Standard RIs generally offer greater savings than Convertible RIs because they trade flexibility for lower pricing.",
        incorrectReasons: [
            "Dedicated Instances run on single-tenant hardware and are typically more expensive than Reserved Instances. They are designed for compliance and licensing requirements rather than cost savings.",
            "Savings Plans provide significant discounts in exchange for a usage commitment but do not provide capacity reservation, which is specifically required in the scenario.",
            "Convertible Reserved Instances provide flexibility to change instance families, operating systems, and tenancies during the reservation term, but they offer smaller discounts than Standard Reserved Instances."
        ]
    }
};
