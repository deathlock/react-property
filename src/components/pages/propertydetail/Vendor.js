import React, { Component } from 'react';

class Vendor extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { vendor } = this.props.propertyData;
		const profile_image = (vendor.profile == "") ? "images/profile_list.jpg" : vendor.profile;
		const cover_image = (vendor.cover_profile == "") ? "images/about.jpg" : vendor.cover_profile;

		var services = [];
    vendor.services.map((serviceName, key) => {
      const service =  <li key={key}>{serviceName.name}</li>;
      services.push(service);
    });

		return(
			<section className="keyblog-section pb-5 white-bg-img py-6">
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-sl-6 col-lg-6 ml-auto pr-4 my-6">
	            <div className="keyblog-right-min mb-3">
	              <div className="row d-flex flex-nowrap xs-d-block text-right xs-text-center col-xs-12">
	                <div className="w-100 pr-4 mt-5 xs-pr-0">
	                  <div className="user-profile-details">
	                    <div className="row align-items-center mb-3">
	                      <div className="col-lg-12 col-md-12 col-sm-12">
	                        <h3>{vendor.first_name} {vendor.last_name}</h3>
	                        <h4>{vendor.company_name}</h4>
	                      </div>
	                    </div>
	                  </div>            
	                </div>
	                <div className="user-profile-picture">
	                  <img src={profile_image} alt="" />
	                </div>
	              </div>
	            </div>
	            <div className="aboutme-tabs">
	              <div className="col-sm-12 px-0">
	                <ul className="nav nav-tabs bg-white" id="myTab" role="tablist">
	                  <li className="nav-item">
	                    <a className="nav-link active" id="AboutMe-tab" data-toggle="tab" href="#AboutMe" role="tab" aria-controls="AboutMe" aria-selected="true">About Me</a>
	                  </li>
	                  <li className="nav-item">
	                    <a className="nav-link" id="MyServices-tab" data-toggle="tab" href="#MyServices" role="tab" aria-controls="MyServices" aria-selected="false">My Services</a>
	                  </li>
	                  <li className="nav-item">
	                    <a className="nav-link" id="ChatMe-tab" data-toggle="tab" href="#ChatMe" role="tab" aria-controls="ChatMe" aria-selected="false">Chat with Me</a>
	                  </li>
	                </ul>
	                <div className="tab-content w-100" id="myTabContent">
	                  <div className="tab-pane fade show active" id="AboutMe" role="tabpanel" aria-labelledby="AboutMe-tab">
	                    <div className="mt-4 col-xs-12 xs-text-center pl-4">
	                      <ul className="country-flags">
	                         <li className="lang-active"><a href="JavaScript:;"><img src="images/flag01.png" alt="" /></a></li>
	                         <li><a href="JavaScript:;"><img src="images/flag02.png" alt="" /></a></li>
	                         <li><a href="JavaScript:;"><img src="images/flag03.png" alt="" /></a></li>
	                         <li><a href="JavaScript:;"><img src="images/flag04.png" alt="" /></a></li>
	                      </ul>
	                      <p className="sub-description mt-3">{vendor.profile_status}</p>
	                    </div>
	                  </div>
	                  <div className="tab-pane fade" id="MyServices" role="tabpanel" aria-labelledby="MyServices-tab">
	                    <div className="mt-4 pl-4">
	                      <ul className="services-list">
	                      	{services}
	                      </ul>
	                    </div>
	                  </div>
	                  <div className="tab-pane fade chat-wrap bg-white" id="ChatMe" role="tabpanel" aria-labelledby="ChatMe-tab">
	                    <div className="mt-4 pl-4 pr-4 pb-4">
	                      <div className="chat-wrap-left d-flex align-items-end">
	                      	<div className="chat-profile-pic">
	                          <img src="images/chat.jpg" alt="" />
	                        </div>
	                        <div>
	                          <p>
	                            <span className="chat-text bg-white">Lorem ipsum dolor sit<br />
	                            amet, consectetur</span>
	                          </p>
	                        </div>
	                      </div>
	                      <div className="chat-wrap-right d-flex">
	                      	<div>
	                          <p>
	                            <span className="chat-text-rght bg-blue">Lorem psudo</span>
	                          </p>
	                        </div>
	                      </div>
	                      <div className="chat-wrap-left d-flex align-items-end">  
	                        <div className="chat-profile-pic">
	                          <img src="images/chat.jpg" alt="" />
	                        </div>
	                        <div>
	                          <p>
	                            <span className="chat-text bg-white">Lorem psudo</span>
	                          </p>
	                          <p>
	                            <span className="chat-text bg-white">Lorem ipsum dolor sit<br />
	                            amet, consectetur</span>
	                          </p>
	                        </div>
	                      </div>
	                      <div className="chat-wrap-right d-flex">
	                        <div>
	                          <p>
	                            <span className="chat-text-rght bg-blue">Lorem psudo</span>
	                          </p>
	                        </div>
	                      </div>
	                      <div className="chat-wrap-left d-flex align-items-end">  
	                        <div className="chat-profile-pic">
	                          <img src="images/chat.jpg" alt="" />
	                        </div>
	                        <div>
	                          <p>
	                            <span className="chat-text bg-white bord-none">Typing...</span>
	                          </p>
	                        </div>
	                      </div>
	                      <div className="type-chat mt-4 position-relative">
	                        <input type="text" name="chat" value="Type your message...." className="form-control font-16 pr-5 bord-none" />
	                        <button className="chat-btn"><img src="images/chat_icon.png" alt="" /></button>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="col-xl-5 col-lg-5 pr-0 lg-pr-1p">
	            <img className="Verdor-right-img" src={cover_image} alt="" />
	          </div>
	        </div>
	      </div>
	    </section>
		);
	}
}

export default Vendor;