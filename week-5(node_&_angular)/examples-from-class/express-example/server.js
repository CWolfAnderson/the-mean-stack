// api.com/number/

var express = require('express');

var app = express();

// var x = require('./api/routes'); x(app);
require('./api/routes')(app); //TODO: need routes.js?

// app.get('/', function(request, response) {
//   response.sent('Hello again Christoph');
// });

app.listen(8080, function() {
  console.log('Server is running.');
});