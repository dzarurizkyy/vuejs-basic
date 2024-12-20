<script setup>
    const role = "Junior Web Developer"
    const handleRole = () => console.log(role)
</script>

<template>
    <button @click="handleRole">Role</button>
</template>

<style scoped>
    button {
        cursor: pointer;
    }
</style>