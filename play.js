const { connect } = require("./client");
const { setupInput } = require("./input");
// establishes a connection with the game server

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true); // Set raw mode to true to receive input as it is typed
  stdin.setEncoding("utf8"); // Set encoding to utf8 for text input 
  stdin.resume(); // Start reading from stdin
  stdin.on("data", handleUserInput); // Listen for data events on stdin
  return stdin;
};

const handleUserInput = function (key) {
  // code handling the key press will go here
  if (key === '\u0003') { // Ctrl+C
    process.exit();
  }
};
console.log("Connecting ...");
const conn = connect();
setupInput(conn);