<script setup>
const { title, disabled } = defineProps({
  title: {
    type: String,
    default: "Title"
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :disabled="disabled" class="button" :class="{disabled: disabled}">{{ title }}</button>
</template>

<style scoped>
  .button {
    color: white;
    border: none;
    font-size: 16px;
    padding: 10px 15px;
    background-color: salmon;
  }

  .disabled {
    background-color: grey;
  }
</style>