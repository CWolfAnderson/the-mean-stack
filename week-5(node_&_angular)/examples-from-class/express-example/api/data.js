var async = require('async');
var fs = require('fs');

module.exports.saveFact = function (fact, callback) {
  // throw homework 3 in here basically
  var file = 'facts.json';
  
  async.waterfall([
    function exists(next) { // next is a callback
      fs.exists(file, function (exists) {
        next(null, exists); // usually null would be err but async stops if it sees an error
      });
    },
    function read(exists, next) {
      if (exists) {
        fs.readFile(file, 'utf8', function (err, data) {
          try {
            var facts = JSON.parse(data);
            facts.push(fact);
            next(err, facts);
          } catch (e) {
            next(e);
          }
        });        
      } else {
        next(null, [fact]);        
      }
    },
    function write(facts, next) {
      fs.writeFile(file, JSON.stringify(facts, null, '\t'), function (err) {
        next(err, 'successful');
      });
    }
  ], function done(err, result) {
    // will run when finished
    callback(err, result);    
  });
  
};