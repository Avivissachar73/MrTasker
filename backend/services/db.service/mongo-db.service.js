const MONGO = require('mongodb');
const MongoClient = MONGO.MongoClient;
const ObjectId = MONGO.ObjectId;


const dbName = 'ToysAreArss';    //fill your db name;
// const dbURL = 'mongodb://localhost:27017';

const username = 'Aviv'; //fill your Atlas info;
const password = '12345';
const dbURL = `mongodb+srv://${username}:${password}@cluster0.xat2q.mongodb.net/${dbName}?retryWrites=true&w=majority`;

var dbConn = null;
async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}
async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(dbURL, {useNewUrlParser: true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}





module.exports = {
    query,
    get,
    remove,
    save,
    insert
}

async function query(collectionName, filterBy = {}) {
    const collection = await getCollection(collectionName);
    var items = await collection.find(filterBy).toArray();
    return items;
}

async function get(collectionName, id) {
    const collection = await  getCollection(collectionName)
    const item = await collection.findOne({"_id":ObjectId(id)});
    return item;
}

async function save(collectionName, item) {
    const collection = await getCollection(collectionName)
    if (item._id){
        item._id = ObjectId(item._id);
        await collection.updateOne({"_id":ObjectId(item._id)}, {$set : item});
        return item;
    }
    await collection.insertOne(item);
    return item;
}

async function remove(collectionName, id) {
    const collection = await getCollection(collectionName);
    await collection.deleteOne({"_id":ObjectId(id)});
    return id
}

async function insert(collectionName, items) {
    const collection = await getCollection(collectionName);
    await collection.insertMany(items);
    return items;
}
