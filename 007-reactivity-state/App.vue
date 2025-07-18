<script setup>
import { ref, reactive } from "vue"

const count = ref(1)
const increment = () => count.value++
const user = reactive({ name: "Dzaru Rizky Fathan Fortuna", age: 22 })

</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '12px'}">
    <div>{{user.name}} ({{user.age}} years)</div>
    <div :style="{ display: 'flex', flexDirection: 'row', gap: '10px'}">
      <button @click="user.age++" :style="{ fontSize: '14px', cursor: 'pointer'}">Add</button>
      <button @click="increment" :style="{ fontSize: '14px', cursor: 'pointer'}">{{ count }}</button>
    </div>
  </div>
</template>
