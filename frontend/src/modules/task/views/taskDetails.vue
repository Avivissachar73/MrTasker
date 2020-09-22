<template>
    <main class="app-main flex column align-center justify-center">
        <h2>Task!</h2>
        <pre v-if="task">{{task}}</pre>
    </main>
</template>

<script>
    export default {
        name: 'task-details',
        data() {
            return {
                task: null
            }
        },
        methods: {
            async loadTask() {
                var id = this.$route.params._id;
                this.task = await this.$store.dispatch({type: 'getTask', id});
                console.log(this.task);
            }
        },
        created() {
            this.loadTask()
        },
        watch: {
            '$route.params._id'() {
                this.loadTask()
            }
        }
    }
</script>