const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

const hideSkills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', () => {
    if (hideSkills.style.display === 'none') {
        hideSkills.style.display = 'block'
    } else{
        hideSkills.style.display = 'none'
    }
})