const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('data',(data) => {
    console.log("Successfully connected to game server");
  })
  conn.on('connect', () => {
    conn.write('Name: ___');
  });
  return conn;
};

console.log('Connecting ...');
connect();


module.exports = {connect};