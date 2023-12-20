<script setup>
const props = defineProps({
  benefit: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
    <div class="flex flex-col min-w-[210px]">
        <div class="text-[#DD2242] text-[16px] font-bold">
            0{{benefit.id}}
        </div>

        <div class="text-white text-[26.4px] font-roboto font-semibold mt-[14px]">
            {{benefit.title}}
        </div>

        <div class="text-[#939393] text-[18px] font-roboto font-normal leading-[28px]" v-html="benefit.text.replaceAll('\n', '<br>')"></div>

    </div>
</template>

<style scoped>

</style>