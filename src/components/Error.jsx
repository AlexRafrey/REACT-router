import React, {Component} from 'react';


class Error extends Component{
	state = {
		array: '',
	};

	
	render() {
		const {count} = this.state;
		return(
			<div >
				<h2>Error</h2>
			</div>
		);
	}
}



export default Error;