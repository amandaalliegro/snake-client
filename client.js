const net = require('net');
const { IP, PORT } = require('./constants');
const { setupInput } = require('./input');
const { commands } = require('./input')
const { handleUserInput } = require('./input')
let connection;

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  //const time = 300;
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AAA");
  });
  return conn;
};


module.exports = { connect };


setupInput(connection);

