var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
  
  // create a route (.get(), .query(), .save(), .remove(), and delete() are part of the resource class object)
  app.get('/search/shows', function (req, res) {
    superagent
    // get config file and put in url here
    .get(config.tvmaze.url + '/shows')
    // to filter based on superhero name
    .query({ filter: 'name:' + req.query.name})
    // format in json
    .query({format: 'json'})
    // must give api your key in order to work
    // .query({api_key: config.tvmaze.key})
    // limit to 4 responses
    .query({limit: 4})
    // limit certain fields (must be list w/o spaces)
    .query({field_list: 'id,name,image,deck'})
    .end(function(err, result) {
      // use .results because the array is the value of the results property
      res.json(result.body.results);
    });  
  });
  
  // handle other routes
  app.get('/shows/:id', function(req, res) {
    superagent
    .get(config.tvmaze.url + '/show/4005-' + req.params.id)
    // .get(config.tvmaze.url + '/shows')
    .query({format: 'json'})
    // .query({api_key: config.tvmaze.key})
    // use 'description' because we will write a custom filter
    .query({field_list: 'id,name,image.medium,summary'})
    .end(function(err, result) {
      if (err) console.log(err);
      // if you don't add .results the api gives you additional details
      res.json(result.body.results);
    });
  });
  
};