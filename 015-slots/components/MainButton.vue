<script setup>
</script>

<template>
  <button class="button">
    <div v-if="$slots.header">
      <slot name="header" />
    </div>
    <div>
      <slot :title="'World'">Submit</slot>
    </div>
  </button>
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