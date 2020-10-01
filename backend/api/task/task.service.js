const dbService = require('../../services/db.service/index.js');
const utils = require('../../services/util.service.js');

const {getSocket} = require('../socket.service.js');

const KEY = 'task';

module.exports = {
    query,
    get,
    remove,
    save,

    tryTask
}

async function query(filterBy = {}) {
    var tasks = await dbService.query(KEY);
    if (!tasks || !tasks.length) {
        tasks = await dbService.insert(KEY, _getSomeTasks());
    }
    var tasksToSend = [...tasks];
    if (filterBy.searchStr) tasksToSend = tasksToSend.filter(task => task.name.toLowerCase().includes(filterBy.searchStr.toLowerCase()));
    return tasksToSend;
}

async function get(id) {
    return dbService.get(KEY, id);
}

async function save(task) {
    return dbService.save(KEY, task);
}

async function remove(id) {
    return dbService.remove(KEY, id);
}


function _getSomeTasks() {
    return [
        createTask('do this', 'wowowowow'),
        createTask('do that', 'WAWAWAW'),
    ];
}

function createTask(title, description) {
    return {
        _id: utils.getRandomId(),
        title,
        description,
        importance: 2,
        createdAt: Date.now(),
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    }
}


var taskQue = [
//     {
//     "_id": "W3L8WW2PVX-174B5C5D306",
//     "title": "do this",
//     "description": "wowowowow",
//     "importance": 3,
//     "createdAt": 1600777474819,
//     "lastTriedAt": null,
//     "triesCount": 0,
//     "doneAt": null
//   },
//   {
//     "_id": "J1E5RAX0CR-174B5C5D306",
//     "title": "do that",
//     "description": "WAWAWAW",
//     "importance": 2,
//     "createdAt": 1600777474819,
//     "lastTriedAt": null,
//     "triesCount": 0,
//     "doneAt": null
//   }
];


setInterval(tryTasks, 5000);


async function tryTask(id) {
    const task = await get(id);
    try {
        // console.log('trying in try task', task, id);
        await executeTask(task);
    } catch(err) {
        taskQue.push(task);
        // throw err;
    }
    return task;
}

async function tryTasks() {
    const task = (() => {
        taskQue.sort((task1, task2) => task2.importance - task1.importance);
        taskQue.sort((task1, task2) => task1.triesCount - task2.triesCount);
        if (taskQue.length) console.log(taskQue);
        else console.log('que is empty');
        return taskQue[0];
    })();
    if (!task) return;
    try {
        await executeTask(task);
        taskQue.shift();
    } catch(err) {
    }
}


async function executeTask(task) {
    task.triesCount++;
    task.lastTriedAt = Date.now();
    
    if (Math.random() > 0.5) task.doneAt = Date.now();

    await save(task);
    getSocket().emit('task-updated', task);

    // if (!task.doneAt) throw new Error('failed to execute task');
    // return task;
    if (task.doneAt) return task;
    throw new Error('failed to execute task');
}