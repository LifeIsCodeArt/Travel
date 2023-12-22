<script setup>
const props = defineProps({
  path: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>
    <button class="flex justify-center items-center">
        <img :src="path.imageLink" :alt="path.description" class="">
    </button>
</template>

<style scoped>

</style>