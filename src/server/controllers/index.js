const path = require('path');
const dotenv = require('dotenv').config();
const {OperationHelper} = require('apac');

module.exports = {
  search: {
    post(req, res) {
      const searchQuery = req.body.searchQuery;

      const opHelper = new OperationHelper({
        awsId: process.env.AWS_ACCESS_KEY_ID,
        awsSecret: process.env.AWS_SECRET_ACCESS_KEY,
        assocId: process.env.AWS_ASSOCIATE_ID,
      });

      opHelper.execute('ItemSearch', {
        SearchIndex: 'All',
        Keywords: searchQuery,
        ResponseGroup: 'Images, ItemAttributes, Offers, RelatedItems',
        RelationshipType: 'AuthorityTitle',
      }).then((response) => {
          // res.json(response.result.ItemSearchResponse.Items.Item);
          res.json(response);
      }).catch((err) => {
          console.error("Something went wrong! ", err);
          res.json("Something went wrong! ", err);
      });
    },
  },
};
