import React, { Component } from 'react';

class AutoSuggestion extends Component {
  constructor(props){
    super(props);
  }

  onClickHandle = (e) => {
    this.props.handleListClick(e, e.currentTarget.id, e.currentTarget.textContent);
  }

  render() {
    return (
      <li id={this.props.data.place_id} onMouseDown={this.onClickHandle} >{this.props.data.description}</li>
    );
  }
}

export default AutoSuggestion;