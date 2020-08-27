const net = require('net');
const { setupInput } = require('./input');

let connection;

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  const time = 300;
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('data',(data) => {
    console.log("Successfully connected to game server");
  })
  conn.on('connect', () => {
    conn.write('Name: AAA');
  });
  conn.on('connect', () => {
    let w = conn.write ('Move: up');
    let d = conn.write ('Move: right');
    let a = conn.write ('Move: left');
    let s = conn.write ('Move: down');
  })
 
  return conn;
};

console.log('Connecting ...');
connect();

setupInput(connection);
module.exports = {connect};