import React, { Component } from 'react';

class Pictures extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="hero-banner-section">
	      <div className="container-fluid">
	          <div className="row hero-banner">
	            <img className="pictures-view" src="images/property_detail.jpg" alt="" />
	            <div className="over-high">
	              <div className="container">
	                <button type="button" className="btn search-btn btn-white text-black">Video Tour</button>
	              </div>
	            </div>
	          </div>
	      </div>
	    </section>
		);
	}
}

export default Pictures;