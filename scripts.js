

$(document).ready(function () {
    
    $('.headerText').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    
    });

    const scrollDown = document.querySelectorAll('.anim');
    const scrollLeft = document.querySelectorAll('.scrollLeft');
    const scrollRight = document.querySelectorAll('.scrollRight');

    observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-in-out`;
            } else {
                entry.target.style.animation = `none`;
            }
        })

        
    })
    scrollDown.forEach(image => {
        observer.observe(image);
    })


    observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `anim2 1s ${entry.target.dataset.delay} forwards ease-out`;
            } else {
                entry.target.style.animation = `none`;
            }
        })
    })
    scrollLeft.forEach(image => {
        observer.observe(image);
    });

    observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `anim3 1s ${entry.target.dataset.delay} forwards ease-out`;
            } else {
                entry.target.style.animation = `none`;
            }
        })
    })
    scrollRight.forEach(image => {
        observer.observe(image);
    });

    
    


    
    
   


    // $(".bounce").click(function () {
    //     bounce($(this), 3, '10px', 300);
    // });



    // function bounce(element, times, distance, speed) {
    //     for (i = 0; i < times; i++) {
    //         element.animate({ marginTop: '-=' + distance }, speed)
    //             .animate({ marginTop: '+=' + distance }, speed);
    //     }
    // }

});      




