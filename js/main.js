
"use strict";

// Remove the loading page
// ______________________________
const loader = function() {
	setTimeout(function() {
		document.querySelector('#ftco-loader').classList.remove('show');
	});
};
loader();
// ______________________________


// Open the menu on click
// ______________________________
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
// ______________________________


// load the sidebar
// ______________________________
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
// ______________________________


// search for an article
// ______________________________
function search_article() { 
	let input = document.getElementById('searchbar').value.toLowerCase();
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
// ______________________________

(function($) {

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

})(jQuery);
