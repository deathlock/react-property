import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import InfiniteScroll from 'react-infinite-scroller';

import { appReducer } from "../../redux/reducers";
import * as asyncApi from "../../api/Async.api";
import * as syncActions from '../../redux/actions/Sync.action';

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSearch: "",
      PropertyListData:[],
      PropertyCount:"",
      CurrentOffset:0,
      Limit:3,
      hasMoreItems: true
    }
  }

  async loadProperties(page){
    if(this.state.hasMoreItems){
      const propertyList = await asyncApi.getPropertyList({start:this.state.CurrentOffset, limit: this.state.Limit});
     
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
        CurrentOffset: offset
      })
    }
  }

  onChange(value){
    this.setState({
      indexSearch: value
    })
    this.props.dispatch(syncActions.searchTermData(value));
  }

  render() {
    const { indexSearch } = this.props;
    const PropertyListData = this.state.PropertyListData;
    const loader = <div className="loader">Loading ...</div>;
    var items = [];
    PropertyListData.map((property, key) => {
        items.push(
            <div className="list-min-div">
              <div className="estate-works-item">
                <div className="item-overlay">
                  <div className="book-category clip-path-right"><a href="javascript:;">Book Tour</a></div>
                  <div className={`category ${property.type == 'Buy' ? '' : 'rent-categ'}`}><a href="javascript:;">{property.type}</a></div>
                  <img className="category-img" src="images/portfolio_01.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">${property.price}</h6>
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
                      <span>{property.name}</span>
                      <a href="#" className="btn small-btn">Video Visit</a>
                    </h4>
                    <strong>{property.address}</strong>
                    <p>Will equipped studio apartment From</p>
                    <p>2.00 QM | {property.bedrooms} Bedrooms</p>
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
        );
    });
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
                    <input type="text" name="name" value={indexSearch} placeholder="Denver, USA" onChange={(e) => this.onChange(e.target.value)} className="form-control" />
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
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadProperties.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                <div className="row contain-plr">
                    {items}
                </div>
            </InfiniteScroll>
          </div>
        </section>
      </div>
    );
  }
}

PropertyList.defaultProps = {
  PropertyListData : []
}


const select = state => ({ indexSearch : state.appReducer.indexSearch });
export default connect(select)(PropertyList);