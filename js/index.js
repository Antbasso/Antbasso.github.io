document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne le formulaire de contact par son ID
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Ajoute un écouteur d'événement pour la soumission du formulaire
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
            
            // Change le texte du bouton pour indiquer l'envoi en cours
            const btn = document.getElementById('button');
            btn.value = 'Envoi en cours...';

            // Envoie le formulaire via emailjs
            emailjs.sendForm('service_q6agkb9', 'template_k7n3ng6', this)
                .then(() => {
                    // Réinitialise le texte du bouton et affiche une alerte de succès
                    btn.value = 'Envoyer Email';
                    alert('Envoyé !');
                    // Réinitialise le formulaire
                    contactForm.reset();
                }, (err) => {
                    // Réinitialise le texte du bouton et affiche une alerte d'erreur
                    btn.value = 'Envoyer Email';
                    alert(JSON.stringify(err));
                });
        });
    }
});