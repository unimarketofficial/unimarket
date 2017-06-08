import React, { Component } from 'react';

class ProductListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.product}</div>
      </div>
    );
  }
}

export default ProductListEntry;
