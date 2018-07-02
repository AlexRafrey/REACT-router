import React, {Component} from 'react';
import {
	BrowserRouter ,
	Route,
	Link,
	Switch
  } from 'react-router-dom';
// import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component{
	constructor(props){
		super();
		this.state = {
			recipes: [],
		}
	
	}


	render(){	
		return(
			<BrowserRouter>
			<div>
			<Navigation></Navigation>
				<Switch>
					<Route path='/' component={Header} exact></Route>
					<Route path='/about' component={About}></Route>
					<Route path='/contact' component={Contact}></Route>
					<Route  component={Error}></Route>
				</Switch>
			</div>
			</BrowserRouter>
		);
	}
}

export default App;