const SiteFooter = () => {
	return e('footer', {className: "site-footer"},
		e('div', {className: "container"},
			e('div', {className: "row"},
				e('div', {className: "col-md-6"},
					e('h3', {className: "footer-heading mb-2"}, 'About Us'),
					e('p', null, 'A little something for everyone. We\'re an online newsletter' +
						' trying to make a difference and bring about recognition to different worldly issues.')),
				e('div', {className: 'col-md-6 text-center'},
					e('ul', {className: 'ik-social-icon-tags mt-3'},
						e('li', {className: ''},
							e('a', {href: 'mailto: karnavpopat@gmail.com'},
								e('span', {className: 'ik-mail'}))),
						e('li', {className: ''},
							e('a', {href: 'https://instagram.com/karnavpopat/'},
								e('span', {className: 'ik-instagram'})))),
					e('p', null, 'Website by ',
						e('span', {className: 'designer-link'},
							e('a', {href: 'https://karnavpopat.netlify.app', target: '_blank'}, 'Karnav Popat')),
						e('br', null),
						'Copyright © 2021 | Verity Today')))))
}

ReactDOM.render(SiteFooter(), document.querySelector('#footer-target'));
