var toggleButton = document.getElementById('toggle-skills');
var hideSkills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (hideSkills.style.display === 'none') {
        hideSkills.style.display = 'block';
    }
    else {
        hideSkills.style.display = 'none';
    }
});
