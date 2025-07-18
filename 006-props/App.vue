<script setup>
import MainButton from './components/MainButton.vue'
</script>

<template>
  <div :style="{ display: 'flex', gap: '6px' }">
    <MainButton :title="`Submit`" :style="{cursor: 'pointer'}" />
    <MainButton :title="`Test`" :disabled="true" :style="{cursor: 'pointer'}"/>
    <MainButton :style="{cursor: 'pointer'}"/>
  </div>
</template>
