import React, { Component } from 'react';
import SearchBar from './SearchBar.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const topBarStyle = {
      'background-color': 'rgb(57, 205, 231)'
    }
    const imageStyle = {
      height: '3%',
      width: '3%',
    };
    const headerStyle = {
      display: 'inline',
      'fontFamily': 'Garamond'
    };
    return (
      <div style={topBarStyle}>
        <img style={imageStyle} src="http://res.cloudinary.com/jchen54/image/upload/v1496962973/favicon_xllkya.png" />
        <h1 style={headerStyle}>Unimarket</h1>
        <SearchBar search={this.props.search}/>
      </div>
    );
  }
}

export default TopBar;
