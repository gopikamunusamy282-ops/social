const form = document.getElementById("privacyForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const items = document.querySelectorAll(".privacy-item");
    let score = 0;

    items.forEach(function(item) {
        if (item.checked) {
            score++;
        }
    });

    document.getElementById("result").textContent =
        "Your Privacy Score: " + score + "/5";

    const advice = document.getElementById("advice");

    if (score === 5) {
        advice.textContent =
            "Excellent! Keep reviewing your privacy settings regularly.";
    } else if (score >= 3) {
        advice.textContent =
            "Good progress! Review the unchecked items to improve.";
    } else {
        advice.textContent =
            "Start improving your online safety by completing more items.";
    }
});


const footprintForm = document.getElementById("footprintForm");

footprintForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = document.querySelectorAll(".risk-item");
    let riskScore = 0;

    answers.forEach(function(answer) {
        riskScore += Number(answer.value);
    });

    let riskLevel = "";
    let suggestions = [];

    if (riskScore <= 2) {
        riskLevel = "Low Risk";
        suggestions = [
            "Keep reviewing your privacy settings.",
            "Continue avoiding unnecessary personal information sharing."
        ];
    } else if (riskScore <= 5) {
        riskLevel = "Medium Risk";
        suggestions = [
            "Review who can see your posts.",
            "Avoid accepting requests from unknown people.",
            "Review old posts and remove unnecessary personal details."
        ];
    } else {
        riskLevel = "High Risk";
        suggestions = [
            "Restrict the visibility of personal information.",
            "Disable public live-location sharing.",
            "Review your followers and remove suspicious accounts.",
            "Review old posts and strengthen account security."
        ];
    }

    document.getElementById("riskResult").textContent =
        "Digital Footprint Risk: " + riskLevel +
        " (Score: " + riskScore + "/10)";

    const list = document.getElementById("recommendations");
    list.replaceChildren();

    suggestions.forEach(function(suggestion) {
        const item = document.createElement("li");
        item.textContent = suggestion;
        list.appendChild(item);
    });
});
