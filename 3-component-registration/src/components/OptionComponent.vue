<script>
export default {
    data() {
        return {
                experience: "1 years"
            }
    },
    methods: {
        handleExperience() {
            console.log(this.experience)
        }
    }
}
</script>

<template>
    <button @click="handleExperience">Experience</button>
</template>

<style scoped>
    button {
        cursor: pointer;
    }
</style>