// must have module name in 'require'
var superagent = require('superagent');

superagent.get('http://jsonplaceholder.typicode.com/posts')
.end(function(err, response) {
  console.log('Error: ', err);
  // console.log('Response: ', response.body);
  console.log('First element: \n', response.body[0]);
});


superagent.get("http://numbersapi.com/42")
.end(function (err, response) {
  console.log("Error: " + err);
  console.log("Response: " + response.text);
  console.log('----------------------------------');
});