var superagent = require("superagent");

superagent.get("http://jsonplaceholder.typicode.com/posts")
  .end(function(err, response) {
    console.log("Error: ", err);
    console.log("Response: ", response.body);
    console.log("First element: \n", response.body[0]);
  });
