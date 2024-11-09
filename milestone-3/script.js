var resumeData = document.getElementById("resume-data");
var resumeDisplay = document.getElementById("resume-display");
resumeData.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHtml = "\n        <h2><b> Resume </b><h2>\n        <h3>Personal Information</h3>\n        <h3><b>Name: </b> ".concat(name, " </h3>\n        <h3><b>Email: </b> ").concat(email, " </h3>\n        <h3><b>Phone: </b> ").concat(phone, " </h3>\n\n        <h3> Education </h3>\n        <p> ").concat(education, " </p>\n\n        <h3> Experience </h3>\n        <p> ").concat(experience, " </p>\n\n        <h3> Skills </h3>\n        <p> ").concat(skills, " </p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("Please enter resume display element.");
    }
});
