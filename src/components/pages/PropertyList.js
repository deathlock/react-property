import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import InfiniteScroll from 'react-infinite-scroller';
import { showLoading, hideLoading } from 'react-redux-loading-bar';


import PropertyCard from './PropertyCard';
import NoMoreData from '../common/NoMoreData';
import * as asyncApi from "../../api/Async.api";
import * as syncActions from '../../redux/actions/Sync.action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PropertyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      indexSearch: "",
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
    this.loadProperties();
  }
  
    async loadProperties(){
    if(this.state.hasMoreItems && !this.state.isRunnning){
        this.props.dispatch(showLoading());
        this.setState({ isRunnning: true });
        const propertyList = await asyncApi.getPropertyList({start:this.state.CurrentOffset, limit: this.state.Limit})
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

  onChange(value){
    this.setState({
      indexSearch: value
    })
    this.props.dispatch(syncActions.searchTermData(value));
  }

  render() {
    const { indexSearch } = this.props;
    const PropertyListData = this.state.PropertyListData;
    //const loader = <div  key={0} className="loader">Loading ...</div>;
    var items = [];
    var displayProperty = "";
    PropertyListData.map((property, key) => {
      const card =  <PropertyCard key={key} data={property} />;
      items.push(card);
    });
    
    if(!this.state.hasMoreItems){
      displayProperty = <NoMoreData message="No More Properties..." />
    }
    return (
      <div className="PropertyList">
      <ToastContainer />
        <Helmet>
          <meta charSet="utf-8" />
          <title>KeyHeroes - Property List</title>
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