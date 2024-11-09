// get references to the form and display objects
var resumeData = document.getElementById("resume-data");
var resumeDisplay = document.getElementById("resume-display");
// Handle form submission
resumeData.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page refresh
    // collect input data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically
    var resumeHtml = "\n        <h2><b>Editable Resume </b><h2>\n        <h3>Personal Information</h3>\n        <h3><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></h3>\n        <h3><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></h3>\n        <h3><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></h3>\n\n        <h3> Education </h3>\n        <p contenteditable=\"true\"> ").concat(education, " </p>\n\n        <h3> Experience </h3>\n        <p contenteditable=\"true\"> ").concat(experience, " </p>\n\n        <h3> Skills </h3>\n        <p contenteditable=\"true\"> ").concat(skills, " </p>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("Please enter resume display element.");
    }
});
