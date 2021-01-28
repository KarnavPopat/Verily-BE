const SiteAside = () => {
	return React.createElement('aside', {id: 'site-aside', role: 'complementary', className: "js-fullheight"},
		React.createElement('a', {href: '/index'},
			React.createElement('img', {src: 'images/veritylogo.jpg', alt: 'Verily', className: "mb-2", id: 'site-logo'})),
				React.createElement('nav', {id: 'site-main-menu', role: 'navigation'},
					React.createElement('ul', null,
						React.createElement('li', null,
							React.createElement('a', {href: '/index'}, 'Home')),
						React.createElement('li', null,
							React.createElement('a', {href: '/about'}, 'About')),
						React.createElement('li', null,
							React.createElement('a', {href: '/gateway'}, 'Categories')),
						React.createElement('li', null,
							React.createElement('a', {href: '/team'}, 'Our Team')))),
				React.createElement('div', {className: 'side-footer'},
					React.createElement('form', {name: 'subscriber', action: '#', 'data-netlify': 'true', className: 'subscriber-form mb-4'},
						React.createElement('div', {className: 'form-group'},
							React.createElement('input', {type: 'text', name: 'target-mail', className: 'form-control', placeholder: 'Email Address'}),
							React.createElement('input', {type: 'submit', value: 'Subscribe', className: 'mt-2 btn' +
									' btn-white submit'}))),
				React.createElement('div', {className: 'd-flex justify-content-center'},
					React.createElement('ul', {className: 'd-flex align-items-center'},
						React.createElement('li', {className: 'd-flex align-items-center justify-content-center'},
							React.createElement('a', {href: 'mailto: karnavpopat@gmail.com'},
								React.createElement('i', {className: 'ik-mail'}))),
						React.createElement('li', {className: 'd-flex align-items-center justify-content-center'},
							React.createElement('a', {href: 'https://instagram.com/karnavpopat/'},
								React.createElement('i', {className: 'ik-instagram'})))))))
}

ReactDOM.render(SiteAside(), document.querySelector('#site-aside-target'));
