// Question 4 - Set 3
window.questionSet3 = window.questionSet3 || {};
window.questionSet3[4] = {
    question: "You need to launch a new EC2 Instance for a beta program which is scheduled to change its instance family, operating system and tenancy exactly 3 months after its trial period. Which type of Reserved Instance (RI) should you use?",
    answers: [
        "Convertible RI",
        "Zonal RI",
        "Scheduled RI",
        "Standard RI"
    ],
    correctAnswer: 0,
    explanation: {
        correct: "Reserved Instances provide you with a significant discount compared to On-Demand instance pricing. Convertible Reserved Instances (RI) provide you with a significant discount (up to 54%) compared to On-Demand Instances and can be purchased for a 1-year or 3-year term. Purchase Convertible Reserved Instances if you need additional flexibility, such as the ability to use different instance families, operating systems, or tenancies over the Reserved Instance term.\n\nFor Convertible Reserved Instance (RI), it can be exchanged during the term for another Convertible Reserved Instance with new attributes including instance family, instance type, platform, scope, or tenancy. You can also opt for a 3-year term to avail of more discounts.",
        incorrectReasons: [
            null,
            "this only refers to a Reserved Instance that you purchase for a specific Availability Zone, and most importantly, a Standard RI type will not allow you to modify the instance family. It has no instance size flexibility, which means that the Reserved Instance discount applies to instance usage for the specified instance type and size only.",
            "this type only enables you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. Unlike the Convertible RI, this cannot be exchanged during the term for another Reserved Instance with new attributes.",
            "although some of its attributes (such as the instance size) can be modified during the term, the instance family cannot be modified, which is what the scenario requires. You cannot exchange a Standard Reserved Instance, only modify it."
        ]
    }
};

