

$(document).ready(function(){
	$("#slide_down_button").click(function() {
		console.log('Clicked');
	    $('body').animate({
	        scrollTop: $(".section.about").offset().top
	    }, 1000);
	});
});
