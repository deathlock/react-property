import React, { Component } from 'react';

class Map extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="map-page hero-banner-section">
	      <div className="container-fluid">
	          <div className="row hero-banner">
	            <div className="maps-show">
	              <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868390.0673100427!2d132.0873383357521!3d-23.879915516400633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1542956261295" frameBorder="0" style={{order:0}} allowFullScreen></iframe>
	            </div>
	          </div>
	      </div>
	    </section>
		);
	}
}

export default Map;