var taskService = require('./task.service.js');

module.exports = {
    query,
    get,
    save,
    remove,

    tryTask
};

function query(req, res) {
    taskService.query(req.query)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).send(err));
}

function get(req, res) {
    var id = req.params.id;
    taskService.get(id)
        .then(task => res.json(task))
        .catch(err => res.status(500).send(err));
}

function save(req, res) {
    var task = req.body;
    taskService.save(task)
        .then(task => res.json(task))
        // .catch(err => res.status(500).send(err));
}

function remove(req, res) {
    var id = req.params.id;
    taskService.remove(id)
        .then(task => res.json(task))
        .catch(err => res.status(500).send(err));
}




async function tryTask(req, res) {
    const {id} = req.params;
    console.log('about to try!', id);
    try {
        const task = await taskService.tryTask(id);
        res.json(task);
    } catch(err) {
        res.status(500).send(err);
    }
}