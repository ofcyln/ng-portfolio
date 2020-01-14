$(function(){		
		$('.line1').delay(200).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line2').delay(400).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line3').delay(600).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line4').delay(800).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line5').delay(1000).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line6').delay(1200).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		$('.line7').delay(1400).animate({
		  'left': '30px'
		}, 1200, 'easeInOutExpo');
		
		$('.cover').delay(1900).animate({
		  'top': '-221px'
		}, 1200, 'easeInOutExpo');
		$('.hand').delay(1900).animate({
		  'top': '-321px'
		}, 1200, 'easeInOutExpo');
		
				
		$('.pic1').delay(1680).animate({
			width: '168', height: '170', opacity: 1
		  }, 1500, 'easeInOutExpo');
		$('.pic2').delay(1680).animate({
			height: '195', opacity: 1
		  }, 1500, 'easeInOutExpo');
	  $('.pic3').delay(1680).animate({
		width: '167', height: '159', opacity: 1
	  }, 1500, 'easeInOutExpo');
		
	});
	
	$(function(){
	$("input:text").addClass("placeHolder");
	$(".placeHolder").textPlaceholder();
});

jQuery.fn.textPlaceholder = function () {

	return this.each(function(){

		var that = this;

		if (that.placeholder && 'placeholder' in document.createElement(that.tagName)) return;

		var placeholder = that.getAttribute('placeholder');
		var input = jQuery(that);

		if (that.value === '' || that.value == placeholder) {
			input.addClass('text-placeholder');
			that.value = placeholder;
		}

		input.focus(function(){
			if (input.hasClass('text-placeholder')) {
				this.value = '';
				input.removeClass('text-placeholder')
			}
		});

		input.blur(function(){
			if (this.value === '') {
				input.addClass('text-placeholder');
				this.value = placeholder;
			} else {
				input.removeClass('text-placeholder');
			}
		});

		that.form && jQuery(that.form).submit(function(){
			if (input.hasClass('text-placeholder')) {
				that.value = '';
			}
		});

	});

};
