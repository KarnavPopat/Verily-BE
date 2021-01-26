const SubscribeSection = () => {
	return React.createElement('section', {className: "section"},
		React.createElement('div', {className: "row no-gutters align-items-center"},
			React.createElement('div', {className: "sidebar-box"},
				React.createElement('div', {className: "subs-wrap px-4 py-5"},
					React.createElement('div', {className: "overlay"}),
					React.createElement('h3', {className: "mb-3 sidebar-heading"}, 'Newsletter'),
					React.createElement('p', {className: "mb-3 sidebar-text"}, 'Subscribe to get regular updates on our publications, activities and more!'),

					React.createElement('form', {name: "subscriber", action: "#", className: "subscriber-form"},
						React.createElement('div', {className: "form-group"}, 
							React.createElement('input', {type: "text", name: "target-mail", className: "form-control", placeholder: "Email Address"}),
							React.createElement('input', {type: "submit", value: "Subscribe", className: "mt-2 btn btn-white submit"}
						)))))))
};

ReactDOM.render(SubscribeSection(), document.querySelector('.subscribe-target'));
