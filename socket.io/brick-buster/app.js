var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

app.use(express.static('./public'));

io.on('connection', function(socket){ // notifies you if a user connects
  
  socket.on('player move', function(direction) {
    io.emit('player move', direction);
    // console.log('direction: ' + direction);
  });
  
  socket.on('change image', function(image) {
    io.emit('change image', image);
  });
  
});

http.listen(8080, function(){
  console.log('listening on port 8080');
});

