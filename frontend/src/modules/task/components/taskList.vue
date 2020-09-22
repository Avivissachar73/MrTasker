<template>
    <ul class="flex container wrap align-center space-around clean-list">
        <li v-for="task in tasks" :key="task._id" class="flex column">
            <router-link :to="'/task/'+task._id">
                <task-preview :task="task">
                    <div @click.stop.prevent="() => false" class="actions width-all flex align-center space-between">
                        <router-link :to="'/task/edit/'+task._id">Edit</router-link>
                        <button class="remove-btn" @click="execute(task._id)">execute</button>
                        <button class="remove-btn" @click="remove(task._id)">Remove</button>
                    </div>
                </task-preview>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import taskPreview from './taskPreview';

    export default {
        name: 'task-list',
        props: ['tasks'],
        methods: {
            remove(id) {
                this.$emit('remove', id);
            },
            execute(id) {
                this.$emit('execute', id);
            }
        },
        components: {
            taskPreview
        }
    }
</script>



<style lang="scss">
    li {
        border: 1px solid black;
        margin: 2px;
        padding: 3px;
        border-radius: 3px;
    }
</style>