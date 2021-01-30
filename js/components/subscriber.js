const SubscribeSection = () => {
	return e('section', {className: "section"},
		e('div', {className: "row no-gutters align-items-center"},
			e('div', {className: "sidebar-box"},
				e('div', {className: "subs-wrap px-4 py-5"},
					e('div', {className: "overlay"}),
					e('h3', {className: "mb-3 sidebar-heading"}, 'Newsletter'),
					e('p', {className: "mb-3 sidebar-text"}, 'Subscribe to get regular updates on our publications, activities and more!'),

					e('form', {name: "subscriber", action: "#", autocomplete: "off", autcocorrect: "off", autocapitalize: "off", className: "subscriber-form"},
						e('div', {className: "form-group"}, 
							e('input', {type: "text", name: "target-mail", className: "form-control", placeholder: "Email Address"}),
							e('input', {type: "submit", value: "Subscribe", className: "mt-2 btn btn-white submit"}
						)))))))
};

ReactDOM.render(SubscribeSection(), document.querySelector('.subscribe-target'));
