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
});