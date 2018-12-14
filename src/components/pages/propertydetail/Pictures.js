import React, { Component } from 'react';

class Pictures extends Component{
	constructor(props){
		super(props);
	}

	images(image, key){
		let classactive="";
		if(key == 0){classactive="carousel-item active";}else{classactive="carousel-item";};
		return(
			<div className={classactive} key={key}>
        <img className="pictures-view" src={image.url} alt="" />
        <div className="carousel-caption">
          
        </div>   
      </div>
		);
	}

	render(){
		const { propertyData } = this.props;
		if(propertyData.images && propertyData.images.length > 0){
			const images=[];
			propertyData.images.map((image, key) => {
	      images.push(this.images(image, key));
	    });
			return(
				<section className="hero-banner-section">
		      <div className="container-fluid">
		          <div className="row hero-banner">
		          	<div id="demo1" className="carousel slide" data-ride="carousel">
	                <div className="carousel-inner">
	                  {images}
	                </div>
	                <a className="carousel-control-prev" href="#demo1" data-slide="prev">
	                  <span className="carousel-control-prev-icon"></span>
	                </a>
	                <a className="carousel-control-next" href="#demo1" data-slide="next">
	                  <span className="carousel-control-next-icon"></span>
	                </a>
	              </div>
		            <div className="over-high">
		              <div className="container">
		                <button type="button" className="btn search-btn btn-white text-black">Video Tour</button>
		              </div>
		            </div>
		          </div>
		      </div>
		    </section>
			);
		}else{
			return(
				<section className="hero-banner-section">
		      <div className="container-fluid">
		          <div className="row hero-banner">
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
}

export default Pictures;