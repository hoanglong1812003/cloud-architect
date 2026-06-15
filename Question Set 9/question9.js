// Question 9 - Set 9
window.questionSet9[9] = {
    question: "A tech company uses AWS CloudFormation to deploy a three-tier web application that consists of a web tier, application tier, and database tier. The application will utilize an Amazon DynamoDB table for database storage. All resources will be created using a CloudFormation template. Which of the following options would allow the application instances access to the DynamoDB tables without exposing the API credentials?",
    answers: [
        "Launch an IAM Role that has the required permissions to read and write from the DynamoDB table. Reference the IAM Role as a property inside the AWS::IAM::InstanceProfile of the application instance.",
        "Launch an IAM user in the CloudFormation template that has permissions to read and write from the DynamoDB table. Use the GetAtt function to retrieve the Access and secret keys and pass them to the web application instance through the use of its instance user-data.",
        "In the CloudFormation template, use the Parameter section to have the user input the AWS Access and Secret Keys from an already created IAM user that has the permissions required to interact with the DynamoDB table.",
        "Launch an IAM Role that has the required permissions to read and write from the required DynamoDB table. Associate the Role to the application instances by referencing it to the AWS::IAM::InstanceRoleName Property."
    ],
    correctAnswer: 0,
    explanation: {
        correct: "The recommended approach is to create an IAM Role with the required DynamoDB permissions and attach it to the EC2 instance through an Instance Profile. This allows the application to obtain temporary credentials automatically without exposing access keys. IAM Roles provide automatic credential rotation, improved security, and easier permission management.",
        incorrectReasons: [
            "Using an IAM User and passing access keys to EC2 instances through user data exposes long-term credentials and violates AWS security best practices.",
            "Providing AWS Access Keys and Secret Keys as CloudFormation parameters introduces unnecessary security risks. IAM Roles should be used instead of static credentials.",
            "There is no AWS::IAM::InstanceRoleName property for associating a role with an EC2 instance. IAM Roles must be attached through an Instance Profile."
        ]
    }
};

