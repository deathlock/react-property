import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
				<div className="App">
					<Helmet>
						<meta charSet="utf-8" />
						<title>KeyHeroes</title>
						<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
						<meta name="format-detection" content="telephone=no" />
						<meta name="keywords" content="" />
						<meta name="description" content="" />
            		</Helmet>
					hi
				</div>
			);
	}
}

const select = state => state;
export default connect(select)(App);
