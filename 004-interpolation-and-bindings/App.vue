<script setup>
const id = "blog-1"
const title = "This is title"
const description = '<p style="color:gray; font-size: 18px; font-family: arial">This is description</p>'

const isLoading = true
const button = { id: "1", disabled: isLoading }
const renderIsLoading = () => isLoading ? "Loading" : "Submit"
</script>

<template>
    <div :id="id">
        <div :style="{fontSize: '26px', fontFamily: 'arial'}">{{ title }}</div>
        <div v-html="description" />
        <button v-bind="button">{{ renderIsLoading() }}</button>
    </div>
</template>
