// go to localhost:8888 in browser to see this in action
// to see error, go to localhost:8888/anything.html
var http = require("http");
var fs = require("fs");

// 404 response
function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: Page does not exist.");
  response.end();
}

// handle user request
function onRequest(request, response) {
  
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    // to actually send html, we want to send it in a stream:
    fs.createReadStream("./index.html").pipe(response); // pipe out response
  } else {
    send404Response(response);
  }
  
}

http.createServer(onRequest).listen(8888);

console.log("Server is now running...");