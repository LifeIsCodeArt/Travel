<script setup>
import {defineProps} from "vue";
const props = defineProps({
  nav: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <li class="w-auto"><a href="" class="text-[1rem] leading-[3.75rem] tracking-[0.035rem] font-normal text-white uppercase ">{{nav.name}}</a></li>
</template>

<style scoped>

</style>