import React, { Component } from 'react';
import ProductListEntry from './ProductListEntry.js';
import GridListExampleComplex from './GridListExampleComplex.js';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: ['calculus textbook', 'physics textbook', 'statistics textbook', 'calculus notes', 'Spanish notes'],
    };
  }
  render() {
    return (
      <div>
        {/* <ul>
          {this.state.productList.map(product =>
            <li><ProductListEntry product={product}/></li>
          )}
        </ul> */}
        <GridListExampleComplex />
      </div>
    );
  }
}

export default ProductList;
