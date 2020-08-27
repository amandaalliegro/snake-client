const net = require('net');
const { connect } = require('./client');
const { conn } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connection = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 *
 */


setupInput(connection);