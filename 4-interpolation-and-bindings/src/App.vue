<script setup>
  import OptionComponent from './components/OptionComponent.vue'

  const id = 1
  const name = "Dzaru Rizky Fathan Fortuna"
  const title = "<span class='text-blue-500 font-semibold'>Job Candidates</span>"
  const button = { id: `candidate-${id}-button`, class: "flex gap-3" }
  const isButton = true
  const handleButton = isButton ? name : null
</script>

<template>
  <div :id="`candidate-${id}`" class="m-5">
    <div v-html="title"></div>
    <div class="text-xl font-semibold my-5">{{ handleButton }}</div>
    <div v-bind="button" v-if="handleButton">
      <OptionComponent />
      <CompositionComponent />
    </div>
  </div>
</template>
