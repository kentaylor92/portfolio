
$(document).ready(function () {
    
    $('.headerText').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    
    });
    console.log('Hello, im working!');

    $(function () {
        $("#arrow").on('click', function () {
            const position = $("#aboutMe").offset().top;
            $("HTML, BODY").animate({
                scrollTop: position
            }, 1000);
        });
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




