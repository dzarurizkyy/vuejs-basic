<script setup>
const {title, disabled} = defineProps(
    {
        title: {
            type: String,
            default: "Button",
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
)
</script>

<template>
    <button :disabled="disabled"  :style="{cursor: 'pointer'}">{{ title }}</button>
</template>