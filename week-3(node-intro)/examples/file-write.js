var fs = require('fs');

function write(filename, text) {
  fs.writeFile(filename, text, function(err) {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('Done writing file');
  });
}
write("delete.txt", "This was a test,\nplease delete me.");