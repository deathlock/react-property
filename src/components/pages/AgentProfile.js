import React, { Component } from 'react';

class AgentProfile extends Component{
	constructor(props){
    super(props);
  }

	render() {
		return (
			<div className="agentprofile-wrap">
				<section className="hero-banner-section">
		      <div className="container-fluid">
		          <div className="row hero-banner">
		            <img className="hero-inner-img" src="images/profile_banner.jpg" alt="" />
		          </div>
		      </div>
		    </section>
		    <section className="keyblog-section pb-5 white-bg-img">
		      <div className="keyblog-top-min">
		        <div className="container">
		          <div className="row d-flex flex-nowrap xs-d-block xs-text-center col-xs-12">
		            <div className="user-profile-picture">
		              <img src="images/profile_list.jpg" alt="" />
		            </div>
		            <div className="w-100 pl-4 mt-5 xs-pl-0">
		              <div className="user-profile-details">
		                <div className="row align-items-center mb-3">
		                  <div className="col-lg-6 col-md-12 col-sm-12">
		                    <h3>Kelly Blogs</h3>
		                    <h4>Real-Esatate Agent</h4>
		                  </div>
		                  <div className="col-lg-6 col-md-12 col-sm-12 text-right md-text-left xs-text-center md-mt-3">
		                    <button type="button" className="btn search-btn px-4 py-2 xs-d-block xs-mx-auto xs-my-3">Chat/Request</button>
		                    <button type="button" className="btn search-btn btn-blue px-4 py-2 xs-d-block xs-mx-auto xs-my-3 ml-3">Service</button>
		                  </div>
		                </div>
		              </div>            
		            </div>
		          </div>

		          <div className="row mt-5 col-xs-12 xs-text-center">
		            <ul className="country-flags xs-mx-auto">
		              <li className="lang-active"><a href="JavaScript:;"><img src="images/flag01.png" alt="" /></a></li>
		              <li><a href="JavaScript:;"><img src="images/flag02.png" alt="" /></a></li>
		              <li><a href="JavaScript:;"><img src="images/flag03.png" alt="" /></a></li>
		              <li><a href="JavaScript:;"><img src="images/flag04.png" alt="" /></a></li>
		            </ul>
		            <p className="sub-description mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		          </div>
		        </div>
		      </div>

		      <div className="keyblog-tabs mt-3">
		        <div className="container">
		          <div className="row d-flex col-xs-12">
		            <ul className="nav nav-tabs" id="myTab" role="tablist">
		              <li className="nav-item">
		                <a className="nav-link active" id="List-tab" data-toggle="tab" href="#List" role="tab" aria-controls="List" aria-selected="true">List</a>
		              </li>
		              <li className="nav-item">
		                <a className="nav-link" id="Maps-tab" data-toggle="tab" href="#Maps" role="tab" aria-controls="Maps" aria-selected="false">Map</a>
		              </li>
		              <li className="nav-item ml-auto">
		                <a className="nav-link text-black font-weight-bold" href="JavaScript:;">View All</a>
		              </li>
		            </ul>

		            <div className="tab-content w-100" id="myTabContent">
		              <div className="tab-pane fade show active" id="List" role="tabpanel" aria-labelledby="List-tab">
		                <div className="row contain-plr mt-4">
		                  <div className="list-min-div">
		                    <div className="estate-works-item">
		                      <div className="item-overlay">
		                        <div className="book-category clip-path-right"><a href="javascript:;">Book Tour</a></div>
		                        <div className="category"><a href="javascript:;">Buy</a></div>
		                        <img className="category-img" src="images/portfolio_01.jpg" alt="" />
		                        <div className="overlay-content">
		                          <h6 className="overlay-title">$8,800,000</h6>
		                            <ul className="overlay-icons">
		                              <li className="mr-2">Standard</li>
		                              <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              <li><a className="disable" href="javascript:;"><i className="fa fa-star"></i></a></li>
		                            </ul>
		                        </div>
		                      </div>
		                      <div className="estate-works-description">
		                        <div className="estate-details">
		                          <h4 className="d-flex">
		                          <span>Mega Villa</span>
		                          <a href="#" className="btn small-btn">Video Visit</a>
		                          </h4>
		                          <strong>ABC Street 1,12586 Denver</strong>
		                          <p>Will equipped studio apartment From</p>
		                          <p>2.00 QM | 25 Bedrooms</p>
		                        </div>
		                        <ul className="estate-bottom-nav">
		                          <li><a href="javascript:;"><i className="fa fa-heart"></i> Save</a></li>
		                          <li><a href="javascript:;"><i className="fa fa-phone"></i> Contact</a></li>
		                          <li><a href="javascript:;"><i className="fa fa-handshake-o"></i> Apply</a></li>
		                          <li><a href="javascript:;"><i className="fa fa-share-alt"></i> Share</a></li>
		                        </ul>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="list-min-div">
		                    <div className="estate-works-item">
		                      <div className="item-overlay">
		                        <div className="book-category clip-path-right"><a href="javascript:;">Book Tour</a></div>
		                        <div className="category"><a href="javascript:;">Buy</a></div>
		                        <img className="category-img" src="images/portfolio_01.jpg" alt="" />
		                          <div className="overlay-content">
		                            <h6 className="overlay-title">$8,800,000</h6>
		                              <ul className="overlay-icons">
		                                  <li className="mr-2">Standard</li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a className="disable" href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              </ul>
		                          </div>
		                      </div>
		                      <div className="estate-works-description">
		                          <div className="estate-details">
		                            <h4 className="d-flex">
		                                <span>Mega Villa</span>
		                                <a href="#" className="btn small-btn">Video Visit</a>
		                              </h4>
		                              <strong>ABC Street 1,12586 Denver</strong>
		                              <p>Will equipped studio apartment From</p>
		                              <p>2.00 QM | 25 Bedrooms</p>
		                          </div>
		                          <ul className="estate-bottom-nav">
		                              <li><a href="javascript:;"><i className="fa fa-heart"></i> Save</a></li>
		                              <li><a href="javascript:;"><i className="fa fa-phone"></i> Contact</a></li>
		                              <li><a href="javascript:;"><i className="fa fa-handshake-o"></i> Apply</a></li>
		                              <li><a href="javascript:;"><i className="fa fa-share-alt"></i> Share</a></li>
		                          </ul>
		                      </div>
		                    </div>
		                  </div>
		                  <div className="list-min-div">
		                    <div className="estate-works-item">
		                      <div className="item-overlay">
		                        <div className="book-category clip-path-right"><a href="javascript:;">Book Tour</a></div>
		                        <div className="category rent-categ"><a href="javascript:;">Rent</a></div>
		                        <img className="category-img" src="images/portfolio_01.jpg" alt="" />
		                          <div className="overlay-content">
		                            <h6 className="overlay-title">$8,800,000</h6>
		                              <ul className="overlay-icons">
		                                  <li className="mr-2">Standard</li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a href="javascript:;"><i className="fa fa-star"></i></a></li>
		                                  <li><a className="disable" href="javascript:;"><i className="fa fa-star"></i></a></li>
		                              </ul>
		                          </div>
		                        </div>
		                        <div className="estate-works-description">
		                            <div className="estate-details">
		                              <h4 className="d-flex">
		                                  <span>Mega Villa</span>
		                                  <a href="#" className="btn small-btn">Video Visit</a>
		                                </h4>
		                                <strong>ABC Street 1,12586 Denver</strong>
		                                <p>Will equipped studio apartment From</p>
		                                <p>2.00 QM | 25 Bedrooms</p>
		                            </div>
		                            <ul className="estate-bottom-nav">
		                                <li><a href="javascript:;"><i className="fa fa-heart"></i> Save</a></li>
		                                <li><a href="javascript:;"><i className="fa fa-phone"></i> Contact</a></li>
		                                <li><a href="javascript:;"><i className="fa fa-handshake-o"></i> Apply</a></li>
		                                <li><a href="javascript:;"><i className="fa fa-share-alt"></i> Share</a></li>
		                            </ul>
		                        </div>
		                    </div>
		                  </div>
		                </div>
		              </div>

		              <div className="tab-pane fade" id="Maps" role="tabpanel" aria-labelledby="Maps-tab">
		                <div className="row contain-plr mt-4">
		                  <div className="maps-show">
		                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868390.0673100427!2d132.0873383357521!3d-23.879915516400633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1542956261295" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
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

export default AgentProfile;