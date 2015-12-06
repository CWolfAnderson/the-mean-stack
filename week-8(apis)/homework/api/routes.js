var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
  
  // create a route (.get(), .query(), .save(), .remove(), and delete() are part of the resource class object)
  app.get('/search/shows', function (req, res) {
    
    superagent
    // get config file and put in url here
    .get(config.tvmaze.url + '/search/shows')
    // .get(config.tvmaze.url + '/shows')
    
    // to filter based on show name
    .query({q: req.query.name})
    
    .end(function(err, result) {
                  
      res.json(result.body);
      
    });
  });
  
  // handle show details
  app.get('/shows/:id', function(req, res) {
    superagent    
    
    .get(config.tvmaze.url + '/shows/' + req.params.id + '\?embed=cast')
    
    .end(function(err, result) {
      
      if (err) console.log(err);
      
      // console.log(result.body);
      
      res.json(result.body);
      
    });
    
  });
  
};