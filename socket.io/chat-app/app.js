var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){ // notifies you if a user connects
  // .broadcast: from the server, emit to everyone but the client’s socket
    socket.broadcast.emit('update chat', 'user connected');
  console.log('a user connected');
  socket.on('disconnect', function(){ // notifies you if a user disconnects
    console.log('user disconnected');
    socket.broadcast.emit('update chat', 'user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

