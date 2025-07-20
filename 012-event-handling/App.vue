<script setup>
import { ref } from "vue"

const count = ref(0)
function handleEnter(event) { console.log(event.target.value) }
</script>

<template>
  <div :style="{display: 'inline-flex', flexDirection: 'row', gap: '10px'}">
    <button @mouseover="count+=5" :style="{fontSize: '25px', padding: '0px 10px', cursor: 'pointer'}">
      {{ count }}
    </button>
    <input type="number" @keydown.enter="handleEnter" :style="{height: '30px'}"/>
  </div>
</template>