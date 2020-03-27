

$(document).ready(function () {

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    $('.fa-times').css('display', 'none');

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            $('.navBar').css('display', 'flex');
            $('.fa-bars').css('display', 'none');
            $('.fa-times').css('display', 'flex');

        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            $('.navBar').css('display', 'none');
            $('.fa-bars').css('display', 'flex');
            $('.fa-times').css('display', 'none');    
        }
    });

    $('.navBar li a').on("click", function () {
        $(menuBtn).click();
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




