import React, { Component } from 'react';

class ProductSpecificPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const imageStyle = {
      float: 'left'
    }
    const headerStyle = {
      display: 'inline'
    }
    return (
      <div>
        <img style={imageStyle} src={this.props.tile.LargeImage.URL} />
        <h2>{this.props.tile.ItemAttributes.Title}</h2>
        {parseInt(this.props.tile.OfferSummary.TotalUsed) > 0 ?
          <p>Price: {this.props.tile.OfferSummary.LowestUsedPrice.FormattedPrice}</p>
        :
          parseInt(this.props.tile.OfferSummary.TotalNew) === 0 && parseInt(this.props.tile.OfferSummary.TotalNew) === 0 ?
            <h2>This item is currently unavailable.</h2>
            :
            <p>Price: {this.props.tile.OfferSummary.LowestNewPrice.FormattedPrice}</p>
        }
      </div>
    );
  }
}

export default ProductSpecificPage;
