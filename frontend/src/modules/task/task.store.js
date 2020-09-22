'use strict';

import taskService from './task.service.js';
import {utils} from '../../services/utils.service.js';

export default {
    state: {
        tasks: [],
        currTask: null,
        filterBy: {
            searchStr: ''
        }
    },
    getters: {
        tasksToShow(state) {
            var filterBy = state.filterBy;
            var tasksToShow = [...state.tasks];
            if (filterBy.searchStr) {
                tasksToShow = tasksToShow.filter(task =>  utils.deepSearch(task, filterBy.searchStr));
            }
            return tasksToShow;
        }
    },
    mutations: {
        setTasks(state, {tasks}) {
            state.tasks = tasks;
        },
        setTask(state, {task}) {
            state.currTask = task;
        },
        saveTask(state, {task}) {
            console.log('got task', task);
            var idx = state.tasks.findIndex(curr => curr._id === task._id);
            if (idx === -1) state.tasks.push(task);
            else state.tasks.splice(idx, 1, task);
        },
        removeTask(state, {id}) {
            var idx = state.tasks.findIndex(task => task._id === id);
            if (idx === -1) throw new Error('something went wrong removing task');
            state.tasks.splice(idx, 1);
        },
        executeTask(state, {id}) {
            var idx = state.tasks.findIndex(task => task._id === id);
            if (idx === -1) throw new Error('something went wrong removing task');
            state.tasks.splice(idx, 1);
        },
        setTaskFilter(state, {filterBy}) {
            state.filterBy = JSON.parse(JSON.stringify(filterBy));
        }
    },
    actions: {
        async loadTasks(context) {
            var tasks = await taskService.query();
            context.commit({type: 'setTasks', tasks});
            return tasks;
        },
        async getTask(context, {id}) {
            var task = await taskService.get(id);
            context.commit({type: 'setTask', task});
            return task;
        },
        async removeTask(context, {id}) {
            await taskService.remove(id);
            context.commit({type: 'removeTask', id});
            return id;
        },
        async saveTask(context, {task}) {
            console.log('saving!!!!!!!!!!!!!!', task);
            task = await taskService.save(task);
            context.commit({type: 'saveTask', task});
            return task;
        },
        async executeTask(context, {id}) {
            const task = await taskService.execute(id);
            console.log('in dispatch store:', task);
            context.commit({type: 'saveTask', task});
            return id;
        },
    }
}