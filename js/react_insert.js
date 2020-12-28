'use strict';

const json_data = {
	'department': 'Business & Economics',
	'department_slogan': 'Free Money!'
}

class PageTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {content: document.querySelectorAll('.target')[0].innerHTML};
	}


	render() {
		let targets = document.querySelectorAll('.target');
		for (let target of targets) {
			if (target.innerHTML = "{department}") {
				target.innerHTML = json_data.department;
			}
			else if (target.innerHTML = "{department-slogan}") {
				target.innerHTML = json_data.department_slogan;
			}
		}
	}
}

document.querySelectorAll('title')
	.forEach(domContainer => {
		ReactDOM.render(
			React.createElement(PageTitle),
			domContainer
		);
	});
