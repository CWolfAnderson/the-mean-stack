var app = require("./app");
var yargs = require("yargs");

var flags = yargs.usage("$0: Usage node cli.js")
  .options("h", {
    alias: "help",
    describe: "Display help"
  })
  .options("m", {
    alias: "math",
    describe: "Get a Math Fact by entering a number"
  })
  .options("t", {
    alias: "trivia",
    describe: "Get a Trivia Fact by entering a number"
  })
  .options("d", {
    alias: "date",
    describe: "Get a Date or Year Fact by entering a year in 'YYYY' or date in 'MM/DD' format"
  })
  .options("s", {
    alias: "save",
    describe: "Save your fact to JSON"
  })
  .argv; // Q1. Why do we need this .argv?

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}