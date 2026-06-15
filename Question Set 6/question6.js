// Question 6 - Set 6
window.questionSet6[6] = {
    question: "A solutions architect is tasked with designing a scalable infrastructure solution for a business that runs uses Amazon Elastic Kubernetes Service (Amazon EKS) to execute container applications. Since the company’s workload varies throughout the day, they want to make sure that its underlying infrastructure automatically scales in and out in response to demand. Which of the following would meet the requirements with the LEAST amount of operational overhead?",
    answers: [
        "Integrate an edge-optimized API endpoint in Amazon API Gateway with Amazon EKS to manage and expose APIs for the containerized applications running on EKS.",
        "Use a combination of Kubernetes Metrics and Kubernetes Cluster Autoscaler to manage the number of nodes.",
        "Use Amazon EC2 Auto Scaling Groups with custom scaling policies to manage the scaling of EKS worker nodes.",
        "Set up CloudWatch alarms for CPU utilization or request count to monitor the relevant metrics of the container applications running on Amazon EKS."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon EKS supports Kubernetes-native autoscaling capabilities. By combining Kubernetes Metrics Server, Horizontal Pod Autoscaler (HPA), and Cluster Autoscaler, the cluster can automatically scale Pods and worker nodes based on workload demand. This provides the most automated and operationally efficient solution for scaling containerized applications running on EKS.",
        incorrectReasons: [
            "API Gateway can expose APIs for applications running on EKS, but it does not provide automatic scaling of Kubernetes Pods or worker nodes in response to workload demand.",
            null,
            "EC2 Auto Scaling Groups can scale EKS worker nodes, but managing custom scaling policies introduces additional configuration and operational overhead compared to using Kubernetes Cluster Autoscaler.",
            "CloudWatch alarms can monitor cluster metrics, but monitoring alone does not automatically scale Kubernetes Pods or nodes. Additional automation would still be required."
        ]
    }
};
