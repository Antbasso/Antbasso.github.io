document.addEventListener("DOMContentLoaded", function() {
    let allRonds = document.querySelectorAll('.round');
    let allBoxes = document.querySelectorAll('.box');

    const controller = new ScrollMagic.Controller();

    allBoxes.forEach((box, index) => {
        if(allRonds[index] && box && allRonds[index].getAttribute('data-anim') === box.getAttribute('data-anim')){
            let tween = TweenMax.from(box, {
                y: -50, 
                opacity: 0, 
                duration: 0.5
            });

            new ScrollMagic.Scene({
                triggerElement: allRonds[index],
                reverse: false
            })
            .setTween(tween)
            //.addIndicators() 
            .addTo(controller);
        }
    });

    // Mode sombre
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
});

document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([45.5, 6.0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers = [
        L.marker([45.49977939987076, 6.046370638623093]).bindPopup('Collège'),
        L.marker([45.55094744263309, 5.968483642057824]).bindPopup('Lycée'),
        L.marker([45.91876712883978, 6.1573488397829]).bindPopup('IAE')
    ];

    var group = new L.featureGroup(markers).addTo(map);

    map.fitBounds(group.getBounds());
});

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

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   emailjs.send("service_q6agkb9","template_k7n3ng6", this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});