import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginModal from './LoginModal';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render (){
    const { userReducer } = this.props;
    const isUserLoggedIn = userReducer.isLoggedin;
    if(isUserLoggedIn){
      return (
        <header className="header-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 login-wrap">
                <Link to="/user-profile" className="log-btn">
                  <img src="images/profile.png" alt="" />
                  Hello, Guest
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