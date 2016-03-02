

$(document).ready(function(){
	$("#slide_down_button").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".section.about").offset().top
	    }, 1000);
	});
});