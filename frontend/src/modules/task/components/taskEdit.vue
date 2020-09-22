<template>
    <div>
        <section class="task-edit flex column align-center justify-center">
            <button to="/task" class="close-btn" @click="close">X</button>
            <h2>{{titleMsg}}</h2>
            <form class="column-layout" v-if="task" @submit.prevent="saveTask">
                <input type="text" placeholder="title" v-model="task.title"/>
                <input type="text" placeholder="description" v-model="task.description"/>
                <input type="number" placeholder="importance" v-model.number="task.importance"/>
                <button>Save</button>
            </form>
        </section>
        <div class="screen" @click="close"></div>
            
    </div>
</template>


<script>
    // import taskService from '../task.service.js';
    // import eventBus from '../../../services/eventBus.service.js';

    export default {
        name: 'task-edit',
        data() {
            return {
                task: null
            }
        },
        computed: {
            titleMsg() {
                if (this.$route.params._id) return 'Edit Task!';
                else return 'Add new Task!';
            }
        },
        methods: {
            async loadTask() {
                var id = this.$route.params._id;
                // this.task = await taskService.get(id);
                this.task = {...await this.$store.dispatch({type: 'getTask', id})};
            },
            async saveTask() {
                // var task = await taskService.save(this.task);
                var task = await this.$store.dispatch({type: 'saveTask', task: this.task});
                // eventBus.$emit('task-saved', task);
                this.close();
            },
            close() {
                this.$router.push('/task');
            }
        },
        created() {
            this.loadTask();
        },
        watch: {
            '$route.params._id'() {
                this.loadTask();
            }
        }
    }
</script>


<style lang="scss">
    .screen {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        opacity: 0.2;
        background-color: black;
        z-index: 5;
    }
    .task-edit {
        position: fixed;
        right: 50%;
        top: 20vh;
        transform: translate(50%, 0);
        background-color: antiquewhite;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid black;
        z-index: 10;
    }
    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>