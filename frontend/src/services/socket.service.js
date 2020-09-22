import io from 'socket.io-client';

const BASE_URL = process.env.NODE_ENV === 'production' ?
                 '/' :
                 '//localhost:3030';

// var socket = null;
var socket = io(BASE_URL);

export const socketService = {
    on,
    emit,
    off,
    // setup
}

function on(evName, cb) {
    socket.on(evName, cb);
}

function emit(evName, ...args) {
    socket.emit(evName, ...args);
}

function off(evName, cb) {
    socket.off(evName, cb);
}

// function setup() {
//     socket = io(BASE_URL)
// }