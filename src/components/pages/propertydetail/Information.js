import React, { Component } from 'react';

class Information extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { propertyData } = this.props;
		return(
			<section className="map-page hero-banner-section small-light-gray-img py-6">
	      <div className="container">
	        <div className="row mb-3">
	          <div className="col-lg-7 col-md-12 col-sm-12">
	            <div className="row align-items-center ">
	              <div className="col-lg-6 col-md-6 col-sm-12 sm-text-center">
	                <h3 className="mb-2">{propertyData.name}</h3>
	                <h4 className="text-light-gray"><i className="fa fa-map-marker text-light-yello mr-2"></i> Phoenix, AZ 85015 USA</h4>              </div>
	              <div className="col-lg-6 col-md-6 col-sm-12 text-right sm-text-center md-mt-3">
	                <h3 className="text-dark-blue">${propertyData.price} <button type="button" className="btn search-btn px-4 py-2 xs-d-block xs-mx-auto xs-my-3 ml-3">{propertyData.type}</button></h3>
	              </div>
	            </div>
	          </div>

	          <div className="col-lg-7 col-md-12 col-sm-12 mt-4">
	            <div className="bg-white border-radius-4 facility-sections">
	              <div className="row px-4 py-4">
	                <div className="col-md-3 col-sm-6 facility sm-mb-3">
	                  <img src="images/propertyicon_01.png" alt="" />
	                  <span>{propertyData.bathrooms}</span>
	                  <h6 className="mt-2 text-light-gray font-weight-smiler">Bathrooms</h6>
	                </div>
	                <div className="col-md-3 col-sm-6 facility sm-mb-3">
	                  <img src="images/propertyicon_02.png" alt="" />
	                  <span>{propertyData.bedrooms}</span>
	                  <h6 className="mt-2 text-light-gray font-weight-smiler">Bedrooms</h6>
	                </div>
	                <div className="col-md-3 col-sm-6 facility sm-mb-3">
	                  <img src="images/propertyicon_03.png" alt="" />
	                  <span>{propertyData.floors}</span>
	                  <h6 className="mt-2 text-light-gray font-weight-smiler">Floors</h6>
	                </div>
	                <div className="col-md-3 col-sm-6 facility">
	                  <img src="images/propertyicon_04.png" alt="" />
	                  <span>{propertyData.year_build}</span>
	                  <h6 className="mt-2 text-light-gray font-weight-smiler">Year</h6>
	                </div>
	              </div>
	              <hr className="border-color-gray" />
	              <div className="row px-4 pb-4 pt-2">
	                <div className="col-sm-6 facility xs-mb-3">
	                  <h6 className="text-light-gray font-weight-smiler">Total Sq. Area</h6>
	                </div>
	                <div className="col-sm-6 facility text-right xs-text-left">
	                  <span className="font-weight-bold font-20">{propertyData.build_area}</span>
	                  <h6 className="text-light-gray font-weight-smiler d-inline-block vertical-top">&nbsp;Sq. Area</h6>
	                </div>
	              </div>
	            </div>

	            <div className="dis mt-4">
	              <h6 className="text-black pb-2">Discription</h6>
	              <p className="sub-description mb-3">{propertyData.description}</p>
	              <p className="sub-description">{propertyData.facility}</p>
	            </div>
	          </div>

	          <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
	            <div className="bg-dark-gray px-4 py-4 border-radius-4 information-list xs-px-2 xs-py-2">
	              <table className="table mb-0 ">
	                <tbody>
	                  <tr>
	                    <td>Status</td>
	                    <td>Free</td>
	                  </tr>
	                  <tr>
	                    <td>Space Detail</td>
	                    <td>2.000+500 Cellar</td>
	                  </tr>
	                  <tr>
	                    <td>Environment</td>
	                    <td>10.000 Garden</td>
	                  </tr>
	                  <tr>
	                    <td>Build</td>
	                    <td>{propertyData.year_build}</td>
	                  </tr>
	                  <tr>
	                    <td>Location</td>
	                    <td>Location</td>
	                  </tr>
	                  <tr>
	                    <td>Heating</td>
	                    <td>Oil</td>
	                  </tr>
	                  <tr>
	                    <td>Kitchen</td>
	                    <td>Lexus</td>
	                  </tr>
	                  <tr>
	                    <td>Renovation</td>
	                    <td>{propertyData.renovation_required == "Yes" ? "Required" : "Not Required"}</td>
	                  </tr>
	                </tbody>
	              </table>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
		);
	}

}

export default Information;