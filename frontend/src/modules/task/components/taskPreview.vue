<template>
    <section clas="task-preview column-layout">
        <pre>{{task}}</pre>
        <slot/>
    </section>
</template>

<script>
    export default {
        name: 'task-preview',
        props: ['task']
    }
</script>
