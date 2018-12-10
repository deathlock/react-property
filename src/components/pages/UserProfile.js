import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as asyncApi from "../../api/Async.api";
import * as syncActions from '../../redux/actions/Sync.action';
import {  toast } from 'react-toastify';

class UserProfile extends Component {
  constructor(props){
    super(props);
    const { userReducer } = this.props;
    const isUserLoggedIn = userReducer.isLoggedin;
    console.log(isUserLoggedIn);
    if(!isUserLoggedIn){
      this.props.history.push("/");
    }
  }

  componentDidMount(){
    asyncApi.getProfile({token:this.props.userReducer.userToken})
    .then((r)=> { 
      r = r.data;
      if(r.code && r.code == 200){
        this.props.dispatch(syncActions.userProfileData(r.data));
      }else{
        toast.error('something went wrong.');
      }
    })
    .catch((e) => { toast.error('something went wrong.'); });

  }

  render(){
    const userProfile = this.props.userReducer.userProfileDetails[0];
    //console.log('userProfile', userProfile);
    return (
      <div>
      <section className="profile-show-section py-6 white-bg-img">
      <div className="container">
        <div className="row d-flex flex-nowrap xs-d-block  xs-text-center col-xs-12">
            <div className="user-profile-picture">
              <img src="images/profile_img.png" alt="" />
            </div>
            <div className="w-100 pl-4 xs-pl-0">
              <div className="user-profile-details">
                <div className="row align-items-center mb-3">
                  <div className="col-lg-6 col-md-12 col-sm-12 xs-mt-3">
                    <h3 className="mb-2 font-weight-black">{userProfile.first_name} {userProfile.last_name}</h3>
                    <h4>USA</h4>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 text-right md-text-left xs-text-center md-mt-3">
                    <button type="button" className="btn search-btn btn-dark-gray px-4 py-3 xs-d-block xs-mx-auto xs-my-3" data-toggle="modal" data-target="#userprofile">Update Search Criteria</button>
                    <a className="ml-2 notification-btn bg-dark-blue" href="JavaScript:;"><i className="fa fa-envelope"></i><span className="noti-counting bg-light-yello">3</span></a>
                    <a className="ml-2 notification-btn bg-light-yello" href="JavaScript:;"><i className="fa fa-envelope"></i> <span className="noti-counting bg-light-yello">4</span></a>
                  </div>
                </div>

                <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
            </div>
        </div>
      </div>
    </section>

    <section className="profile-Details-section bg-light-gray py-6">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3">My Saved Keys <a className="pl-4 text-light-gray font-14" href="JavaScript:;">Add</a></h6>
                <h2 className="profile-font">12</h2>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <img src="images/key.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3"> Comming Visits</h6>
                <h2 className="profile-font">03</h2>
                <button type="button" className="btn search-btn btn-light-gray text-light-gray font-14 mt-2">Next in: 2days</button>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <img src="images/coming_visit.png" className="width-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3">My Applications</h6>
                <h2 className="profile-font">08</h2>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <img src="images/key.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3">My Bacis Info</h6>
                <div className="avatar-list">
                  <span className="avatar brround" style={{backgroundImage: 'url(./images/profile_img.png)'}}></span>
                  <span className="avatar brround" style={{backgroundImage: 'url(./images/flag01.png)'}}></span>
                </div>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <i className="fa fa-info-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3">Info/Apply Doc.</h6>
                <label className="switch">
                  <input type="checkbox"  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <i className="fa fa-file"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 d-flex min-h-194">
          <div className="bg-white py-4 px-4 border-radius-4 w-100">
            <div className="row">
              <div className="col-9">
                <h6 className="mb-3">My Saved Public</h6>
              <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="col-3 text-right">
                <div className="brround profile-key-btn bg-small-light-yello ml-auto text-light-yello">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <div className="user-profile">
      <div className="modal fade login-wrap" id="userprofile" tabIndex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="right-wrap">
              <div className="right-inner">
                <div className="search-area">
                  <label>Define your location to search</label>
                  <form action="#" method="post" className="form-area">
                    <input type="text" name="name" value="Search Location" className="form-control"/>
                    <button className="search-btn">Search</button> 
                  </form>
                </div>
                <div className="buyrent-box">
                  <div className="buy-inner">
                    <a href="#">
                      <span>Buy</span>
                      <p>1,000,000 - 3,000,000</p>
                      <label className="switch">
                        <input type="checkbox"  />
                        <span className="slider"></span>
                      </label>
                    </a>
                  </div>
                  <div className="buy-inner rent">
                    <a href="#">
                      <span>Rent</span>
                      <p>Max - 10,000</p>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </a>
                  </div>
                </div>
                <div className="sup-luxury-box">
                  <ul className="luxury-list">
                    <li>
                      <p>1,000 qm+</p>
                      <span>Size</span>
                    </li>
                    <li>
                      <label>From</label>
                      <p>Super-Luxury+</p>
                      <span>Category</span>
                    </li>
                    <li>
                      <p>10+</p>
                      <span>Rooms</span>
                    </li>
                  </ul>
                  <a href="#" className="premium-box">
                    <div className="premium-text">
                      <h5><span>Only</span> premium</h5>
                      <p>Watch Video & <br />
                      Book</p>
                    </div>
                  </a>
                </div>
                <div className="find-item">
                  <p>I have a Property & want to find Agent</p>
                  <a href="#" className="find-btn">Find Agent</a>
                </div>
              </div>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>  
    )
  }
}

const select = state => state;
export default connect(select)(UserProfile);