
const loader = function() {
	setTimeout(function() {
		document.querySelector('#ftco-loader').classList.remove('show');
	});
};
loader();

// Open the menu on click
let burgerMenu = function() {
	document.querySelector('.js-site-nav-toggle').addEventListener('click', function(event) {
		event.preventDefault();

		if (document.querySelector('body').classList.contains('offcanvas')) {
			document.querySelector('.js-site-nav-toggle').classList.remove('active');
			document.querySelector('body').classList.remove('offcanvas');
		}
		else {
			document.querySelector('.js-site-nav-toggle').classList.add('active');
			document.querySelector('body').classList.add('offcanvas');
		}
	});	
};
burgerMenu();

// Click outside of offcanvas
let handleOutsideClick = function() {

	document.addEventListener('click', function(event) {
		let container = document.querySelector('#site-aside, .js-site-nav-toggle');
		if (!((container === event.target) && (container.has(event.target).length === 0))) {
			if (document.querySelector('body').classList.contains('offcanvas')) {
				document.querySelector('body').classList.remove('offcanvas');
				document.querySelector('.js-site-nav-toggle').classList.remove('active');
			}
		}
	});

	window.addEventListener('scroll', function() {
		if (document.querySelector('body').classList.contains('offcanvas')) {
			document.querySelector('body').classList.remove('offcanvas');
			document.querySelector('.js-site-nav-toggle').classList.remove('active');
		}
	});
};
handleOutsideClick();

(function($) {

	"use strict";

	$(window).stellar ({
		horizontalScrolling: false,
		/*responsive: true,*/
		parallaxBackgrounds: true,
		parallaxElements: true,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	// Scrollax
	 $.Scrollax();

	// fade in/out animation
	/* var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},	k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint(); */

})(jQuery);

// load the sidebar
$(function() {
	$("#sidebar").load("js/fxdxdy1.html"); 
});
// load three popular articles
$(function() {
	$("#popart").load("js/fxdxdy3.html");
});
// load the footer
$(function() {
	$("#footer").load("js/fxdxdy2.html"); 
});

// search for an article
function search_article() { 
	let input = document.getElementById('searchbar').value.toLowerCase()
	let articles = document.getElementsByClassName('searchable');
	
	for (i = 0; i < articles.length; i++) { 
		if (!articles[i].innerHTML.toLowerCase().includes(input)) { 
			articles[i].style.display="none"; 
		} 
		else { 
			articles[i].style.display="inline-block";				 
		}
		if (input == "") {
			articles[i].style.display="inline-block";
		}
	}
} 
