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
      if (this.props.results.length > 0) {
        return (
          <div style={styles.root}>
            <GridList
              cols={2}
              cellHeight={200}
              padding={1}
              style={styles.gridList}
              >
                {this.props.results.map((tile) => (
                  <GridTile
                    onClick={this.props.handleProductClicked}
                    key={tile.LargeImage.URL}
                    title={tile.ItemAttributes.Title}
                    subtitle={tile.ItemAttributes.Author}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    actionPosition="left"
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    // cols={tile.featured ? 2 : 1}
                    // rows={tile.featured ? 2 : 1}
                    >
                      <img src={tile.LargeImage.URL} />
                      {/* <img src={tile.ImageSets.ImageSet[0].ThumbnailImage.URL} /> */}
                    </GridTile>
                  ))}
                </GridList>
              </div>
          )
      } else {
        return (
          <div></div>
        )
      }
  }
}

ProductGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default ProductGridList;
