import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import {  toast } from 'react-toastify';

import * as asyncApi from '../../api/Async.api';


class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      phone: ""
    }

    this.handleRegister = this.handleRegister.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.sendOTP = this.sendOTP.bind(this);
  }

  handleRegister(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const contact_number = data.get("contact_number").replace(/[- )(]/g,'');
    data.set('contact_number',contact_number);
    
    const r = asyncApi.registerCustomer(data)
    .then((r) => {
      r = r.data; 
      if(r.code && r.code == 200) {
        document.getElementById("registerForm").reset();
        this.setState({phone: ""});
        toast.success('Register Succesful!! Please login to continue.');
        document.getElementsByClassName("log-btn")[0].click();
      }
    }).catch((e) => {
      toast.error('something went wrong.');
    });
  }
  
  handlePhoneChange(value) {
    this.setState({phone: value});
  }

  sendOTP(){
    asyncApi.sendOTP(this.state.phone.replace(/[- )(]/g,'')).then((r) => {
      toast.success('OTP sent to '+this.state.phone);
    }).catch((e) => {
      toast.error('something went wrong.');
    });
  }

  render(){
    return(
        <section className="register-section">
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-lg-6 white-bg-img d-flex align-items-center">
              <div className="register-inner w-100">
                <form method="post" onSubmit={this.handleRegister} id="registerForm">
                  <h3 className="font-weight-black mb-3"><span className="text-gray">WE ARE</span> KEYHEROES</h3>
                  <p className="font-20  text-black mb-4 xs-font-16">Welcome, Please<br />
                  Register for you account</p>
                  <div className="d-flex xs-d-block">
                    <div className="form-group w-50 mr-2 mb-4 xs-w-100">
                      <label className="form-label mb-1 font-16">First Name</label>
                      <input type="text" name="first_name" className="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" />
                    </div>
                    <div className="form-group w-50 mb-4 xs-w-100">
                      <label className="form-label mb-1 font-16">Last Name</label>
                      <input type="text" name="last_name" className="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" />
                    </div>
                  </div>
                  <div className="d-flex xs-d-block">
                    <div className="form-group w-50 mr-2 mb-4 position-relative xs-w-100 register-phone">
                      <label className="form-label mb-1 font-16">Mobile Number</label>
                      <ReactPhoneInput value={this.state.phone} countryCodeEditable={false} autoFormat={true} defaultCountry={'us'} inputExtraProps={{name: 'contact_number'}} inputClass="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" onChange={this.handlePhoneChange}/>
                      <span onClick={this.sendOTP} style={{cursor: "pointer"}} className="otp-text text-black">Send OTP</span>
                    </div>
                    <div className="form-group w-50 mb-4 xs-w-100">
                      <label className="form-label mb-1 font-16">OTP</label>
                      <input type="text" name="otp" className="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label className="form-label mb-1 font-16">Password</label>
                    <input type="password" name="password" className="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="form-label mb-1 font-16">Confirm Password</label>
                    <input type="password" name="cpassword" className="form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md" />
                  </div>
                  <div className="d-flex mb-30">
                    <button type="submit" className="btn-orange-lg w-50 mr-2">Sign Up</button>
                    <button className="btn-orange-lg w-50">Sign In</button>
                  </div>
                </form>
                <p className="font-20 text-dark-gray xs-font-16">By signing up, you agree to Keyheroes’<br />
                <a  href="javascript:;" className="term-text text-black">Terms and Condition</a> &amp; 
                <a  href="javascript:;" className="term-text text-black">Privacy Policy</a></p>
              </div>
            </div>
            <div className="col-lg-6 pl-0 pr-0 lg-pl-1p lg-pr-1p md-mb-4">
              <img className="Verdor-right-img" src="images/register_right_img.jpg" alt="" />		
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Register;