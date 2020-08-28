// Stores the active TCP connection object.
const { connect } = require('./client');
const { commands } = require('./constants');
const net = require('net');
const { conn } = require('./client');
let  connection;



const handleUserInput = (data) => {// -----> ends the connection by pressing 'ctrl+c'
  if (data === '\u0003') {
    process.exit();
  }
  if (commands[data.toLowerCase()]) {
    connection.write(commands[data.toLowerCase()]);
  }
};	

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}



module.exports = { setupInput };