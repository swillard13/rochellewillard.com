$(document).ready(function() {
	$('.center').hide();
	$('#about-me').show();
	var stickyNavTop = $('#nav').offset().top;
  
	stickyNav(stickyNavTop);
	$(window).scroll(function() {  
	    stickyNav(stickyNavTop);  
	}); 
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

function stickyNav(top) {  
	var scrollTop = $(window).scrollTop();    
	if (scrollTop > top) {   
	    $('#nav').addClass('sticky');  
	} else {  
	    $('#nav').removeClass('sticky');   
	}  
};	
