<script setup>
import MainButton from './components/MainButton.vue';
</script>

<template>
  <MainButton>
    <template #default="{title}">
      <div>{{ title }}</div>
    </template>
    <template #header>
      <h1>Hello</h1>
    </template>
  </MainButton>
</template>