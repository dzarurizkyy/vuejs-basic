<script setup>
import { reactive } from 'vue';

const note = reactive({name: "", desc: "",gender: "",skills: []})
</script>

<template>
  <div :style="{display: 'inline-flex', flexDirection: 'column', gap: '10px'}">
    <div class="name" :style="{ display: 'flex', flexDirection: 'row', gap: '8px'}">
      <label for="name" >Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </label>
      <input type="text" v-model.lazy="note.name"/>
      <div>{{ note.name }}</div>
    </div>
    <div class="description" :style="{ display: 'flex', flexDirection: 'row', gap: '8px'}">
      <label for="desc">Description : </label>
      <textarea v-model.lazy="note.desc" />
      <div style="white-space: pre-line;">{{ note.desc }}</div>
    </div>
    <div class="gender" :style="{display: 'flex', flexDirection: 'row', gap: '4px'}">
        <label>Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        <div>
          <input type="radio" v-model.lazy="note.gender" value="male" />
          <label for="male">Male</label>
        </div>
        <div>
          <input type="radio" v-model.lazy="note.gender" value="female" />
          <label for="female">Female</label>
        </div>
        <div>&nbsp;({{ note.gender }})</div>
    </div>
    <div class="skills" :style="{display: 'flex', flexDirection: 'row', gap: '4px'}">
      <label>Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
      <div>
        <input type="checkbox" v-model.lazy="note.skills" value="front-end" />
        <label for="male">Front End</label>
      </div>
      <div>
        <input type="checkbox" v-model.lazy="note.skills" value="back-end" />
        <label for="female">Back End</label>
      </div>
      <div>&nbsp;&nbsp;{{ note.skills }}</div>
    </div>
  </div>
</template>