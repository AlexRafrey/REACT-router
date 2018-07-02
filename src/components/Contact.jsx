import React, {Component} from 'react';

class Header extends Component{
	state = {
		array: '',
	};

	render() {
		const {count} = this.state;
		return(
			<div>
				<h2>Contact</h2>
			</div>
		);
	}
}



export default Header;