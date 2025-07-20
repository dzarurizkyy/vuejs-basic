<script setup>
const id = "blog-1"
const title = "This is title"
const url = {attr: 'href', link: '/home'}
const description = '<p style="color:gray; font-size: 18px; font-family: arial">This is description</p>'
</script>

<template>
    <a :id="id" :[url.attr]="url.link" :style="{textDecoration: 'none', color: 'black'}">
        <div :style="{fontSize: '26px',  fontFamily: 'arial'}">{{ title }}</div>
        <div v-html="description" />
        <button>Submit</button>
    </a>
</template>
