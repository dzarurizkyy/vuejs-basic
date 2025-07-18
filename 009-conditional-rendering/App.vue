<script setup>
import { reactive } from "vue"
const author = reactive({
  name: "JK Rowling",
  books: []
})
</script>

<template>
  <div>
      <div :style="{ 'fontSize': '20px', 'fontWeight': '900' }">{{ author.name }}</div>
      <div v-if="author.books.length > 1">Have more than one book</div>
      <div v-if="author.books.length === 1">Have a book</div>
      <div v-if="author.books.length === 0">Don't have a book</div>
  </div>
</template>
