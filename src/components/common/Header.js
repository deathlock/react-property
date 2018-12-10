import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import LoginModal from './LoginModal';
import * as syncActions from '../../redux/actions/Sync.action';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }

    this.logout = this.logout.bind(this);
  }
  logout(){
    this.props.dispatch(syncActions.userLoggedIn(false));
    this.props.history.push("/");
    toast.success('LoggedOut successfully.');
  }
  render (){
    const { userReducer } = this.props;
    const isUserLoggedIn = userReducer.isLoggedin;
    const userProfile = userReducer.userProfileDetails[0];
    if(isUserLoggedIn){
      return (
        <header className="header-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 login-wrap">
                <Link to="/user-profile" className="log-btn">
                  <img src="images/profile.png" alt="" />
                  Hello, {userProfile.first_name} {userProfile.last_name}
                  { isUserLoggedIn &&
                    <i className="icon-logout fa fa-sign-out" onClick={this.logout} />
                  }
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <Link to="/"><img src="images/logo.png" alt="" /></Link>
              </div>
              <div className="col-md-3">
                <div className="key-wrap">
                  130,090
                            <img src="images/key.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    }else{
      return (
        <header className="header-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 login-wrap">
                <button type="button" className="log-btn" data-toggle="modal" data-target="#smallShoes">
                  <img src="images/profile.png" alt="" />
                  Hello, Guest
                </button>
                <LoginModal />
              </div>
              <div className="col-md-6 text-center">
                <Link to="/"><img src="images/logo.png" alt="" /></Link>
              </div>
              <div className="col-md-3">
                <div className="key-wrap">
                  130,090
                            <img src="images/key.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
}
const select = state => state;
export default connect(select)(Header);