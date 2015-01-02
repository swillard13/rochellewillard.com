$(document).ready(function() {
	$('.center').hide();
	$('#about-me').show();
	bindEvents();
});
function bindEvents() {
	$('.nav_item').click(function() {
		var current = $('.current');
		if (!current.is($(this))) {
			current.removeClass('current');
			$(this).addClass('current');
			$('.center').hide();
			if($(this).is($('#experience-tab'))) {
				$('#experience').show();
			} else if($(this).is($('#about-me-tab'))) {
				$('#about-me').show();
			} else if($(this).is($('#projects-tab'))) {
				$('#projects').show();
			} else if($(this).is($('#resume-tab'))) {
				$('#resume').show();
			} else if($(this).is($('#contact-me-tab'))) {
				$('#contact-me').show();
			}
		}
	});
}