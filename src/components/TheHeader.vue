<script setup>
import {useMenuItemsStore} from '../stores/menuItems.js'
import {computed} from "vue";

import TheNavigation from '../components/TheNavigationItem.vue'

const store = useMenuItemsStore()
const items = computed(()=> store.MenuItems)
</script>

<template>

  <div class="min-w-[120rem]  max-xl:min-w-[64rem] max-sm:min-w-[39rem] pt-[24px]">
    <div class="bg-inherit container w-full min-w-[120rem] pl-[30px] flex items-center  max-xl:min-w-[64rem] max-xl:px-2 max-sm:w-0 max-sm:min-w-[38.87rem]">
      <div class="flex justify-center items-center pr-[78px]">
          <img src="../assets/icons/Header%20icons/flower.png" alt="" class="w-[49px] h-[49px]">
          <img src="../assets/icons/Header%20icons/Explore%20Indonesia%20Header.png" alt="" class="w-[128px] h-[42.7px]">
      </div>
      <nav class="">
        <ul class="flex w-[572px] items-center justify-between  mr-[842.5px] max-xl:hidden">
          <TheNavigation v-for="item in items" :key="item.id" :nav="item"></TheNavigation>
        </ul>
        <button class="h-[3.2rem] flex items-center justify-center xl:hidden text-white">
          <img src="../assets/icons/menu.svg"  alt="" class="w-[2.2rem] h-full">
        </button>
      </nav>
      <div class="flex items-center justify-end max-xl:hidden">
        <img src="../assets/icons/Header%20icons/Search.png" alt="" class="w-[24px] h-[24px] mr-[40.9px]">
        <img src="../assets/icons/Header%20icons/Vector.png" alt="" class=" w-[18px] h-[12px]">
      </div>
    </div>
  </div>

</template>

<style scoped>
.container{
  max-height: 5rem;
}


</style>