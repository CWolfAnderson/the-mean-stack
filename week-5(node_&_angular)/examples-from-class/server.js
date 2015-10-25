var http = require('http');

var app = http.createServer(function(request, response) {
  if (request.url === '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello Christoph");
  }
});

app.listen(8080, "localhost");