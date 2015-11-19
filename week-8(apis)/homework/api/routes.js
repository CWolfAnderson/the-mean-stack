var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
  
  // create a route (.get(), .query(), .save(), .remove(), and delete() are part of the resource class object)
  app.get('/search/shows', function (req, res) {
    console.log(req);
    console.log(req.query);
    console.log(req.query.name);
    superagent
    // get config file and put in url here
    .get(config.tvmaze.url + '/shows')
    
    // to filter based on show name
    .query({q: req.query.name})
    
    .end(function(err, result) {
      
      // use .results because the array is the value of the results property
      res.json(result.body);
    });
  });
  
};