module.exports.year = 2015;

var fs = require('fs');

module.exports.run = function(flags) {
  var fileApp = new FileApp(flags);
  // call function below
  fileApp.init();
};

function FileApp (flags) {
  this.flags = flags;
}

FileApp.prototype.init = function() {
  // 'write' comes from cli.js
  if (this.flags.write) {
    //console.log(this.flags.write);
    this.write();
  }

  if (this.flags.remove) {
    this.remove();
  }
};


// to use: in terminal:
// node cli.js --write **yourFileName** "**text**"'
FileApp.prototype.write = function() {

  var filename = this.flags.write[0];
  var data = this.flags.write[1];

  fs.writeFile(filename, data, function(err) {
    if (err) {
      throw err;
    }
    console.log('Saved');
  });
};

FileApp.prototype.remove = function() {
  // use 'unlink' to delete file
  var filename = this.flags.remove;

  fs.unlink(filename, function(err) {
    if (err) throw err;
    console.log('Removed');
  });

};
