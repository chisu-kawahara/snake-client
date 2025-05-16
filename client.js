const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",  // Use quotes for strings
    port: 50541            // Port is a number, no quotes needed
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming messages from server

  conn.on('connect', () => {
    console.log("Successfully connected to game server");

    // Send name to the server
    conn.write("Name: ABC"); // Replace "ABC" with your initials

    //conn.write("Move: up");

  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };