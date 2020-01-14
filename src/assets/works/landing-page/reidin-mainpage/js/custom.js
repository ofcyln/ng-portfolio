$(document).ready(function() {
    $('.show-form').on('click', function () {
	    $('.clicker-area').addClass('hidden');
	    $('.form-content').removeClass('hidden-xs hidden-sm');
	    $('.collector').removeClass('hidden-xs hidden-sm');
	    $('.footer-area').removeClass('hidden-xs hidden-sm');
	    $('.embed-responsive').removeClass('hidden-sm');
	});
});