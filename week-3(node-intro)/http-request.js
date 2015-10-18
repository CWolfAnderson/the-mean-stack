var http = require('http'); // may require https

http.get("http://jsonplaceholder.typicode.com/posts", function(response) {
  console.log('Response: ', response.statusCode);
  // statusCode is 200 if it worked, 404 if not found, etc.

  // prints out the buffer
  response.on('data', function(data) {
    console.log(data);
  });

  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    console.log(body);
  });

  // on funciton allows you to access error
}).on('error', function(err) {
  console.log(err);
});

// myArray.forEach(function(elem) {
//   // body...
// });