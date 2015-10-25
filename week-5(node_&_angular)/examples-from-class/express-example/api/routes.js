// all routes go in here

var superagent = require('superagent');
var data = require('./data');

module.exports = function(app) {
  app.get('/api/:type', function(req, res) { // :type -> req.params.type
    // res.json({name: 'Christoph'});  
    
    // req.query.number looks in url for query args (i.e. numberapi.com/trivia?json=true)
    superagent
    .get('http://numbersapi.com/' + req.query.number + '/' + req.params.type)
    .query({json: true})
    .end(function(err, response) { // make sure this says 'response'
    if (err) return res.send(err);
    
    if (req.query.save) {
        data.saveFact(response.body, function(err, saved) {
          response.body.saved = saved;
          res.json(response.body);
        });
    } else {
      res.json(response.body); // make sure this says 'res'
    }
  });
});
};