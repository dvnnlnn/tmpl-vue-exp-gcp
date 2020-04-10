/* eslint-disable no-shadow */

const request = require('request');
const querystring = require('querystring');

exports.setRouters = (app) => {

  // place express routes here

  app.get('/api/hello', (req, res) => {
    const { refresh_token } = req.query;
    res.send('hello world');
  });

};
