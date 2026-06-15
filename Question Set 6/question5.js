// Question 5 - Set 6
window.questionSet6[5] = {
    question: "Which of the following services combine 5G networks with AWS compute and storage services for the benefit of high-performance mobile applications?",
    answers: [
        "AWS Amplify",
        "AWS CloudShell",
        "AWS Wavelength",
        "AWS Control Tower"
    ],
    correctAnswer: 2,
    explanation: {
        correct: "AWS Wavelength combines the ultra-low latency and high bandwidth of 5G networks with AWS compute and storage services. AWS deploys Wavelength Zones within telecommunications providers' data centers, allowing application traffic to reach AWS resources without leaving the mobile carrier's network. This enables the development of mobile applications that require single-digit millisecond latency.",
        incorrectReasons: [
            "AWS Amplify is a development platform used to build and deploy web and mobile applications, but it does not integrate AWS infrastructure directly into 5G networks.",
            "AWS CloudShell is a browser-based command-line environment for managing AWS resources and has no relation to 5G networking or low-latency mobile applications.",
            "AWS Control Tower is used to set up and govern multi-account AWS environments according to best practices. It is not related to 5G connectivity or edge computing."
        ]
    }
};