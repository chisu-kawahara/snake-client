const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.81",  // Use quotes for strings
    port: 50541            // Port is a number, no quotes needed
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming messages from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();