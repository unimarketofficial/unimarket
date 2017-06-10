import React, { Component } from 'react';
import TopBar from '../components/top_bar/TopBar.js';
import ProductGridList from '../components/product_list/ProductGridList.js';

class ProductListPage extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ProductGridList/>
      </div>
    );
  }
}

export default ProductListPage;
