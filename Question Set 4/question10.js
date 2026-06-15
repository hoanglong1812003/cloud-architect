// Question 10 - Set 4
window.questionSet4 = window.questionSet4 || {};

window.questionSet4[10] = {
    question: "A company has production, development, and test environments in its software development department, and each environment contains tens to hundreds of EC2 instances, along with other AWS services. Recently, Ubuntu released a series of security patches for a critical flaw. The company must immediately patch all affected EC2 instances in all environments except production. Each environment also has different baseline patch requirements. Using AWS Systems Manager, how should you perform this task with the least amount of effort?",
    answers: [
        "Tag each instance based on its environment and OS. Create various shell scripts for each environment that specifies which patch will serve as its baseline. Using AWS Systems Manager Run Command, place the EC2 instances into Target Groups and execute the script corresponding to each Target Group.",
        "Schedule a maintenance period in AWS Systems Manager Maintenance Windows for each environment. During the maintenance period, Systems Manager will execute a cron job that will install the required patches for each EC2 instance.",
        "Tag each instance based on its OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and then apply the patches specified in the corresponding patch baseline to each Patch Group. Afterward, verify that the patches have been installed correctly using Patch Compliance. Record the changes using AWS Config.",
        "Tag each instance based on its environment and OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and apply the patches specified in the corresponding patch baseline to each Patch Group."
    ],
    correctAnswer: 3,
    explanation: {
        correct: "AWS Systems Manager Patch Manager automates patching of managed instances.\n\nPatch baselines define which patches are approved or rejected and can include auto-approval rules.\n\nPatch Groups allow instances to be organized by environment, operating system, or other criteria using EC2 tags. By associating Patch Groups with different patch baselines, you can ensure that development and test environments receive patches immediately while production remains untouched until validation is complete.\n\nThis approach requires the least operational effort and aligns directly with the scenario requirements.\n\nHence, the correct answer is: Tag instances based on environment and OS, create patch baselines for each environment, organize instances using Patch Groups, and apply the corresponding patch baselines.",
        incorrectReasons: [
            "using custom scripts and Run Command introduces unnecessary operational complexity compared to Patch Manager.",
            "Maintenance Windows can be used for patching, but this approach requires more configuration effort and is not the simplest solution.",
            "tagging instances only by OS would cause all Ubuntu instances, including production systems, to potentially receive the same patches, which violates the requirements.",
            null
        ]
    }
};