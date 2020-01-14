jQuery( document ).ready(function() {
    //scrollTop

    //append scrollTopID
    jQuery("body").append( "<div id='toTop' class='up_arrow'></div>" );

    //scroll function
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop()) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    });

    jQuery("#toTop").click(function () {

        jQuery("html, body").animate({scrollTop: 0}, 1000);
    });

    jQuery('#myTab a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    })

    jQuery('a.bigPreview').colorbox({maxWidth : 750 , maxHeight : 900});


});