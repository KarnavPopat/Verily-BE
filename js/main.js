
"use strict";

// handle click on the sidebar toggle
// ______________________________
let burger_menu = function() {
	document.querySelector('.site-nav-toggle').addEventListener('click', function(event) {
		event.preventDefault();

		if (document.querySelector('body').classList.contains('offcanvas')) {
			this.classList.remove('active');
			document.querySelector('body').classList.remove('offcanvas');
		}
		else {
			this.classList.add('active');
			document.querySelector('body').classList.add('offcanvas');
		}
	});	
};
burger_menu();

// ______________________________

// handle click outside loaded sidebar
// ______________________________
let targetCheck = true;

let contains_element = function(element, event) {
	if(element === event.target) {
		targetCheck = false;
	}
	else {
		if(element.children.length !== 0) {
			for(let i = 0; i < element.children.length; i++) {
				contains_element(element.children[i], event);
			}
		}
	}
}

let handle_sidebar = function() {

	document.addEventListener('click', function(event) {
		let container = document.querySelectorAll(".site-nav-toggle, #site-aside");
		targetCheck = true;
		contains_element(container[1], event);
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
handle_sidebar();
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

// lazy load images
// ______________________________
let handle_lazy_load = function() {
	document.addEventListener("DOMContentLoaded", function() {
		let lazyloadImages;		

		if ("IntersectionObserver" in window) {
			lazyloadImages = document.querySelectorAll(".lazy");
			var imageObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						let image = entry.target;
						image.classList.remove("lazy");
						imageObserver.unobserve(image);
						console.log('2');
					}
				});
			});

			lazyloadImages.forEach(function(image) {
				imageObserver.observe(image);
			});
		}

		else {	
			let lazyloadThrottleTimeout;
			lazyloadImages = document.querySelectorAll(".lazy");
			
			function lazyload() {
				if(lazyloadThrottleTimeout) {
					clearTimeout(lazyloadThrottleTimeout);
				}		

				lazyloadThrottleTimeout = setTimeout(function() {
					let scrollTop = window.pageYOffset;

					lazyloadImages.forEach(function(img) {
						if(img.offsetTop < (window.innerHeight + scrollTop)) {
							img.src = img.dataset.src;
							img.classList.remove('lazy');
						}
					});

					if(lazyloadImages.length == 0) { 
						document.removeEventListener("scroll", lazyload);
						window.removeEventListener("resize", lazyload);
						window.removeEventListener("orientationChange", lazyload);
						console.log('1');
					}
				}, 20);
			}

			document.addEventListener("scroll", lazyload);
			window.addEventListener("resize", lazyload);
			window.addEventListener("orientationChange", lazyload);
		}
	});
};
handle_lazy_load();
// ______________________________

// search for an article
// ______________________________
let search_article = function() { 
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

let set_like_status = function() {

	if (!localStorage.getItem('liked')) {
		localStorage.setItem('liked', '0');
	}
	if (localStorage.getItem('liked') === '0') {
		localStorage.setItem('liked', '1');
		add_like_count();
		console.log('liked, ', localStorage.getItem('liked'));
	}
	else {
		localStorage.setItem('liked', '0');
		minus_like_count();
		console.log('unliked, ', localStorage.getItem('liked'));
	}
}

let set_like_button_style = function() {
	if (localStorage.getItem('liked') === '1') {
		document.querySelector('#like_button').classList.add('like_toggled');
	}

	if (localStorage.getItem('liked') === '0') {
		document.querySelector('#like_button').classList.remove('like_toggled');
	}
}
set_like_button_style();

let add_like_count = function() {
	
	// increment the number of likes by one
	fetch('js/increment_like_api.php', {
		method: 'POST',
		body: localStorage.getItem('liked')
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch((error) => {
		;
	});
}

let minus_like_count = function() {
	
	// decrement the number of likes by one
	fetch('js/decrement_like_api.php', {
		method: 'POST',
		body: localStorage.getItem('liked')
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch((error) => {
		;
	});
}

let inject_like_count = function(count) {
	document.querySelector('#like_count').innerHTML = count;
}
let get_like_count = function() {

	// fetch the current number of likes
	fetch('js/get_like_api.php')
	.then(response => response.json())
	.then(data => inject_like_count(data));
}
get_like_count();

let toggle_like = function() {

	set_like_status();

	set_like_button_style();

	setInterval(get_like_count, 500);
}
