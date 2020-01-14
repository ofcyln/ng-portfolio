jQuery(document).ready(function() {

    //menu
    jQuery(".navbar-nav>li").hover(
        function() {
            jQuery( this ).addClass( "mouseOverStatus" );
        }, function() {
            jQuery( this ).removeClass( "mouseOverStatus" );
        }
    );

    //maxLength haber
    var maxlength = 91;
    jQuery('.leftNewsArea .topNewsAbsorber article .elementAbsorber a p').text(function (_, text) {
        return jQuery.trim(text).substring(0, maxlength);
    });

    //main slider
    jQuery('.flexslider-spor').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        touch: true,
        animationSpeed: 200,
        slideshowSpeed: 5000,
        pauseOnHover: true
    });

    //tabs and sub video sliders
    var tabNum = '';
    jQuery('#mainPageVideoTab a').click(function (e) {
        tabNum = jQuery(this).data('tb');
        e.preventDefault();
        jQuery(this).tab('show');
        sl(tabNum);
    });

    function sl(tabNum){

    setTimeout(function(){
        jQuery(".flexslider-middle-carousel"+tabNum+" ").flexslider({
            animation: "slide",
            itemWidth: 212,
            touch: true,
            animationSpeed: 200,
            slideshowSpeed: 5000
        });
    },50)
    }
    sl(tabNum);

    //tabs and sub gallery sliders
    var tabGalleryNum = '';
    jQuery('#mainPageGalleryTab a').click(function (e) {
        tabGalleryNum = jQuery(this).data('tbg');
        e.preventDefault();
        jQuery(this).tab('show');
        glr(tabGalleryNum);
    });

    function glr(tabGalleryNum){

        setTimeout(function(){
            jQuery(".flexslider-middle-carousel-gallery"+tabGalleryNum+" ").flexslider({
                animation: "slide",
                itemWidth: 212,
                touch: true,
                animationSpeed: 200,
                slideshowSpeed: 5000
            });
        },50)
    }
    glr(tabGalleryNum);


});