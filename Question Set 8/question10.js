// Question 10 - Set 8
window.questionSet8[10] = {
    question: "A data analytics company is running a Redshift data warehouse for one of its major clients. In compliance with the Business Continuity Program of the client, they need to provide a Recovery Point Objective of 24 hours and a Recovery Time Objective of 1 hour. The data warehouse should be available even in the event that the entire AWS Region is down. Which of the following is the most suitable configuration for this scenario?",
    answers: [
        "Configure Redshift to use Cross-Region Replication (CRR) and in case of system failure, failover to the backup region and manually copy the snapshot from the primary region to the secondary region.",
        "Configure Redshift to have automatic snapshots and do a cross-region snapshot copy to automatically replicate the current production cluster to the disaster recovery region.",
        "Enable Redshift replication from the cluster running in the primary region to the cluster running in the secondary region. Change the DNS endpoint to the secondary cluster's primary node in case of system failures in the primary region.",
        "No additional configuration needed. Redshift is configured with automatic snapshot by default."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon Redshift supports automatic snapshots and cross-region snapshot copy, allowing snapshots from the primary region to be automatically copied to a disaster recovery region. This provides a reliable disaster recovery strategy that satisfies the RPO and RTO requirements while ensuring data can be restored even if the entire primary AWS Region becomes unavailable.",
        incorrectReasons: [
            "Amazon Redshift does not support Cross-Region Replication (CRR). CRR is an Amazon S3 feature. Redshift disaster recovery across regions is accomplished using cross-region snapshot copy rather than active replication.",
            "Amazon Redshift does not provide direct cluster-to-cluster replication across AWS Regions. The recommended disaster recovery mechanism is snapshot-based backup and restoration using cross-region snapshot copy.",
            "Although automatic snapshots are enabled by default, cross-region snapshot copy is not automatically configured. If the entire AWS Region fails, snapshots stored only in that region would be unavailable, making this solution insufficient for disaster recovery requirements."
        ]
    }
};