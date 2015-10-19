var connect = require("connect");
var http = require("http");

var app = connect();

function profile(request, response) {
  console.log("Profile requested.");
}

// any time they go to thie foler, call the 'profile' function
app.use("/profile", profile);

function about(request, response) {
  console.log("About page requested.");
}

app.use("/about", about);

// function doFirst(request, response, next) {
//   console.log("Log.");
//   next(); // if this 'next()' is here then it will go to the next object in the stack
// }
// 
// function doSecond(request, response, next) {
//   console.log("Another log.");
//   next();
// }
// 
// app.use(doFirst);
// app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running...");

