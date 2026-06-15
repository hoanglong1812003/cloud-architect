// Question 4 - Set 1
window.questionSet1 = window.questionSet1 || {};
window.questionSet1[4] = {
    question: "Among the following services, which is the most suitable one to use to store the results of I/O-intensive SQL database queries to improve application performance?",
    answers: [
        "AWS IoT Greengrass",
        "Amazon ElastiCache",
        "Amazon CloudFront",
        "Amazon DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon ElastiCache offers fully managed Redis and Memcached. Seamlessly deploy, run, and scale popular open source compatible in-memory data stores. With this service, you can build data-intensive apps or improve the performance of your existing apps by retrieving data from high throughput and low latency in-memory data stores.\n\nThe in-memory caching provided by Amazon ElastiCache can be used to significantly improve latency and throughput for many read-heavy application workloads (such as social networking, gaming, media sharing and Q&A portals) or compute-intensive workloads (such as a recommendation engine). In-memory caching improves application performance by storing critical pieces of data in memory for low-latency access. Cached information may include the results of I/O-intensive database queries or the results of computationally-intensive calculations.",
        incorrectReasons: [
            "this is just a software that lets you run local compute, messaging, data caching, sync, and ML inference capabilities on connected devices in a secure way.",
            null,
            "this is a global CDN service that accelerates the delivery of your websites, APIs, video content, or other web assets. A CDN provides you the ability to deliver a cached copy of web content such as videos, webpages, images, and not I/O-intensive SQL database queries. The more suitable service to use here is Amazon ElastiCache.",
            "although this is a caching feature, it is only applicable to DynamoDB which is a NoSQL database. Remember that as per the scenario, you are required to store the results of I/O-intensive SQL database queries."
        ]
    }
};

