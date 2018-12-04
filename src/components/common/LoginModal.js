import React, { Component } from 'react';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smartPhoneLogin: "Login with your Smartphone"
    }
  }

  render() {
    return (
          <div className="modal fade" id="smallShoes" tabIndex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
          <div className="modal-dialog ">
              <div className="modal-content">
                  <div className="left-wrap">
                      <div className="left-inner">
                        <form action="#" method="post">
                              <div className="form-group">
                                <input type="text" name="name" value="Login with your Smartphone" className="form-control" />
                              </div>
                              <div className="form-group password">
                                <input type="text" name="name" value="Password" className="form-control" />
                              </div>
                              <div className="d-flex">
                                <button className="btn-orange-lg w-50 mr-2">Login</button>
                                  <button className="btn-orange-lg w-50">Register</button>
                              </div>
                          </form>
                        <p className="popup-text">You are here as a Guest. Apply your<br />
                          search criteria here and save<br />
                          upto 5 keys. (IP)</p>
                        <a href="javascript:;" className="about-btn">About Us</a>
                          <div className="img-wrap">
                            <i className=""><img src="images/key_popup.svg" alt="" /></i>
                              <div className="img-inner">
                                  <img src="images/popup_img01.jpg" alt="" />
                                  <img src="images/popup_img02.jpg" alt="" />
                                  <img src="images/popup_img03.jpg" alt="" />
                                  <img src="images/popup_img04.jpg" alt="" />
                                  <img src="images/popup_img05.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
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
                                  <a href="javascript:;">
                                      <span>Buy</span>
                                      <p>1,000,000 - 3,000,000</p>
                                  </a>
                              </div>
                              <div className="buy-inner rent">
                                  <a href="javascript:;">
                                      <span>Rent</span>
                                      <p>Max - 10,000</p>
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
                            <a href="javascript:;" className="premium-box">
                                  <div className="premium-text">
                                      <h5><span>Only</span> premium</h5>
                                      <p>Watch Video & <br />
                                      Book</p>
                                  </div>
                            </a>
                            <a href="javascript:;" className="search-link">Go to full search <img src="images/right_arrow.svg" alt="" /></a>
                          </div>
                          <div className="find-item">
                              <p>I have a Property & want to find Agent</p>
                              <a href="javascript:;" className="find-btn">Find Agent</a>
                          </div>
                      </div>
                  </div>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
        </div>
    );
  }
}

export default LoginModal;