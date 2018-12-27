import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import * as asyncApi from '../../api/Async.api';
import * as syncActions from '../../redux/actions/Sync.action';

import Pictures from './propertydetail/Pictures';
import Information from './propertydetail/Information';
import Map from './propertydetail/Map';
import GroundPlan from './propertydetail/GroundPlan';
import Vendor from './propertydetail/Vendor';
import { toast } from 'react-toastify';

class PropertyDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			currenttab:'Pictures',
      propertyData:[]
		}

		this.back = this.back.bind(this);
		this.changeTab = this.changeTab.bind(this);
	}

	back(){
		this.props.history.goBack();
	}

	changeTab(tabName){
		this.setState({
			currenttab: tabName
		});
	}

	async componentDidMount(){
		const propertySlug = this.props.match.params.property;
    const data = new FormData();
    data.set('slug',propertySlug);

    const propertyDetail = await asyncApi.getPropertyDetail(data)
        .then((r)=> { return r.data; })
        .catch((e) => { toast.error('something went wrong.'); });

    if(propertyDetail.code == 200){
      this.setState({
        propertyData: propertyDetail.data[0]
      });
    }else{
      toast.error('something went wrong.');
    }
	}

	render(){
		const property = this.props;
		const { userReducer } = this.props;
    const isUserLoggedIn = userReducer.isLoggedin;
		return(
			<div className="propertydetail-wrap">
				<Helmet>
          <meta charSet="utf-8" />
          <title>KeyHeroes - Property Detail</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
        </Helmet>
				<section className="top-head-area inner-navbar">
		      <div className="container-fluid">
		        <div className="w-100 d-flex">
		          <div className="mr-auto">
		            <a className="back-nav" href="JavaScript:;" onClick={this.back}>
		              <i className="fa fa-angle-left fa-2x"></i> <span>Back</span>
		            </a>
		          </div>  
		          <nav className="navbar navbar-expand-md navbar-dark mx-auto px-0 py-0">
		            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		              <span className="navbar-toggler-icon"></span>
		            </button>
		            <div className="collapse navbar-collapse" id="collapsibleNavbar">
		              <ul className="nav w-100 px-0 py-0">
		                <li className={"nav-item " + (this.state.currenttab === 'Pictures' ? 'active' : '') }><a className="nav-link" href="javascript:;" onClick={() => this.changeTab('Pictures')} >Pictures</a></li>
		                <li className={"nav-item " + (this.state.currenttab === 'Information' ? 'active' : '') }><a className="nav-link" href="javascript:;"  onClick={() => this.changeTab('Information')} >Information</a></li>
		                <li className={"nav-item " + (this.state.currenttab === 'Map' ? 'active' : '') }><a className="nav-link" href="javascript:;" onClick={() => this.changeTab('Map')} >Map</a></li>
		                <li className={"nav-item " + (this.state.currenttab === 'GroundPlan' ? 'active' : '') }><a className="nav-link" href="javascript:;" onClick={() => this.changeTab('GroundPlan')} >Ground PLan</a></li>
		                <li className={"nav-item " + (this.state.currenttab === 'Vendor' ? 'active' : '') }><a className="nav-link" href="javascript:;" onClick={() => this.changeTab('Vendor')} >Verdor</a></li>
		              </ul>
		            </div>
		          </nav>
		          <div className="ml-auto add-pictures">
		            <a className="" href="JavaScript:;" data-toggle="modal" data-target="#property-detail">
		              <i className="fa fa-plus"></i>
		            </a>
		          </div>
		        </div>
		      </div>
		    </section>

		    <div className="property-detail-popup">
		      <div className="modal fade" id="property-detail" tabIndex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
		        <div className="modal-dialog ">
		          <div className="modal-content">
		            <ul className="property-tab">
		              <li><a href="javascript:;"> <img src="images/plus.svg" alt="" /> <span>Save</span> </a></li>
		              <li><a href="javascript:;" data-toggle="modal" data-target="#property-tour"> <img src="images/book_tour.png" alt="" /> <span>Book Tour</span> </a></li>
		              <li><a href="javascript:;"> <img src="images/key.svg" alt="" /> <span>Apply</span> </a></li>
		              <li><a href="javascript:;"> <img src="images/share.svg" alt="" /> <span>Share</span> </a></li>
		              <li><a href="javascript:;"> <img src="images/agent.png" alt="" /> <span>Visit Agent</span> </a></li>
		            </ul>
		            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		        </div>
		      </div>
		    </div>

		    <div className="property-detail-tour">
		      <div className="modal fade" id="property-tour" tabIndex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
		        <div className="modal-dialog">
		          <div className="modal-content">
		            <form className="tour-form pl-40 pr-40 pt-5 pb-5" action="#" method="post">
		              <h3 className="mb-30">Book Tour</h3>
		              { !isUserLoggedIn &&
										<div className="d-flex mb-30">
			                <a href="#" className="search-btn w-50 mr-2">Login</a>
			                <a href="#" className="search-btn btn-blue w-50">Register</a>
			              </div>
		              }
		              
		              <div className="form-group">
		                <label className="form-label mb-1">Select Date & Time</label>
		                <input type="text" name="name" value="Select Date & Time" className="form-control font-16 pl-4 pr-4" />
		              </div>
		              <div className="form-group">
		                <label className="form-label mb-1">Comments</label>
		                <textarea name="add" className="form-control font-16 rounded-25 pl-4 pr-4" rows="3">Enter your comments...</textarea>
		              </div>
		              <button className="search-btn w-100 mt-3">Book A Tour</button> 
		            </form>

		            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">&times;</span>
		            </button>
		          </div>
		        </div>
		      </div>
		    </div>
		    { this.state.currenttab == 'Pictures' && 
		    	<Pictures propertyData={this.state.propertyData} />
		    }
		    { this.state.currenttab == 'Information' && 
		    	<Information propertyData={this.state.propertyData} />
		    }
		    { this.state.currenttab == 'Map' && 
		    	<Map />
		    }
		    { this.state.currenttab == 'GroundPlan' && 
		    	<GroundPlan propertyData={this.state.propertyData} />
		    }
		    { this.state.currenttab == 'Vendor' && 
		    	<Vendor propertyData={this.state.propertyData} />
		    }
			</div>
		);
	}
}

const select = state => state;
export default connect(select)(PropertyDetail);