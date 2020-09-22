const fs = require('fs');

module.exports = {
    getRandomId,
    getRandomInt,
    writeToFile,
    readFile
}


function writeToFile(path, items) {
    fs.writeFileSync(path, JSON.stringify(items, null, 2));
}

function readFile(path) {
    return Promise,resolve(fs.readFileSync(path));
}


function getRandomId() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var id = '';
    for (let i = 0; i < 10; i++) id += chars[getRandomInt(0, chars.length)];
    id += `-${Date.now().toString(16).toUpperCase()}`;
    return id;
}


function getRandomInt(min, max) {
    var maxNum = (min >= max)? min : max;
    var minNum = (min <= max)? min : max;
    return (Math.floor(Math.random()*(maxNum - minNum)) + minNum);
}
