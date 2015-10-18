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
"author": "ChristophWolfAnderson",
"license": "MIT"
}
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
// Install/uninstall node packages
// ————————————————————————————————————————————————————————————————————————
/*
1. navigate to folder in terminal
2. ‘nam install **moduleName** —save

uninstall: ‘nam uninstall **moduleName’ —save
*/
// ————————————————————————————————————————————————————————————————————————

// node cli.js —trivia 35000 —save
// use yargs and super agent

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————

// ————————————————————————————————————————————————————————————————————————