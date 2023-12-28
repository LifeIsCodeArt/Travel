<script setup>
import {useMenuItemsStore} from '../stores/menuItems.js'
import {computed} from "vue";

import TheNavigation from '../components/TheNavigationItem.vue'
import FooterIconItem from '../components/FooterIconItem.vue'

const store = useMenuItemsStore()
const items = computed(()=> store.MenuItemsFooter)
const icons = computed(()=> store.footerIcons)
</script>


<template>

    <div class="w-full max-2xl:min-w-full max-2xl:w-0 max-sm:min-w-[39rem] border-2 border-red-400">
      <div class="bg-[#010A20] container min-w-full min-w-[120rem] pl-[70px] pr-[153px] flex items-center  max-2xl:min-w-full max-2xl:w-0 max-2xl:pr-0 max-2xl:pl-0 max-xl:mr-0
       max-sm:w-0 max-sm:min-w-[38.87rem] border-2 border-yellow-400">
        <div class="flex justify-center items-center ">
          <img src="@/assets/icons/Footer-logo.png" alt="" class="w-[174px] h-[65px] 2xl-max:min-w-[100px]">
        </div>
        <nav class="">
          <ul class="flex w-[400px] items-center justify-between ml-[124px]  mr-[720.5px] max-xl:hidden">
            <TheNavigation v-for="item in items" :key="item.id" :nav="item"></TheNavigation>
          </ul>
          <button class="h-[3.2rem] flex items-center justify-center xl:hidden text-white">
            <img src="../assets/icons/menu.svg"  alt="" class="w-[2.2rem] h-full">
          </button>
        </nav>

        <div class="flex justify-between items-center w-[104px]">
            <FooterIconItem v-for="icon in icons" :path="icon" />
        </div>

        <div class="flex items-center pl-[42px] justify-end text-[15px] text-white leading-[28px] tracking-[0.5px] font-semibold font-roboto max-2xl:hidden">
            Copyright © 2019
        </div>

      </div>
    </div>

  </template>


<style>
.container{
  height: 136px;
}
</style>