import React, { Component } from 'react';

class Vendor extends Component{
	constructor(props){
		super(props);
	}

	render(){
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
	                        <h3>Kelly Blogs</h3>
	                        <h4>Real-Esatate Agent</h4>
	                      </div>
	                    </div>
	                  </div>            
	                </div>
	                <div className="user-profile-picture">
	                  <img src="images/profile_list.jpg" alt="" />
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
	                      <p className="sub-description mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
	                      <p className="sub-description mt-4">sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
	                    </div>
	                  </div>
	                  <div className="tab-pane fade" id="MyServices" role="tabpanel" aria-labelledby="MyServices-tab">
	                    <div className="mt-4 pl-4">
	                      <h6 className="text-black mb-30">My Services 
	                      	<a href="JavaScript:;" className="add-services"><i className="fa fa-plus"></i></a>
	                      </h6>  
	                      <ul className="services-list">
	                      	<li>Move Service</li>
	                        <li>Local Support</li>
	                        <li>Design & Furniture</li>
	                        <li>House Service Stuff</li>
	                        <li>Architecture</li>
	                        <li>Financing Support</li>
	                        <li>Family Services Around</li>
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
	            <img className="Verdor-right-img" src="images/about.jpg" alt="" />
	          </div>
	        </div>
	      </div>
	    </section>
		);
	}
}

export default Vendor;