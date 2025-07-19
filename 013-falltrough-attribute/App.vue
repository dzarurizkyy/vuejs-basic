<script setup>
import { ref } from 'vue';
import MainButton from './components/MainButton.vue';

let counter = ref(0)
const increment = (value) => {
  counter.value += value
  console.log(counter.value)
}

</script>

<template>
  <MainButton class="my-button" @click="increment(5)" title="World"/>
</template>