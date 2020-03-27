

$(document).ready(function () {

    


    
    
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            $('.navBar').css('display', 'flex');

        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            $('.navBar').css('display', 'none');
           
        }
    });

    
    $('.headerText').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    
    });



    const scrollDown = document.querySelectorAll('.anim');
    const scrollLeft = document.querySelectorAll('.scrollLeft');
    const scrollRight = document.querySelectorAll('.scrollRight');

    observer = new IntersectionObserver((entries, observer) => {
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-in-out`;
                observer.unobserve(entry.target);
                
            } else {
                entry.target.style.animation = `none`;
                // count = 1;
            }
            
        })

        
    })
    scrollDown.forEach(image => {
        observer.observe(image);
    })


    observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `anim2 1s ${entry.target.dataset.delay} forwards ease-out`;
                observer.unobserve(entry.target);
            } else {
                entry.target.style.animation = `none`;
            }
        })
    })
    scrollLeft.forEach(image => {
        observer.observe(image);
    });

    observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `anim3 1s ${entry.target.dataset.delay} forwards ease-out`;
                observer.unobserve(entry.target);
            } else {
                entry.target.style.animation = `none`;
            }
        })
    })
    scrollRight.forEach(image => {
        observer.observe(image);
    });



});      




