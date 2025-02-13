document.addEventListener("DOMContentLoaded", function() {
    // Crée et insère la fenêtre modale dans la page
    // Définition du code HTML pour la modale qui contiend le message d'alerte
    const modalHTML = `
    <div id="mailModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); justify-content:center; align-items:center;">
      <div style="position:relative; background:#fff; padding:20px; border-radius:5px; min-width:300px;">
        <!-- Bouton pour fermer la modale -->
        <span id="closeModal" style="position:absolute; top:5px; right:10px; cursor:pointer;">&times;</span>
        <!-- Zone de message à afficher dans la modale -->
        <p id="modalMessage"></p>
      </div>
    </div>`;
    // Insertion de la modale à la fin du document
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Fonction pour afficher la modale avec un message donné
    function showModal(message) {
        const modal = document.getElementById('mailModal');
        document.getElementById('modalMessage').textContent = message;
        // Affiche la modale en changeant son style display à 'flex'
        modal.style.display = 'flex';
    }

    // Fonction pour masquer la modale
    function hideModal() {
        document.getElementById('mailModal').style.display = 'none';
    }

    // Ajoute l'évènement de fermeture sur la croix
    document.getElementById('closeModal').addEventListener('click', hideModal);

    // Sélectionne le formulaire de contact par son ID
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche la soumission classique

            // Change le texte du bouton pour indiquer l'envoi en cours
            const btn = document.getElementById('button');
            btn.value = 'Envoi en cours...';

            // Envoie le formulaire via emailjs
            emailjs.sendForm('service_q6agkb9', 'template_k7n3ng6', this)
                .then(() => {
                    btn.value = 'Envoyer Email';
                    showModal('Email envoyé !');
                    contactForm.reset();
                }, (err) => {
                    btn.value = 'Envoyer Email';
                    showModal('Erreur lors de l\'envoi : ' + JSON.stringify(err));
                });
        });
    }
});

// Antoine Basso
