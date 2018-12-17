import React, { Component } from 'react';

class GroundPlan extends Component{
	constructor(props){
		super(props);
	}

	planImages(image, key){
		let classactive="";
		if(key == 0){classactive="carousel-item active";}else{classactive="carousel-item";};
		return(
			<div className={classactive} key={key}>
        <img src={image.url} alt="" />
        <div className="carousel-caption">
          
        </div>   
      </div>
		);
	}

	render(){
		const { propertyData } = this.props;
		if(propertyData.plan_images && propertyData.plan_images.length > 0){
			const planImages=[];
			propertyData.plan_images.map((image, key) => {
	      planImages.push(this.planImages(image, key));
	    });

			return(
				<section className="ground-plan small-light-gray-img py-6 lg-py-7">
		      <div className="container">
		        <div className="row">
		          <div className="col-sm-12">
		          	<div className="plan-inner">
		              <div id="demo" className="carousel slide" data-ride="carousel">
		                <div className="carousel-inner">
		                  {planImages}
		                </div>
		                <a className="carousel-control-prev" href="#demo" data-slide="prev">
		                  <span className="carousel-control-prev-icon"></span>
		                </a>
		                <a className="carousel-control-next" href="#demo" data-slide="next">
		                  <span className="carousel-control-next-icon"></span>
		                </a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
			);

		}else{
			return(
				<section className="ground-plan small-light-gray-img py-6 lg-py-7">
		      <div className="container">
		        <div className="row">
		          <div className="col-sm-12">
		          	<div className="plan-inner">
		              <span>No ground plans available for this property.</span>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
			);

		}
	}
}

export default GroundPlan;