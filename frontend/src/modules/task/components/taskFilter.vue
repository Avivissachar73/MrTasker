<template>
    <form container @submit.prevent="filter">
        <input type="text" placeholder="search?" v-model="filterBy.searchStr"/>
    </form>
</template>

<script>
    export default {
        name: 'task-filter',
        data() {
            return {
                filterBy: {
                    searchStr: ''
                }
            }
        },
        methods: {
            filter() {
                this.$emit('filter', {...this.filterBy});
            }
        },
        watch: {
            filterBy: {
                handler() {
                    this.filter();
                },
                deep: true
            }
        }
    }
</script>