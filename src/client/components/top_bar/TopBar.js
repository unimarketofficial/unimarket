import React, { Component } from 'react';
import SearchBar from './SearchBar.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h2>Unimarket</h2>
        <SearchBar search={this.props.search}/>
      </div>
    );
  }
}

export default TopBar;
