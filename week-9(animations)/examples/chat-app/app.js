var express = require('express');
var app = express();

// set up static content
app.use(express.static('public'));

app.listen(8080, function() {
  console.log('Server is listening on port 8080.');
});