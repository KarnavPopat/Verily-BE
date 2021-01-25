const SiteFooter = () => {
	return React.createElement('footer', {className: "site-footer"},
		React.createElement('div', {className: "container"},
			React.createElement('div', {className: "row"},
				React.createElement('div', {className: "col-md-6"},
					React.createElement('h3', {className: "footer-heading mb-2"}, 'About Us'),
					React.createElement('p', null, 'A little something for everyone. We\'re an online newsletter' +
						' trying to make a difference and bring about recognition to different worldly issues.')),
				React.createElement('div', {className: 'col-md-6 text-center'},
					React.createElement('p', null,
						React.createElement('a', {href: 'mailto: karnavpopat@gmail.com', target: '_blank', className: 'pr-10'},
							React.createElement('span', {className: 'icon-envelope icon-size'})),
						React.createElement('a', {href: 'https://instagram.com/karnavpopat', target: '_blank', className: 'pr-10'},
							React.createElement('span', {className: 'icon-instagram icon-size'}))),
					React.createElement('p', null, 'Website by ',
						React.createElement('span', {className: 'designer-link'},
							React.createElement('a', {href: 'https://karnavpopat.netlify.app', target: '_blank'}, 'Karnav Popat')),
						React.createElement('br', null),
						'Copyright &copy; 2021 | Verity Today')))))
}

ReactDOM.render(SiteFooter(), document.querySelector('#footer-target'));
