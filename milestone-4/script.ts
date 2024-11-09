// get references to the form and display objects
const resumeData = document.getElementById("resume-data") as HTMLFormElement;

const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
resumeData.addEventListener("submit", (event: Event) => {
    event.preventDefault();// prevent page refresh

    // collect input data
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHtml = `
        <h2><b>Editable Resume </b><h2>
        <h3>Personal Information</h3>
        <h3><b>Name:</b><span contenteditable="true">${name}</span></h3>
        <h3><b>Email:</b><span contenteditable="true">${email}</span></h3>
        <h3><b>Phone:</b><span contenteditable="true">${phone}</span></h3>

        <h3> Education </h3>
        <p contenteditable="true"> ${education} </p>

        <h3> Experience </h3>
        <p contenteditable="true"> ${experience} </p>

        <h3> Skills </h3>
        <p contenteditable="true"> ${skills} </p>
    `;

    // Display the generated resume
    if(resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }else{
        console.error("Please enter resume display element.");
    }






})
