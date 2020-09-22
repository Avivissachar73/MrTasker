const utils = require('../util.service.js');

module.exports = {
    query,
    get,
    remove,
    save,
    insert,
    saveCollection,
    loadCollection
}

async function query(collectionName, filterBy = {}) {
    var items = await loadCollection(collectionName);
    if (!items || !items.length) {
        items = [];
        await saveCollection(collectionName, items);
    }
    return items;
}

async function get(collectionName, _id) {
    var items = await query(collectionName);
    return items.find(item => item._id === _id);
}

async function save(collectionName, item) {
    var items = await query(collectionName);
    if (item._id) {
        var idx = items.findIndex(currToy => currToy._id === item._id);
        if (idx === -1) throw new Error();
        items.splice(idx, 1, item);
    } else {
        item._id = utils.getRandomId();
        items.push(item);
    }
    await saveCollection(collectionName, items);
    return item;
}

async function insert(collectionName, items) {
    var collection = await query(collectionName);
    items.forEach(item => {
        item._id = utils.getRandomId();
        collection.push(item);
    });
    await saveCollection(collectionName, collection);
    return items;
}

async function remove(collectionName, _id) {
    var items = await query(collectionName);
    var idx = items.findIndex(item => item._id === _id);
    if (idx === -1) throw new Error();
    items.splice(idx, 1);
    await saveCollection(collectionName, items);
    return _id;
}



const fs = require('fs');

async function saveCollection(collectionName, collection) {
    const db = await _loadDb();
    db[collectionName] = collection;
    fs.writeFileSync('data/db.json', JSON.stringify(db, null, 2));
}

async function loadCollection(collectionName) {
    const db = await _loadDb();
    return db[collectionName];
}

function _loadDb() {
    return Promise.resolve(JSON.parse(fs.readFileSync('data/db.json')) || {});
}