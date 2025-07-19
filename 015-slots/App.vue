<script setup>
import MainButton from './components/MainButton.vue';
</script>

<template>
  <MainButton>
    <template #header>
      <h1>Hello</h1>
    </template>
    <template #default="{title}">
      <div>{{ title }}</div>
    </template>
  </MainButton>
</template>