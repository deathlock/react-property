import React, { Component } from 'react';

class GroundPlan extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="ground-plan small-light-gray-img py-6 lg-py-7">
	      <div className="container">
	        <div className="row">
	          <div className="col-sm-12">
	          	<div className="plan-inner">
	              <div id="demo" className="carousel slide" data-ride="carousel">
	                <div className="carousel-inner">
	                  <div className="carousel-item active">
	                    <img src="images/ground_plan01.png" alt="" />
	                    <div className="carousel-caption">
	                      <h4>Level 1</h4>
	                    </div>   
	                  </div>
	                  <div className="carousel-item">
	                    <img src="images/ground_plan02.png" alt="" />
	                    <div className="carousel-caption">
	                      <h4>Level 2</h4>
	                    </div>   
	                  </div>
	                  <div className="carousel-item">
	                    <img src="images/ground_plan03.png" alt="" />
	                    <div className="carousel-caption">
	                      <h4>Level 3</h4>
	                    </div>   
	                  </div>
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
	}
}

export default GroundPlan;