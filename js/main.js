
"use strict";

// Handle click on the sidebar toggle
// ______________________________
let burgerMenu = function() {
	document.querySelector('.site-nav-toggle').addEventListener('click', function(event) {
		event.preventDefault();

		if (document.querySelector('body').classList.contains('offcanvas')) {
			document.querySelector('.site-nav-toggle').classList.remove('active');
			document.querySelector('body').classList.remove('offcanvas');
		}
		else {
			document.querySelector('.site-nav-toggle').classList.add('active');
			document.querySelector('body').classList.add('offcanvas');
		}
	});	
};
burgerMenu();

// ______________________________

// handle click outside loaded sidebar
// ______________________________
let targetCheck = true;
let test = function() {

	document.addEventListener('click', function(event) {
		let container = document.querySelectorAll(".site-nav-toggle, #site-aside");
		targetCheck = true;
		containsElement(container[1]);
		if((container[0] !== (event.target) && container[1] !== (event.target)) && (targetCheck)) {
			if(document.querySelector('body').classList.contains('offcanvas')) {
				document.querySelector('body').classList.remove('offcanvas')
				document.querySelector('.site-nav-toggle').classList.remove('active')
			}
		}
	});

	document.addEventListener('scroll', function() {
		if(document.querySelector('body').classList.contains('offcanvas')) {
			document.querySelector('body').classList.remove('offcanvas')
			document.querySelector('.site-nav-toggle').classList.remove('active')
		}
	});
};
test();

let containsElement = function(element) {
	if(element === event.target) {
		targetCheck = false;
	}
	else {
		if(element.children.length !== 0) {
			for(let i = 0; i < element.children.length; i++) {
				containsElement(element.children[i]);
			}
		}
	}
}
// ______________________________


// Remove the loading page on page load
// ______________________________
const loader = function() {
	setTimeout(function() {
		if(document.querySelectorAll('#ftco-loader').length > 0) {
			document.getElementById('ftco-loader').classList.remove('show');
		}
	}, 1);
};
loader();
// ______________________________


// search for an article
// ______________________________
function search_article() { 
	let input = document.getElementById('searchbar').value.toLowerCase();
	let articles = document.getElementsByClassName('searchable');
	
	for (let i = 0; i < articles.length; i++) {
		if (!articles[i].innerHTML.toLowerCase().includes(input)) { 
			articles[i].style.display="none"; 
		} 
		else { 
			articles[i].style.display="inline-block";				 
		}
		if (input === "") {
			articles[i].style.display="inline-block";
		}
	}
}
// ______________________________
