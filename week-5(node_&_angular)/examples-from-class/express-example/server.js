// go to http://localhost:8080/api/math?number=2&save=true

var express = require('express');

var app = express();

// tell your app where static files live
app.use(express.static('./client'));

// var x = require('./api/routes'); x(app);
require('./api/routes')(app); //TODO: need routes.js?

// app.get('/', function(request, response) {
//   response.sent('Hello again Christoph');
// });

app.get('*', function(req, res) {
  res.sendFile('/client/views/index.html', { root: __dirname});
});

app.listen(8081, function() {
  console.log('Server is running.');
});