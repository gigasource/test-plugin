<template>
    <v-btn :flat='flat'>{{text}}</v-btn>
</template>

<script>
    export default {
        name: "GButton",
        props: ['text', 'flat']
    }
</script>

<style scoped>

</style>