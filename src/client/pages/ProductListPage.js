import React, { Component } from 'react';
import TopBar from '../components/top_bar/TopBar.js';
import ProductGridList from '../components/product_list/ProductGridList.js';
import $ from 'jquery';

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
    };
    this.search = this.search.bind(this);
  }

  search(searchQuery) {
    $.ajax({
      url: '/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        searchQuery
      }),
      success: (results) => {
        console.log(results);
        if (results.length > 0) {
          this.setState({ results });
        }
      },
      error: err => console.log(err)
    });
  }

  render() {
    return (
      <div>
        <TopBar search={this.search} />
        <ProductGridList results={this.state.results} />
      </div>
    );
  }
}

export default ProductListPage;
