import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends Component{
	state = {
		array: '',
	};

	render() {
		return(
			<div>
				<h1>Navigation</h1>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>about</NavLink>
				<NavLink to='/contact'>contact</NavLink>
			</div>
		);
	}
}



export default Navigation;