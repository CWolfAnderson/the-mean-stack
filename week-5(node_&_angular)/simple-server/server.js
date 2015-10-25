// go to localhost: 8888 in browser to see this in action

var http = require("http");

function onRequest(request, response) {
  console.log("A user made a request. " + request.url);
  // above will print:
  // A user made a request.
  // A user made a request. /favicon.ico
  // this is because the favicon is the tab icon
  
  // send a response that all is well and response is plain text
  response.writeHead(200, {"Context-Type": "text/plain"});
  
  // the simple response
  response.write("Here is some data.");
  
  // end the response
  response.end();
}

// creates server & listens on port 8888
http.createServer(onRequest).listen(8888);

console.log("Server is now running...");