import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { GOOGLE_API_KEY } from '../../library/constants';
import * as asyncApi from '../../api/Async.api';
import * as syncActions from '../../redux/actions/Sync.action';
import AutoSuggestion from './AutoSuggestion';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indexSearch: 'Denver, USA',
			placeData: [],
			selectedPlaceId: '' ,
			showAutoFill: true 
		}
		
		this.onSearchLocation = this.onSearchLocation.bind(this);
		this.handleOnBlurSearch = this.handleOnBlurSearch.bind(this);
		this.handleOnFocusSearch = this.handleOnFocusSearch.bind(this);
		this.handleListClick = this.handleListClick.bind(this);
	}

	onSearchLocation(value){
		this.setState({
			indexSearch: value
		});
		this.props.dispatch(syncActions.searchTermData(value));	
		this.fetchGooglePlaces(value);	
	}

	fetchGooglePlaces = _.debounce(async (value = "USA") => {
		if(value != ""){
		const placeData = await asyncApi.getGooglePlaceAutoFill({'language': 'en', 'input': value, 'key': GOOGLE_API_KEY});
		this.setState({ placeData: placeData.predictions });
	 } else {
		this.setState({ placeData: [] });
	 }		
	}, 300);

	handleOnBlurSearch = () => {
		this.setState({ showAutoFill: false });
	}

	handleOnFocusSearch = () => {
		this.setState({ showAutoFill: true });
	}

	handleListClick = (e, placeId, value) => {
		e.stopPropagation();
		this.setState({ showAutoFill: true });
		this.setState({ selectedPlaceId: placeId, indexSearch: value});
		this.props.dispatch(syncActions.setPlaceId(placeId));
		this.props.dispatch(syncActions.searchTermData(value));
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
									<div className="form-group autofill-wrapper">
										<input type="text" name="name" placeholder="Denver, USA" value={this.state.indexSearch} onBlur={() => this.handleOnBlurSearch()} onChange={(e) => this.onSearchLocation(e.target.value)} onFocus={() => this.handleOnFocusSearch()} className="form-control" />
										<ul className="home-autofill">
										{ 
											(this.state.showAutoFill) ? 
												this.state.placeData.map((v, k) => {
													return <AutoSuggestion key={k} data={v} handleListClick={this.handleListClick} />;
												})
											: ''
										}
										</ul>
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
