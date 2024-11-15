const resumeData = document.getElementById("resume-data") as HTMLFormElement;

const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

resumeData.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    const resumeHtml = `
        <h2><b> Resume </b><h2>
        <h3>Personal Information</h3>
        <h3><b>Name: </b> ${name} </h3>
        <h3><b>Email: </b> ${email} </h3>
        <h3><b>Phone: </b> ${phone} </h3>

        <h3> Education </h3>
        <p> ${education} </p>

        <h3> Experience </h3>
        <p> ${experience} </p>

        <h3> Skills </h3>
        <p> ${skills} </p>
    `;

    if(resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }else{
        console.error("Please enter resume display element.");
    }
})
