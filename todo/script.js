
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon-fill')
    // Toggle the moon icon class and check if the brightness icon is added//
    if (this.classList.toggle('bi-brightness-high-fill')) {
        // If the brightness icon is present, set light mode//
        body.style.background = 'white';
        body.style.color = 'black';
    } else {
        // Otherwise, set dark mode//
        body.style.background = 'black';
        body.style.color = 'white';
    }

    // Add a smooth transition for background and color changes//
    body.style.transition = '1s';
});
