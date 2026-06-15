// Question 4 - Set 9
window.questionSet9[4] = {
    question: "A company is using an On-Demand EC2 instance to host a legacy web application that uses an Amazon Instance Store-Backed AMI. The web application should be decommissioned as soon as possible and hence, you need to terminate the EC2 instance. When the instance is terminated, what happens to the data on the root volume?",
    answers: [
        "Data is automatically deleted.",
        "Data is automatically saved as an EBS snapshot.",
        "Data is unavailable until the instance is restarted.",
        "Data is automatically saved as an EBS volume."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Instance store volumes persist only for the lifetime of the EC2 instance. When an instance backed by an Instance Store AMI is terminated, all data on the instance store root volume is permanently deleted.",
        incorrectReasons: [
            "Instance store volumes are not automatically backed up as EBS snapshots upon termination.",
            "A terminated EC2 instance cannot be restarted. The data is permanently lost rather than temporarily unavailable.",
            "Instance store volumes are ephemeral and are not automatically converted into EBS volumes when the instance is terminated."
        ]
    }
};