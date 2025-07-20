<script setup>
import { provide, ref } from 'vue';
import MainButton from './components/MainButton.vue';

const name = ref("Dzaru")
const updateName = () => name.value = "Dzaru Rizky Fathan Fortuna"
provide("name", {name, updateName})
</script>

<template>
  <MainButton />
</template>