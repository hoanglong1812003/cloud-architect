// Question 5 - Set 2
window.questionSet2 = window.questionSet2 || {};
window.questionSet2[5] = {
    question: "A company has enlisted Agila Consulting Co. to design an AWS disaster recovery solution for its on-premises bare-metal servers and SQL databases. The solution should provide a rapid, efficient method to replicate its current environment on AWS with minimal data loss in the event of a disaster. The company would like to keep track of the status of the replication process.\n\nWhich tool should the team adopt for the DR solution?",
    answers: [
        "AWS Elastic Disaster Recovery",
        "Cloud Migration Factory on AWS",
        "AWS Transform MGN",
        "AWS Transform"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "AWS Elastic Disaster Recovery (AWS DRS) minimizes downtime and data loss with fast, reliable recovery of on-premises and cloud-based applications using affordable storage, minimal compute, and point-in-time recovery.\n\nSet up AWS Elastic Disaster Recovery to securely replicate data from your source servers to a staging area subnet in your AWS account. You can test the implementation non-disruptively. Monitor replication and perform recovery and failback drills periodically. Launch recovery instances on AWS within minutes if you need to recover applications. You can keep applications on AWS or replicate data back to your primary site.",
        incorrectReasons: [
            null,
            "this service is primarily designed for large-scale migration orchestration, not disaster recovery. It helps coordinate migration waves but does not provide continuous replication or DR failover capability.",
            "it is only used for lift-and-shift migration or rehosting applications to AWS. It is useful for moving servers to AWS, but the scenario asks for a DR solution that continuously replicates the environment for recovery during a disaster.",
            "this service is a broader modernization/migration service family. It is not the specific DR tool used to continuously replicate on-premises bare-metal servers and databases into AWS."
        ]
    }
};

