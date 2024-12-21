<script>
export default {
    data() {
        return {
            experience: "1 years",
            dir: {
                attr: "class",
                style: "w-28 rounded-md bg-blue-500 py-2 px-4 border border-transparent text-center text-sm text-white font-semibold transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            }
        }
    },
    methods: {
        handleExperience() {
            console.log(this.experience)
        }
    }
}
</script>

<template>
    <button @click="handleExperience" :[dir.attr]="dir.style">
        Experience
    </button>
</template>