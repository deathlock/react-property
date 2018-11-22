import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
				<div className="App">
					hi
				</div>
			);
	}
}

const select = state => state;
export default connect(select)(App);
