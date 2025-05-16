let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);         // Receive input as it is typed
  stdin.setEncoding("utf8");      // Text encoding
  stdin.resume();                 // Start reading stdin
  stdin.on("data", handleUserInput); // Handle user input
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // Ctrl+C
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'q') {
    connection.write("Say: Watch out!");
  }
  if (key === 'e') {
    connection.write("Say: I'm coming!");
  }
  if (key === 'z') {
    connection.write("Say: LOL");
  }
  if (key === 'x') {
    connection.write("Say: So fast!");
  }
  if (key === 'c') {
    connection.write("Say: Nice move!");
  }
};

/*
// alternate way to handle user input
const handleUserInput = function (key) {
  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
  }
};
*/

module.exports = { setupInput };
