import React, { Component } from 'react';
import $ from 'jquery';
import ProductGridList from './client/components/product_list/ProductGridList.js';
import ProductSpecifics from './client/components/product_specifics/ProductSpecifics.js';
import TopBar from './client/components/top_bar/TopBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      userWantsProductPage: false,
    };
    this.search = this.search.bind(this);
    this.handleProductClicked = this.handleProductClicked.bind(this);
  }

  componentDidMount() {
    this.search('socks');
  }

  search(searchQuery) {
    $.ajax({
      url: '/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        searchQuery,
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

  handleProductClicked() {
    this.setState({ userWantsProductPage: !this.state.userWantsProductPage });
  }

  render() {
    return (
      this.state.userWantsProductPage ?
        <div>
          <TopBar search={this.search} />
          <ProductSpecifics />
        </div>
      :
        <div>
          <TopBar search={this.search} />
          <ProductGridList
            results={this.state.results}
            handleProductClicked={this.handleProductClicked}
          />
        </div>
    );
  }
}

export default App;
