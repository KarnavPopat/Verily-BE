
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

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function() {
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// loader
	/*var loader = function() {
		setTimeout(function() { 
			$('#ftco-loader').removeClass('show');
		}, 1);
	};
	loader();*//*

	let loader = function() {
		setTimeout(function() {
			document.getElementById('ftco-loader').removeClass('show');
		});
	};
	loader();*/

	const loader = function() {
		document.querySelector('#ftco-loader').classList.remove('show');
	};
	setTimeout(loader, 200);

	// Scrollax
	 $.Scrollax();

	 // Open the menu on click
	 var burgerMenu = function() {

		$('.js-site-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvas
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
		var container = $("#site-aside, .js-site-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {

			if ( $('body').hasClass('offcanvas') ) {

				$('body').removeClass('offcanvas');
				$('.js-site-nav-toggle').removeClass('active');
			
			}
			
		}
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

				$('body').removeClass('offcanvas');
				$('.js-site-nav-toggle').removeClass('active');
			
			}
		});

	};
	mobileMenuOutsideClick();

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

function checkCookies() {
return navigator.cookieEnabled;
};

function cookieCheck() {
if (checkCookies()) {
	document.cookie = "user=John;";
	console.log(document.cookie);
}
};
cookieCheck();


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
