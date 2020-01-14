$(document).ready(function() {

    $('.flexslider-magazin').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        touch: true,
        animationSpeed: 200,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

    $('.flexslider-middle-carousel').flexslider({
        animation: "slide",
        itemWidth: 240,
        touch: true,
        animationSpeed: 500,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

    $('.flexslider-middle-carousel-categories').flexslider({
        animation: "slide",
        itemWidth: 210,
        touch: true,
        animationSpeed: 500,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

    $('.flexslider-daily-gallery').flexslider({
        animation: "slide",
        touch: true,
        controlNav: "thumbnails",
        animationSpeed: 200,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

    $('.flexslider-detay-carousel').flexslider({
        animation: "slide",
        itemWidth: 210,
        touch: true,
        animationSpeed: 500,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

       $('.dailyGallery .flexslider-daily-gallery .flex-control-nav li a').click(function(e){
           e.preventDefault();
       });

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

});