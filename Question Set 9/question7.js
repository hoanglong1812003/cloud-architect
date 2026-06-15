// Question 7 - Set 9
window.questionSet9[7] = {
    question: "A hospital has a mission-critical application that uses a RESTful API powered by Amazon API Gateway and AWS Lambda. The medical officers upload PDF reports to the system which are then stored as static media content in an Amazon S3 bucket. The security team wants to improve its visibility when it comes to cyber-attacks and ensure HIPAA compliance. The company is searching for a solution that continuously monitors object-level S3 API operations and identifies protected health information (PHI) in the reports, with minimal changes in the existing Lambda function. Which solution will meet these requirements with the LEAST operational overhead?",
    answers: [
        "Use Amazon Textract with the StartDocumentTextDetection API operation to extract text from PDF reports. Analyze the extracted data with a custom-built PHI detection algorithm within the Lambda function.",
        "Use Amazon Textract to extract the text from the PDF reports. Integrate Amazon Comprehend Medical with the existing Lambda function to identify the PHI from the extracted text.",
        "Use Amazon Textract Medical with PII redaction turned on to extract and filter sensitive text from the PDF reports. Create a new Lambda function that calls the regular Amazon Comprehend API to identify the PHI from the extracted text.",
        "Use Amazon Transcribe to read and analyze the PDF reports using the StartTranscriptionJob API operation. Use Amazon CloudWatch Logs to detect protected health information (PHI) content by tracking access logs and security events."
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon Textract can extract text from PDF reports, while Amazon Comprehend Medical can automatically identify and analyze Protected Health Information (PHI). Comprehend Medical is HIPAA-eligible and requires minimal changes to the existing Lambda-based architecture, resulting in the least operational overhead.",
        incorrectReasons: [
            "Building and maintaining a custom PHI detection algorithm increases operational complexity and is less efficient than using a managed service designed specifically for healthcare data.",
            "PII redaction is not the same as PHI detection. In addition, creating a new Lambda function introduces unnecessary changes and operational overhead.",
            "Amazon Transcribe is designed for speech-to-text conversion, not for extracting text from PDF documents. CloudWatch Logs also cannot directly identify PHI within document content."
        ]
    }
};