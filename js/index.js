document.addEventListener("DOMContentLoaded", function() {
    // Code spécifique à la page d'accueil
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('.footer').classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Mode Clair';
        } else {
            darkModeToggle.textContent = 'Mode Sombre';
        }
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const btn = document.getElementById('button');
        btn.value = 'Sending...';

        emailjs.sendForm('service_q6agkb9', 'template_k7n3ng6', this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
});