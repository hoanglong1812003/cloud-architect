// Question 3 - Set 6
window.questionSet6[3] = {
    question: "Which AWS storage service offers faster disk read and write performance and provides temporary block-level storage for your instance?",
    answers: [
        "Instance Store",
        "EBS Provisioned IOPS SSD",
        "EFS",
        "EBS Throughput Optimized HDD"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Instance Store provides temporary block-level storage that is physically attached to the host server running the EC2 instance. Because the storage is local to the host, it offers very fast disk read and write performance. It is ideal for temporary data such as caches, buffers, scratch data, and other frequently changing information. However, the data is lost when the instance stops, terminates, or fails.",
        incorrectReasons: [
            null,
            "EBS Provisioned IOPS SSD is persistent block storage that delivers high IOPS performance, but it is network-attached rather than physically attached to the host, making it slower than Instance Store.",
            "Amazon EFS is a managed network file system that provides shared storage for multiple instances. It is persistent storage and does not provide the local high-speed performance of Instance Store.",
            "EBS Throughput Optimized HDD is persistent magnetic storage optimized for throughput-intensive workloads, but it is network-attached and not as fast as local Instance Store storage."
        ]
    }
};