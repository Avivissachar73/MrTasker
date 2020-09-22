const router = require('express').Router();

const taskController = require('./task.controller.js');

// const {requireUser, requireAdmin} = require('../requireAuth.service.js');

const API = '';


router.get(API, taskController.query);

router.get(API + '/:id', taskController.get);

router.post(API, taskController.save);

router.put(API + '/:id', taskController.save);

router.delete(API + '/:id', taskController.remove);


router.post('/:id/start', taskController.tryTask);
// router.post('start/:id', (req, res) => {
//     console.log('starting?');
//     return taskController.tryTask(req, res);
// });

module.exports = router;

