var express = require('express');
var app = express();

// 1. tell app where the static files are
// says to use client folder as static pages
app.use(express.static('./client'));

// 2. tell app where the routes are
require('./api/routes')(app);

// 3. send the index.html file
// when the server gets a request, send something as a response
// * is wildcard meaning it will send index.html no matter what
app.get('*', function (req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
});

// 4. turn on the server
app.listen(8081, function () {
	console.log('Server is running on 8081.');
});