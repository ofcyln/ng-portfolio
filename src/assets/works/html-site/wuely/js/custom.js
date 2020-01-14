
$(function(){

    jQuery('.star-rating').rating();


    });

// BU ALANDA ajaxla veri alınabilir
//    $(function(){
//        $('#star-rating').rating(function(vote, event){
//            // we have vote and event variables now, lets send vote to server.
//            $.ajax({
//                url: "/get_votes.php",
//                type: "GET",
//                data: {rate: vote},
//            });
//        });
//    });
