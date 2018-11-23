import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { appReducer } from "../../redux/reducers"

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSearch: this.props.appReducer.homeData.indexSearch
    }
  }
  render() {
    return (
      <div className="PropertyList">
        <Helmet>
          <meta charSet="utf-8" />
          <title>KeyHeroes</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
        </Helmet>
        <section className="top-head-area">
          <div className="container-fluid">
            <div className="row top-nav-title">
              <div className="col-md-3">
                <a href="#" className="map-btn">Map</a>
              </div>
              <div className="col-md-7">
                <div className="search-area">
                  <label>Where do you serach like</label>
                  <form action="#" method="post" className="form-area">
                    <input type="text" name="name" value={this.state.indexSearch} placeholder="Denver, USA" onChange={(e) => this.setState({ indexSearch: e.target.value })} className="form-control" />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>
              <div className="col-md-2">
                <span className="km-text">2 KM</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contain-area">
          <div className="container-fluid">
            <div className="row contain-plr">
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const select = state => state;
export default connect(select)(PropertyList);