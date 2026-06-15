
// Question 2 - Set 10
window.questionSet10[2] = {
    question: "What does AWS do when a storage device reaches the end of its lifespan?",
    answers: [
        "AWS simply wipes the device and disposes it",
        "AWS archives the device in case customers request their data again",
        "AWS wipes the drives and sends it back to the manufacturer to procure a new one",
        "AWS follows a strict decommissioning process as described in compliance procedures"
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS follows strict media sanitization and decommissioning procedures based on industry standards such as NIST 800-88. Storage devices containing customer data remain under AWS control until they have been securely decommissioned.",
        incorrectReasons: [
            "AWS does not simply wipe and dispose of storage devices. Secure decommissioning procedures must be followed to protect customer data.",
            "AWS does not archive retired storage devices for future customer data recovery requests.",
            "AWS does not return storage devices to manufacturers after wiping them. Devices remain under AWS control throughout the decommissioning process."
        ]
    }
};

