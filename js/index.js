document.addEventListener("DOMContentLoaded", function() {

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
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
}
});
