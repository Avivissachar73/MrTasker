'use strict';

import {dbService} from '../../services/db-service.js';
import {httpService} from '../../services/http.service.js';

const KEY = 'task';

export default {
    query,
    get,
    remove,
    save,
    // getEmptyTask,

    execute
}

function makeEndpoint(id) {
    return (id)? `${KEY}/${id}` : KEY;
}

async function query() {
    // var tasks = await dbService.query(KEY);
    var tasks = await httpService.get(KEY);
    return tasks;
}

function get(id) {
    if (!id) return _createTask();
    // return dbService.get(KEY, id);
    return httpService.get(makeEndpoint(id));
}

function remove(id) {
    // return dbService.delete(KEY, id);
    return httpService.delete(makeEndpoint(id));
}

function save(task) {
    const action = (task._id)? 'put' : 'post';
    // return dbService[action](KEY, task);
    return httpService[action](makeEndpoint(task._id), task);
}


function execute(id) {
    console.log('in service,', `${KEY}/start/${id}`);
    return httpService.post(`${KEY}/${id}/start`);
}


// function getEmptyTask() {
//     return _createTask();
// }


function _createTask(title = '', description = '', importance = 1) {
    return {
        title,
        description,
        importance,
        createdAt: Date.now(),
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    }
}