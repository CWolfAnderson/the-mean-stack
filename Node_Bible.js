// ~Node~
// ————————————————————————————————————————————————————————————————————————
// Create Node project:
// ————————————————————————————————————————————————————————————————————————

/*
to create a JSON package in folder:

1. navigate to folder in terminal
2. ‘npm init’
3. follow prompts
4. create app.js file (this will be the first file that runs)

i.e. 
{
"name": "superagent-example",
"version": "1.0.0",
"description": "demo on superagent",
"main": "app.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Christoph Wolf Anderson",
"license": "MIT"
}
*/

// ————————————————————————————————————————————————————————————————————————
// Install/uninstall node packages
// ————————————————————————————————————————————————————————————————————————
/*
1. navigate to folder in terminal
2. ‘npm install **moduleName** --save

`--save` flag will add your module as a dependency in package.json

uninstall: ‘npm uninstall **moduleName’ --save
*/
// ————————————————————————————————————————————————————————————————————————

// To ‘export’ variables:
// ————————————————————————————————————————————————————————————————————————
// in .js file:
// module.exports.**varName** = **varToExport**
module.exports.avatar = printAvatar();

// in app.js file:
// var **varName** = require(“**linkToFile.js**”);
var movies = require("./movies");

movies.avatar(); // will run ‘printAvatar()’
// similar to public and private functions

// shorthand for exporting variables and functions
module.exports = {
  printAvatar: function() {
    console.log("Avatar!!");
  },
  printChappie: function() {
    console.log("Chappie");
  },
  favAnimal: "Snub-nosed monkeys"
};

// now printAvatar, printChappie, and favAnimal can be accessed in app.js

// ————————————————————————————————————————————————————————————————————————
// Display file directory:
// ————————————————————————————————————————————————————————————————————————
console.log(__filename);
// ————————————————————————————————————————————————————————————————————————
// Create routes:
// ————————————————————————————————————————————————————————————————————————
// in app.js:
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> Express');
});

app.get('/me', function(req, res) {
  res.send('The Wolf');
});

app.get('/who/:name', function(req, res) {
  var name = req.params.name;
  res.send(name + ' was here');
});

app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>Name: ' + name + '<br>Title: ' + title + '</p>');
});

// for all other routes
app.get('*', function(req, res) {
  res.send('Bad Route');
});

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————