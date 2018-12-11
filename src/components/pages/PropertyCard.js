import React, { Component } from 'react';

class PropertyCard extends Component{
	constructor(props){
		super(props);
    this.gotoDetail = this.gotoDetail.bind(this);
	}

  gotoDetail(){
    const property = this.props.data;
    this.props.history.push('property/'+property.id);
  }
	
	render() {
		const property = this.props.data;
		return(
			<div className="list-min-div">
        <div className="estate-works-item">
          <div className="item-overlay" onClick={this.gotoDetail}>
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
	}
}

export default PropertyCard;