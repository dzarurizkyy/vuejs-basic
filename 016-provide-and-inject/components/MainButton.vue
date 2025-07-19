<script setup>
import { inject } from 'vue';
const nameManage = inject("name")
</script>

<template>
  <div>{{ nameManage.name }}</div>
  <br />
  <button @click="nameManage.updateName">Update Name</button>
</template>
