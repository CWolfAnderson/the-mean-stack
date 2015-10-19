var app = require("./app");
var yargs = require("yargs");

var flags = yargs.usage("$0: Usage node cli.js")
  .options("h", {
    alias: "help",
    describe: "Display help"
  })
  .options("m", {
    alias: "math",
    describe: "Get a Math Fact"
  })
  .options("t", {
    alias: "trivia",
    describe: "Get a Trivia Fact"
  })
  .options("d", {
    alias: "date",
    describe: "Get a Date or Year Fact"
  })
  .argv; // Q1. Why do we need this .argv?

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}