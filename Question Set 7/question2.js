// Question 2 - Set 7
window.questionSet7 = window.questionSet7 || {};
window.questionSet7[2] = {
    question: "An organization plans to build an online application form with a detection capability to recognize attributes appearing in uploaded images and remove forms that contain inappropriate photos. The development team has no experience building machine-learning models. Which AWS service would you recommend?",
    answers: [
        "Amazon Kendra",
        "Amazon Rekognition",
        "Amazon SageMaker",
        "Amazon Detective"
    ],
    correctAnswer: 1,
    explanation: {
        correct: "Amazon Rekognition is a fully managed computer vision service that can analyze images and videos without requiring machine learning expertise. It can detect faces, objects, text, scenes, activities, and inappropriate content. Since the requirement is to analyze uploaded images and identify specific attributes without building custom ML models, Amazon Rekognition is the ideal solution.",
        incorrectReasons: [
            "Amazon Kendra is an intelligent enterprise search service. It is used to build search capabilities and does not provide image analysis or content moderation features.",
            null,
            "Amazon SageMaker is a machine learning platform for building, training, and deploying ML models. The scenario specifically states that the team has no experience building machine learning models.",
            "Amazon Detective is a security investigation service used to analyze and identify the root cause of security findings and suspicious activities. It is not intended for image recognition or moderation."
        ]
    }
};