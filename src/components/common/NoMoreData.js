import React, { Component } from 'react';

class NoMoreData extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="No-more-data">{this.props.message}</div>
    )
  }
}

export default NoMoreData;