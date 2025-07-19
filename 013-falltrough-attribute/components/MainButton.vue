<script setup>
import { useAttrs } from 'vue';

// defineOptions({inheritAttrs: false})
const { title } = defineProps({ title: { type: String, default: "Title" } })
const attrs = useAttrs()
</script>

<template>
  <span @click="attrs.onClick">Hello &nbsp;</span>
  <button class="button" :class="attrs.class">{{ title }}</button>
</template>

<style scoped>
  .button {
    color: white;
    border: none;
    font-size: 16px;
    padding: 8px;
    background-color: grey;
  }
</style>