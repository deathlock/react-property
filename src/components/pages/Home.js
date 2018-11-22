import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indexSearch: 'Denver, USA'
		}
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
				<section className="contain-sec">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<div className="middle-wrap">
									<h1>Please Fill in the Location</h1>
									<div className="form-group">
										<input type="text" name="name" value={this.state.indexSearch} onChange={(e) => this.setState({ indexSearch: e.target.value })} className="form-control" />
									</div>
									<div className="box-wrap">
										<div className="box-column">
											<img src="images/icon01.png" alt="" />
											<p>I Search for key</p>
											<Link to={{ pathname: '/property-list' }} className="search-btn">Search</Link>
										</div>
										<div className="box-column">
											<img src="images/icon02.png" alt="" />
											<p>I need an agent to find for me</p>
											<Link to={{ pathname: '/property-list' }} className="search-btn">Search</Link>
										</div>
									</div>
									<div className="join-agent-box">
										<div className="agent-inner">
											<h2>Something Like this</h2>
											<p className="find-key">Find key is The Global, Fast and better way to move on.</p>
											<div className="join-area">
												<div className="join-area-box">
													<p>I have property and need an agent to sell or rent out</p>
													<a href="#" className="search-btn">Search</a>
												</div>
												<a href="#" className="join-circle">Join Us As Agent</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const select = state => state;
export default connect(select)(App);
