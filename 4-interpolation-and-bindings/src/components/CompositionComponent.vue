<script setup>
    const role = "Junior Web Developer"
    const handleRole = () => console.log(role)
</script>

<template>
    <button @click="handleRole" class="w-28 rounded-md bg-blue-500 py-2 px-4 border border-transparent text-center text-sm text-white font-semibold transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
       Role
    </button>
</template>