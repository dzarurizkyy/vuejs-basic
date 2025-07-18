<script setup>
const idBlog = "blog-1"
const title = "This is title"
const description = '<p style="color:gray; font-size: 18px; font-family: arial">This is description</p>'

const isLoading = true
const button = { id: "1", disabled: isLoading }
const url = {attr: 'href', link: '/home'}
const renderIsLoading = () => {
    if (isLoading) {
        return "Loading"
    } else {
        return "Submit"
    }
}
</script>

<template>
    <a :id="idBlog" :[url.attr]="url.link" :style="{textDecoration: 'none'}">
        <div :style="{fontSize: '26px', display: 'flex', flexDirection: 'column', color: 'black', fontFamily: 'arial'}">
            {{ title }}
        </div>
        <div v-html="description" />
        <button v-bind="button">{{ renderIsLoading() }}</button>
    </a>
</template>
