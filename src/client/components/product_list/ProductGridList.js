import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
class ProductGridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesData: [
        {
          img: 'http://buyersguide.caranddriver.com/media/assets/submodel/6873.jpg',
          title: 'Breakfast',
          author: 'jill111',
          featured: true,
        },
        {
          img: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/it/models_gateway/blocks/special.png',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'https://www.rolls-roycemotorcars.com/content/dam/rollsroyce-website/dawn-refresh/00.FB_social_image.jpg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'images/grid-list/morning-819362_640.jpg',
          title: 'Morning',
          author: 'fancycrave1',
          featured: true,
        },
        {
          img: 'images/grid-list/hats-829509_640.jpg',
          title: 'Hats',
          author: 'Hans',
        },
        {
          img: 'images/grid-list/honey-823614_640.jpg',
          title: 'Honey',
          author: 'fancycravel',
        },
        {
          img: 'images/grid-list/vegetables-790022_640.jpg',
          title: 'Vegetables',
          author: 'jill111',
        },
        {
          img: 'images/grid-list/water-plant-821293_640.jpg',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
        },
      ]
    };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 'auto',
        height: 'auto',
        overflowY: 'auto',
      },
    };

    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
          >
          {this.state.tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={tile.author}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} />
            </GridTile>
              ))}
        </GridList>
      </div>
    )
  }
}

ProductGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default ProductGridList;
