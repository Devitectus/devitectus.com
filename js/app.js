$(document).ready(function(){

	var panel = $('.sliding-panel-content,.sliding-panel-fade-screen');
	var services = $('.js-services');
	var contacts = $('.js-contacts');
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    panel.toggleClass('is-visible');
    e.preventDefault();
    
    if (panel.hasClass('is-visible')) {
	  	disableScroll();
	  } else {
	  	enableScroll();
	  }
  });

 	services.click(function(e) {
 		e.preventDefault();
 		if (panel.hasClass('is-visible')) {
  		panel.removeClass('is-visible');
  		enableScroll();
	  }
  	$('html, body').animate({
  		scrollTop: $('#contacts').offset().top
  	}, 1000);
  });

  
  contacts.click(function(e) {
  	e.preventDefault();
  	if (panel.hasClass('is-visible')) {
  		panel.removeClass('is-visible');
  		enableScroll();
	  }
  	$('html, body').animate({
  		scrollTop: $('#services').offset().top
  	}, 1000);
  });

  

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault) {
	     e.preventDefault();
	  }
	  e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
	    if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	    }
	}

	function disableScroll() {
	  if (window.addEventListener) {// older FF
	      window.addEventListener('DOMMouseScroll', preventDefault, false);
	    }
	  window.onwheel = preventDefault; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
	    if (window.removeEventListener) {
	        window.removeEventListener('DOMMouseScroll', preventDefault, false);
	     }   
	    window.onmousewheel = document.onmousewheel = null; 
	    window.onwheel = null; 
	    window.ontouchmove = null;  
	    document.onkeydown = null;  
	}
});