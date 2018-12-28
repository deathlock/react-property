import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import PropertyCard from './PropertyCard';
import NoMoreData from '../common/NoMoreData';
import * as asyncApi from "../../api/Async.api";
import * as syncActions from '../../redux/actions/Sync.action';
import {  toast } from 'react-toastify';

class AgentProfile extends Component{
	constructor(props){
    super(props);
    this.state = {
    	agentData:[],
    	agent_id:0,
    	PropertyListData:[],
      PropertyCount:"",
      CurrentOffset:0,
      Limit:3,
      hasMoreItems: true,
      isRunnning: false
    }

    this.loadProperties = this.loadProperties.bind(this);
  }

  componentDidMount(){
  	const agent_id = this.props.userReducer.agentId;
  	this.setState({
  		agent_id:agent_id
  	});
    asyncApi.getAgentProfile({'agent_id':agent_id})
    .then((r)=> { 
      r = r.data;
      if(r.code && r.code == 200){
        this.setState({
        	agentData:r.data
        });
        this.loadProperties();
      }else{
        toast.error('something went wrong.');
      }
    })
    .catch((e) => { toast.error('something went wrong.'); });
    
  }

  async loadProperties(){
  	const agent_id = this.state.agent_id;
    if(this.state.hasMoreItems && !this.state.isRunnning){
        this.props.dispatch(showLoading());
        this.setState({ isRunnning: true });
        const propertyList = await asyncApi.getPropertyList({start:this.state.CurrentOffset, limit: this.state.Limit, agent_id:agent_id})
        .then((r)=> { return r; })
        .catch((e) => { toast.error('something went wrong.'); });
        
        var offset = this.state.CurrentOffset + this.state.Limit;
        var hasMoreItemscheck= true;
        if(offset > propertyList.count){
          hasMoreItemscheck = false;
        }

        var records = [...this.state.PropertyListData, ...propertyList.data];

        this.setState ({
          PropertyListData: records,
          PropertyCount:propertyList.count,
          hasMoreItems: hasMoreItemscheck,
          CurrentOffset: offset,
          isRunnning: false
        });

        this.props.dispatch(hideLoading()); 
           
      }
  }

	render() {
		const agentDetail = this.state.agentData;
		const profile_image = (agentDetail.profile == "") ? "images/profile_list.jpg" : agentDetail.profile;
		const cover_image = (agentDetail.cover_profile == "") ? "images/about.jpg" : agentDetail.cover_profile;
		const PropertyListData = this.state.PropertyListData;
    var items = [];
    var displayProperty = "";
    PropertyListData.map((property, key) => {
      const card =  <PropertyCard key={key} data={property} {...this.props} />;
      items.push(card);
    });
    
    if(!this.state.hasMoreItems){
      displayProperty = <NoMoreData message="No More Properties..." />
    }
		return (
			<div className="agentprofile-wrap">
				<section className="hero-banner-section">
		      <div className="container-fluid">
		          <div className="row hero-banner">
		            <img className="hero-inner-img" src={cover_image} alt="" />
		          </div>
		      </div>
		    </section>
		    <section className="keyblog-section pb-5 white-bg-img">
		      <div className="keyblog-top-min">
		        <div className="container">
		          <div className="row d-flex flex-nowrap xs-d-block xs-text-center col-xs-12">
		            <div className="user-profile-picture">
		              <img src={profile_image} alt="" />
		            </div>
		            <div className="w-100 pl-4 mt-5 xs-pl-0">
		              <div className="user-profile-details">
		                <div className="row align-items-center mb-3">
		                  <div className="col-lg-6 col-md-12 col-sm-12">
		                    <h3>{agentDetail.first_name} {agentDetail.last_name}</h3>
		                    <h4>{agentDetail.company_name}</h4>
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
		            <p className="sub-description mt-3">{agentDetail.profile_status}</p>
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
		                  <InfiniteScroll
                    pageStart={this.state.CurrentOffset}
                    loadMore={this.loadProperties.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    //loader={loader}
                    threshold={600}
                    initialLoad={false}
                    >

                    <div className="row contain-plr">
                        {items}
                    </div>
                  </InfiniteScroll>
             			{displayProperty}
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

const select = state => state;
export default connect(select)(AgentProfile);