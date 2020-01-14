// JavaScript Document
$(function(){

	//left side menu open close
	$("#open-menu").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggle");
	});
	
	//scroll top position bind
	$(window).bind('scroll', function(e) {
			var val = $(this).scrollTop();
			if(val >= 100){
				$('.navbar-default').css('background','#000');
				$('.navbar-form .search-icon').css('background-color','#2d3034');
			}else{
				$('.navbar-default').css('background','transparent');
				$('.navbar-form .search-icon').attr('style','');
			}
		});

})