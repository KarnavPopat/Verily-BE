let e = React.createElement;

const SiteAside = () => {
	return e('aside', {id: 'site-aside', role: 'complementary', className: "js-fullheight"},
		e('a', {href: '/index'},
			e('img', {src: '', alt: 'Verily', className: "mb-2", id: 'site-logo'})),
				e('nav', {id: 'site-main-menu', role: 'navigation'},
					e('ul', null,
						e('li', null,
							e('a', {href: '/index'}, 'Home')),
						e('li', null,
							e('a', {href: '/about'}, 'About')),
						e('li', null,
							e('a', {href: '/gateway'}, 'Categories')),
						e('li', null,
							e('a', {href: '/team'}, 'Our Team')))),
				e('div', {className: 'side-footer'},
					e('form', {name: 'subscriber', action: '#', 'data-netlify': 'true', className: 'subscriber-form mb-4'},
						e('div', {className: 'form-group'},
							e('input', {type: 'text', name: 'target-mail', className: 'form-control', placeholder: 'Email Address'}),
							e('input', {type: 'submit', value: 'Subscribe', className: 'mt-2 btn' +
									' btn-white submit'}))),
				e('ul', {className: 'ik-social-icon-tags mt-3'},
					e('li', {className: ''},
						e('a', {href: 'mailto: karnavpopat@gmail.com'},
							e('span', {className: 'ik-mail'}))),
					e('li', {className: ''},
						e('a', {href: 'https://instagram.com/karnavpopat/'},
							e('span', {className: 'ik-instagram'}))))))
}

ReactDOM.render(SiteAside(), document.querySelector('#site-aside-target'));
