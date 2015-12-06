var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

// bind on an event called connection
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

// when the event 'chat message' happens you trigger this function
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    // emit the message back to everything that's connected
    io.emit('chat message', msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


/*
var express = require('express');
var app = express();

// Setup serving static content
app.use( express.static('public') );

app.listen(3000, function(){
  console.log('listening on *:3000');
});
*/