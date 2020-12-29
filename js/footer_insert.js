'use strict';

const element = React.createElement;
		
class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
			return 'b';
		}

		return element(
			'footer',
			{ 
				onClick: () => this.setState({ liked: true })
			},
			'About Us'
		);
	}
}

const domContainer = document.querySelector('#react-footer');
ReactDOM.render(
	element(Footer), 
	domContainer
);
