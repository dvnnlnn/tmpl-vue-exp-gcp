const request = require("request");
const querystring = require("querystring");

exports.setRouters = (app) => {
  // place express routes here

  app.get("/api/hello", (req, res) => {
    res.send("hello world");
  });
};
