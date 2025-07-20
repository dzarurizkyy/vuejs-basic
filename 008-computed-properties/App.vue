<script setup>
import { computed, reactive, ref } from "vue"

let counter = ref(0)
const author = reactive({
  name: "JK Rowling",
  books: [
    "Harry Potter 1",
    "Harry Potter 2"
  ]
})

const isPublished = computed(() => {
  console.log(author.books)
  return author.books.length > 0 ? "Published yes" : "Published no"
})
</script>

<template>
  <div :style="{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }">
    <div>{{ isPublished }}</div>
    <div :style="{display: 'flex', gap: '4px'}">
      <button @click="counter++">{{ counter }}</button>
      <button @click="author.books.push('Harry Potter 3')">Add Book</button>
    </div>
  </div>
</template>
