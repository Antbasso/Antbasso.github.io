// Initialisation du carrousel de projets lorsque le document est prêt
$(document).ready(function() {
    $('.project-carousel').slick({
        dots: true, // Affiche les points de navigation
        infinite: true, // Défilement infini
        speed: 300, // Vitesse de défilement
        slidesToShow: 1, // Nombre de diapositives à afficher
        adaptiveHeight: true // Ajuste la hauteur en fonction du contenu
    });
});

// Fonction pour afficher le projet précédent
function prevProject() {
    $('.project-carousel').slick('slickPrev');
}

// Fonction pour afficher le projet suivant
function nextProject() {
    $('.project-carousel').slick('slickNext');
}