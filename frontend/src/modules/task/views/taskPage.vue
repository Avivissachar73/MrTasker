<template>
    <main class="app-main flex column align-center ">
        <h2>Tasks!</h2>
        <div class="actions flex align-center space-around width-all">
            <router-link to="/task/edit">Add Task!</router-link>
            <task-filter @filter="setFilter"></task-filter>
        </div>

        <task-list :tasks="tasksToShow" @remove="removeTask" @execute="executeTask"/>

        <router-view/>  
    </main>
</template>

<script>
    import taskList from '../components/taskList';
    import taskFilter from '../components/taskFilter';

    import {socketService} from '../../../services/socket.service.js';

    export default {
        name: 'task-page',
        computed: {
            tasksToShow() {
                return this.$store.getters.tasksToShow;
            }
        },
        methods: {
            async loadTasks() {
                this.$store.dispatch('loadTasks');
            },
            addTask(task) {
                return this.$store.dispatch({type: 'saveTask', task});
            },
            setFilter(filterBy) {
                this.$store.commit({type: 'setTaskFilter', filterBy});
            },
            async removeTask(id) {
                this.$store.dispatch({type: 'removeTask', id});
            },
            async executeTask(id) {
                this.$store.dispatch({type: 'executeTask', id});
            },

            saveTask(task) {
                console.log('wowowoowowwo', task);
                this.$store.commit({type: 'saveTask', task});
            }
        },
        created() {
            this.loadTasks();
            socketService.on('task-updated', this.saveTask);
        },
        destroyed() {
            socketService.off('task-updated', this.saveTask);
        },
        components: {
            taskList,
            taskFilter
        }
    }
</script>