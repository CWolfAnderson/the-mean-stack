var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
  
  // create a route
  app.get('/api/character/search', function (req, res) {
    superagent
    // get config file and put in url here
    .get(config.comicvine.url + '/characters')
    // to filter based on superhero name
    .query({ filter: 'name:' + req.query.name})
    // format in json
    .query({format: 'json'})
    // must give api your key in order to work
    .query({api_key: config.comicvine.key})
    // limit to 4 resonses
    .query({limit: 4})
    // limit certain fields (must be list w/o spaces)
    .query({field_list: 'id,name,image,deck'})
    .end(function(err, result) {
      // use .results because the array is the value of the results property
      res.json(result.body.results);
    });  
  });
  
  // handle other routes
  app.get('/api/character/:id', function(req, res) {
    superagent
    .get(config.comicvine.url + '/character/4005-' + req.params.id)
    // .get(config.comicvine.url + '/characters')
    .query({format: 'json'})
    .query({api_key: config.comicvine.key})
    // use 'description' because we will write a custom filter
    .query({field_list: 'id, name, image, description'})
    .end(function(err, result) {
      // if you don't add .results the api gives you additional details
      res.json(result.body.results);
    });
  });
  
};