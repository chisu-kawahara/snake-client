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
};

module.exports = { setupInput };
