const utils = require('../services/util.service.js');


module.exports = {
    setSocket,
    getSocket,
    connectSockets
};

var socket = null;

function setSocket(io) {
    socket = io;
}

function getSocket() {
    return socket;
}

function connectSockets(io) {
    io.on('connection', socket => {
        console.log('new client..');
    });    
}