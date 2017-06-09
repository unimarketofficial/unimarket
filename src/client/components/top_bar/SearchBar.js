import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    if (this.state.searchQuery.length > 0) {
      this.search(this.state.searchQuery);
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

  search(query) {
    window.alert(query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input size="50" placeholder="calculus textbook, kettle, ramen" value={this.state.searchQuery} onChange={this.handleSearchChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
