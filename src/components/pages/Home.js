import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

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
		const tempData = {
			"predictions" : [
				 {
						"description" : "1600 Amphitheatre Parkway, Mountain View, CA, USA",
						"id" : "c1463fea33d18804c1145462661279db43d03276",
						"matched_substrings" : [
							 {
									"length" : 4,
									"offset" : 0
							 },
							 {
									"length" : 12,
									"offset" : 5
							 }
						],
						"place_id" : "ChIJI6rdYPi5j4ARPRVRyDdc598",
						"reference" : "ChIJI6rdYPi5j4ARPRVRyDdc598",
						"structured_formatting" : {
							 "main_text" : "1600 Amphitheatre Parkway",
							 "main_text_matched_substrings" : [
									{
										 "length" : 4,
										 "offset" : 0
									},
									{
										 "length" : 12,
										 "offset" : 5
									}
							 ],
							 "secondary_text" : "Mountain View, CA, USA"
						},
						"terms" : [
							 {
									"offset" : 0,
									"value" : "1600"
							 },
							 {
									"offset" : 5,
									"value" : "Amphitheatre Parkway"
							 },
							 {
									"offset" : 27,
									"value" : "Mountain View"
							 },
							 {
									"offset" : 42,
									"value" : "CA"
							 },
							 {
									"offset" : 46,
									"value" : "USA"
							 }
						],
						"types" : [ "street_address", "geocode" ]
				 },
				 {
						"description" : "1600 Amphitheatre Drive, Wilmington, NC, USA",
						"id" : "6f435e2bd24c6e2baf8b0e51acc427dfa16aed64",
						"matched_substrings" : [
							 {
									"length" : 17,
									"offset" : 0
							 }
						],
						"place_id" : "EiwxNjAwIEFtcGhpdGhlYXRyZSBEcml2ZSwgV2lsbWluZ3RvbiwgTkMsIFVTQSIxEi8KFAoSCT3sDZg6HqqJEblusSJ1-36IEMAMKhQKEgk97A2YOh6qiRFJdILX-jbwwg",
						"reference" : "EiwxNjAwIEFtcGhpdGhlYXRyZSBEcml2ZSwgV2lsbWluZ3RvbiwgTkMsIFVTQSIxEi8KFAoSCT3sDZg6HqqJEblusSJ1-36IEMAMKhQKEgk97A2YOh6qiRFJdILX-jbwwg",
						"structured_formatting" : {
							 "main_text" : "1600 Amphitheatre Drive",
							 "main_text_matched_substrings" : [
									{
										 "length" : 17,
										 "offset" : 0
									}
							 ],
							 "secondary_text" : "Wilmington, NC, USA"
						},
						"terms" : [
							 {
									"offset" : 0,
									"value" : "1600 Amphitheatre Drive"
							 },
							 {
									"offset" : 25,
									"value" : "Wilmington"
							 },
							 {
									"offset" : 37,
									"value" : "NC"
							 },
							 {
									"offset" : 41,
									"value" : "USA"
							 }
						],
						"types" : [ "route", "geocode" ]
				 },
				 {
						"description" : "1600 Amphitheatre Road, Mount Lonarch VIC, Australia",
						"id" : "92dd83def89b61b5dced0a4f446493a41f7a1a9c",
						"matched_substrings" : [
							 {
									"length" : 17,
									"offset" : 0
							 }
						],
						"place_id" : "EjQxNjAwIEFtcGhpdGhlYXRyZSBSb2FkLCBNb3VudCBMb25hcmNoIFZJQywgQXVzdHJhbGlhIjESLwoUChIJJ6qkrQWg0WoRnNnQLfh0N3sQwAwqFAoSCRGN3tx4CtFqEbpEiOCWMujk",
						"reference" : "EjQxNjAwIEFtcGhpdGhlYXRyZSBSb2FkLCBNb3VudCBMb25hcmNoIFZJQywgQXVzdHJhbGlhIjESLwoUChIJJ6qkrQWg0WoRnNnQLfh0N3sQwAwqFAoSCRGN3tx4CtFqEbpEiOCWMujk",
						"structured_formatting" : {
							 "main_text" : "1600 Amphitheatre Road",
							 "main_text_matched_substrings" : [
									{
										 "length" : 17,
										 "offset" : 0
									}
							 ],
							 "secondary_text" : "Mount Lonarch VIC, Australia"
						},
						"terms" : [
							 {
									"offset" : 0,
									"value" : "1600 Amphitheatre Road"
							 },
							 {
									"offset" : 24,
									"value" : "Mount Lonarch"
							 },
							 {
									"offset" : 38,
									"value" : "VIC"
							 },
							 {
									"offset" : 43,
									"value" : "Australia"
							 }
						],
						"types" : [ "route", "geocode" ]
				 },
				 {
						"description" : "1600 Amphitheatre Circuit, Baulkham Hills NSW, Australia",
						"id" : "db0ba8a60648ace71980e64b1b652f41ba31e4e0",
						"matched_substrings" : [
							 {
									"length" : 12,
									"offset" : 5
							 }
						],
						"place_id" : "EjgxNjAwIEFtcGhpdGhlYXRyZSBDaXJjdWl0LCBCYXVsa2hhbSBIaWxscyBOU1csIEF1c3RyYWxpYQ",
						"reference" : "EjgxNjAwIEFtcGhpdGhlYXRyZSBDaXJjdWl0LCBCYXVsa2hhbSBIaWxscyBOU1csIEF1c3RyYWxpYQ",
						"structured_formatting" : {
							 "main_text" : "1600 Amphitheatre Circuit",
							 "main_text_matched_substrings" : [
									{
										 "length" : 12,
										 "offset" : 5
									}
							 ],
							 "secondary_text" : "Baulkham Hills NSW, Australia"
						},
						"terms" : [
							 {
									"offset" : 0,
									"value" : "1600"
							 },
							 {
									"offset" : 5,
									"value" : "Amphitheatre Circuit"
							 },
							 {
									"offset" : 27,
									"value" : "Baulkham Hills"
							 },
							 {
									"offset" : 42,
									"value" : "NSW"
							 },
							 {
									"offset" : 47,
									"value" : "Australia"
							 }
						],
						"types" : [ "route", "geocode" ]
				 },
				 {
						"description" : "1600 Amphitheatre - Sharjah - United Arab Emirates",
						"id" : "6c758d346ed816d3ee74d96571ec7b8898d6bfad",
						"matched_substrings" : [
							 {
									"length" : 12,
									"offset" : 5
							 }
						],
						"place_id" : "EjIxNjAwIEFtcGhpdGhlYXRyZSAtIFNoYXJqYWggLSBVbml0ZWQgQXJhYiBFbWlyYXRlcw",
						"reference" : "EjIxNjAwIEFtcGhpdGhlYXRyZSAtIFNoYXJqYWggLSBVbml0ZWQgQXJhYiBFbWlyYXRlcw",
						"structured_formatting" : {
							 "main_text" : "1600 Amphitheatre",
							 "main_text_matched_substrings" : [
									{
										 "length" : 12,
										 "offset" : 5
									}
							 ],
							 "secondary_text" : "Sharjah - United Arab Emirates"
						},
						"terms" : [
							 {
									"offset" : 0,
									"value" : "1600"
							 },
							 {
									"offset" : 5,
									"value" : "Amphitheatre"
							 },
							 {
									"offset" : 20,
									"value" : "Sharjah"
							 },
							 {
									"offset" : 30,
									"value" : "United Arab Emirates"
							 }
						],
						"types" : [ "route", "geocode" ]
				 }
			],
			"status" : "OK"
	 }
	 if(value){
		this.setState({ placeData: tempData.predictions });
	 } else {
		this.setState({ placeData: [] });
	 }		
	}

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
