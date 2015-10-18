var path = require("path");

var indexPage = "Desktop/////Programming/Node///index.html";
var aboutPage = "Desktop/Programming/Node/about.html";

// to normalize slashes:
console.log(path.normalize(indexPage));
// Desktop/Programming/Node/index.html

// to
console.log(path.dirname(aboutPage));
// Desktop/Programming/Node

// to
console.log(path.basename(aboutPage));
// about.html

// to
console.log(path.extname(aboutPage));
// .html