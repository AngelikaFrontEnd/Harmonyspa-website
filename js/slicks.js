$(document).ready(function () {
    $('.opinions__boxes').slick ({
         slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots:true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1 
    
            }
        }], 

     }); 
    }) 
    
