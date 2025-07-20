<script setup>
import {ref} from "vue"
import MainButton from './components/MainButton.vue';

const disable = ref(false)
const toggledisable = () => disable.value = !disable.value
</script>

<template>
  <MainButton title="Click" :disabled="disable" @click="toggledisable" />
</template>