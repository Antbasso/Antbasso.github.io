// filepath: /c:/Users/Antoine/Downloads/Projet_portfolio/js/projets.js
$(document).ready(function(){
    $('.project-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

function prevProject() {
    $('.project-carousel').slick('slickPrev');
}

function nextProject() {
    $('.project-carousel').slick('slickNext');
}