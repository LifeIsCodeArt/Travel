<script setup>
import {useBenefitItemsStore} from '../stores/benefitItems.js'
import {computed} from "vue";

import TheHeader from "@/components/TheHeader.vue";
import ItemCount from "@/components/ItemsCount.vue"
import TheBenefits from "@/components/TheBenefits.vue"

const store = useBenefitItemsStore()

const benefitItems = computed(()=> store.BenefitItems)
</script>

<template>

    <section class="bg-travelImage bg-auto min-w-[120rem] h-[67.5rem] z-[10] relative">
        <div class="absolute min-w-[120rem] h-[67.5rem] bg-black opacity-25 z-[-1]"></div>
        <TheHeader class="z-[10]"></TheHeader>
        <div class="mt-[150px] mb-[300px] flex">
                <ItemCount/>
        </div>
        <div class="flex w-full pl-[277px]">
            <div class="w-[1225px] h-[210px] flex  items-center relative">
                <div class="absolute w-full h-full bg-black opacity-60 z-[-1]">

                </div>
                <div class="z-[10]  w-full  flex items-center justify-around">
                    <TheBenefits v-for="benefit in benefitItems" :benefit="benefit" :key="benefit.id"/>
                </div>
           </div>
           <div class="h-[210px]">
               <img src="../assets/images/beach-image.png" alt="" class="h-[210px] w-[417px]">
           </div>
        </div>
    </section>

    <section class="h-[764px] min-w-[120rem] bg-tutorialImage1">
        <div class="pt-[207px] flex">

            <img src="../assets/images/Tutorial/Tutorial-photo-1.png" alt="" class="">

            <div class="">

                <div class="">

                </div>

                <div class="">

                </div>

                <div class="">

                </div>

            </div>
        </div>
    </section>

    <section class="h-[871px] min-w-[120rem] bg-tutorialImage1">
        <div class="pt-[106px] flex">
            <div class="">
                <div class="">

                </div>

                <div class="">

                </div>

                <div class="">

                </div>

            </div>

            <img src="../assets/images/Tutorial/Tutorial-photo-2.png" alt="" class="">
        </div>
    </section>
</template>

<style scoped>

</style>