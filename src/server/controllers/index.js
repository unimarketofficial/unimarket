const path = require('path');

module.exports = {
  settings: {
    get(req, res) {
      console.log('the server works');
      res.json('settings');
    },
  },
};
