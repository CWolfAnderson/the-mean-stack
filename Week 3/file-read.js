// fs = file system (handles file io)
var fs = require('fs');

function read (filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    console.log('Error: ', err);
    console.log('Data: ', data);
    console.log("Where is this?");
  });
  // optional callback function
}

read('sample-file.txt');
console.log('Done reading file');