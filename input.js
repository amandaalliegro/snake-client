// Stores the active TCP connection object.
const { connect } = require('./client');
const net = require('net');
const { conn } = require('./client');
let  connection;

const handleUserInput = (data) => { // -----> ends the connection by pressing 'ctrl+c'
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  stdin.on('data', comands)
  return stdin;
}

const comands = (data) => {
  let w;
  let a;
  let d;
  let s;
  if (data.toLowerCase() === w) {
    connection.write("Move: up");
  } else if (data.toLowerCase() === a) {
    connection.write("Move: left");
  } else if (data.toLowerCase() === s) {
    connection.write("Move: down");
  } else if (data.toLowerCase() === d) {
    connection.write("Move: right");
  }	
};



module.exports = { setupInput };