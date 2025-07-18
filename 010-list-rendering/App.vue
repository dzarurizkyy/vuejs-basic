<script setup>
import { reactive } from "vue"

const author = reactive({
  name: "JK Rowling",
  books: [
    {
      title: "Harry Potter 1",
      releaseDate: "1990",
      reviews: [5, 4, 5],
      averageReviews: 4.6
    },
    {
      title: "Harry Potter 2",
      releaseDate: "2000",
      reviews: [6, 7, 8],
      averageReviews: 7
    }
  ]
})
</script>

<template>
  <div :style="{display: 'flex', flexDirection: 'column', gap: '8px'}">
    <!-- Nested Loop -->
    <div :class="container1">
      <div :style="{fontWeight: '900', fontSize: '20px'}">Books:</div>
      <div v-for="({title, releaseDate, reviews}, index) in author.books" :key="`book-${index}`" :style="{display: 'flex'}">
        <div>&nbsp; - {{ title }} ({{ releaseDate }})</div>&nbsp; | &nbsp; Reviews: &nbsp;
        <span v-for="(review, reviewIndex) in reviews" :key="`review-${reviewIndex}`">[{{ review }}]</span>
      </div>
      <hr />
    </div>
    <!-- Object Values  -->
    <div :class="container2">
      <div v-for="(data, key, index) in author" :key="key" :style="{display: 'flex'}">{{ index+1 }}. {{ key }}: {{ data }}</div>
      <hr />
    </div>
    <!-- Range Function -->
    <div :class="container3">
      <span v-for="(item, index) in 10" :key="index" >{{ item }}</span>
      <hr />
    </div>
    <!-- Combination v-for with v-if -->
    <div :class="container4">
      <div v-for="(data, index) in author.books" :key="index">
        <div v-if="data.averageReviews > 5">{{ data.title }} ({{ data.releaseDate }})</div>
      </div>
    </div>
  </div>
</template>
