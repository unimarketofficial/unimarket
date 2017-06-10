import React, { Component } from 'react';
import $ from 'jquery';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.props.search('Calculus Textbooks');
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    if (this.state.searchQuery.length > 0) {
      this.props.search(this.state.searchQuery);
      this.setState({
        searchQuery: '',
      });
    }
  }

  handleSearchChange(event) {
    event.preventDefault();
    this.setState({
      searchQuery: event.target.value
    });
  }

  render() {
    const inputStyle = {
      display: 'inline',
      'line-height': '50 em',
      width: '40%',
    };

    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input style={inputStyle} placeholder="calculus textbook, kettle, ramen" input="text" value={this.state.searchQuery} onChange={this.handleSearchChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
