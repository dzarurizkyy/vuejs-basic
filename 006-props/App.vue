<script setup>
import MainButton from './components/MainButton.vue'
</script>

<template>
  <div :style="{ display: 'flex', gap: '6px' }">
    <MainButton :title="`Submit`"/>
    <MainButton :title="`Test`" :disabled="true"/>
    <MainButton />
  </div>
</template>
