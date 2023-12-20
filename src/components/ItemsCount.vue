<script setup>
import {useMenuItemsStore} from '../stores/menuItems.js'
import ItemLine from '../components/ItemLine.vue'
import {computed, ref} from "vue";

const store = useMenuItemsStore()
const items = computed(()=> store.countItems)


const currentItemId = ref(1)
</script>


<template>
    <div class="h-[334px] flex">

        <div class="flex flex-col pl-[71px] pr-[204px]">
            <div class="flex flex-col">
              <ItemLine v-for="item in items" :class="{'w-[2px] text-white bg-white transition-1000':item.id !== currentItemId,
                                    'w-[4px] text-white bg-red-500 pointer-events:none transition-1000':item.id === currentItemId}"
                        @click="currentItemId = item.id"></ItemLine>
            </div>

            <div class="text-white flex items-center justify-center -rotate-90 pb-4">
             0{{currentItemId}}
            </div>

        </div>

        <div class="flex flex-col pb-[30px]">
            <div class="text-roboto text-white font-bold text-[120px] leading-[130px] uppercase flex items-start justify-start" v-html="items[currentItemId-1].description.replaceAll('\n', `<br>`)">

            </div>
            <button class="w-[272px] px-[64px] py-[26px] bg-[#DD2242] text-[20px] text-white font-roboto font-normal rounded-[211px] mb-[21px]">
                Start travelling
            </button>
        </div>

    </div>
</template>

<style scoped>

</style>