// use by typing 'node cli.js -h' in terminal

// console.log(process.argv);

var yargs = require('yargs');

// ./ says 'look in same directory'
var app = require('./app.js');

console.log('year: ', app.year);



// says: to use this module, use node cli.js
var flags = yargs.usage('$0: Usage node cli.js')
.options('h', {
  alias: 'help',
  describe: 'Display help'
})
.options('w', {
  alias: 'write',
  describe: 'Writes a file with specified name and text',
  type: 'array'
})
.options('r', {
  alias: 'remove',
  describe: 'Remove a file by name'
})
.argv;

// console.log(flags);

if (flags.help) {
  yargs.showHelp();
} else {
  // from app.js
  app.run(flags);
}
