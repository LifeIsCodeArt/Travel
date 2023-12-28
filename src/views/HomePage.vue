<script setup>
import {useBenefitItemsStore} from '../stores/benefitItems.js'
import {computed} from "vue";

import TheHeader from "@/components/TheHeader.vue";
import ItemCount from "@/components/ItemsCount.vue"
import TheBenefits from "@/components/TheBenefits.vue"
import TheFooter from "@/components/TheFooter.vue"

const store = useBenefitItemsStore()

const benefitItems = computed(()=> store.BenefitItems)
</script>

<template>
  <div class="2xl:min-w-[1440px] margin flex flex-col items-center justify-center max-xl:min-w-[70rem] border-2 border-green-400">
    <section class="bg-travelImage w-full bg-no-repeat bg-auto h-[67.5rem] z-[10] relative bg-center  border-2 border-red-400">
        <div class="absolute min-w-full h-[67.5rem] bg-black opacity-25 z-[-1]"></div>
    <div class=" flex flex-col">
            <TheHeader class="z-[10]"></TheHeader>
            <div class="mt-[150px] mb-[300px] flex">
                  <ItemCount/>
            </div>
            <div class="flex min-w-full pl-[252px] max-xl:pl-0">
                <div class="2xl:min-w-[1225px] h-[210px] flex  items-center relative xl:min-w-[925px]">
                    <div class="absolute min-w-full h-full bg-black opacity-50 z-[-1]">

                    </div>
                    <div class="z-[10] w-full  flex items-center justify-around">
                        <TheBenefits v-for="benefit in benefitItems" :benefit="benefit" :key="benefit.id"/>
                    </div>
           </div>
           <div class="h-[210px] max-2xl:hidden flex items-center justify-center">
               <img src="../assets/images/beach-image.png" alt="" class="h-[210px] w-[417px]">
           </div>
        </div>
    </div>
    </section>

    <section class="h-[764px] min-w-full bg-tutorialImage1 bg-cover bg-no-repeat bg-center relative z-10 border-2 border-blue-400 max-xl:h-auto">
        <div class="absolute w-full h-full bg-[#010A20] opacity-90 z-[-1]"></div>

          <div class="pt-[207px] flex justify-center items-center max-xl:flex-col max-xl:pt-[100px] max-xl:pb-[100px]">

            <img src="../assets/images/Tutorial/Tutorial-photo-1.png" alt="" class="">

            <div class="flex flex-col w-[480px] ml-[130px] max-xl:ml-0 max-xl:items-center max-xl:mt-[30px]">

                <div class="text-[42px]  text-white font-roboto font-semibold max-xl:text-center">
                    The walkways of Indonesia spellbind
                </div>

                <div class="w-[407px] text-[18px] text-[#E0E0E0] font-roboto font-normal leading-[27px] mt-[10px] mb-[32px] max-xl:text-center">
                    Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.
                </div>

                <button class="w-[180px] py-[16px] px-[24px] text-[18px] text-white font-roboto font-normal leading-[27px] bg-[#DD2242] rounded-[32px]">
                    Learn More
                </button>

            </div>
          </div>
    </section>

    <section class="h-[871px] min-w-full bg-tutorialImage2 bg-cover bg-no-repeat bg-center relative z-10 border-2 border-black max-xl:h-auto">
        <div class="absolute w-full h-full bg-[#010A20] opacity-90 z-[-1]"></div>

        <div class="pt-[106px] flex justify-center items-center max-xl:flex-col max-xl:pt-[100px] max-xl:pb-[100px]">

                <div class="flex flex-col w-[480px] mr-[134px] max-xl:mr-0 max-xl:items-center max-xl:mb-[30px]">

                <div class="text-[42px] text-white font-roboto font-semibold max-xl:text-center">
                    Perfect beaches exude relaxation and fun
                </div>

                <div class="w-[407px] text-[18px] text-[#E0E0E0] font-roboto font-normal leading-[27px] mt-[10px] mb-[32px] max-xl:text-center">
                    Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.
                </div>

                <button class="w-[180px] py-[16px] px-[24px] text-[18px] text-white font-roboto font-normal leading-[27px] bg-[#DD2242] rounded-[32px]">
                    Learn More
                </button>

            </div>

            <img src="../assets/images/Tutorial/Tutorial-photo-2.png" alt="" class="">
        </div>
    </section>

    <section class="h-[1414px] min-w-full bg-exploreImage1 bg-no-repeat bg-center flex justify-center border-2 border-yellow-400">
            <h1 class="pt-[127px] font-semibold text-[50px] leading-[75px]">Explore Our Secrets</h1>
            <!--items for carousel-->
    </section>

    <section class="min-w-full h-[794px] bg-exploreImage1 bg-bottom bg-no-repeat relative z-[10] flex justify-center border-2 border-violet-400">
        <div class="absolute w-full h-full bg-[#020C21] opacity-90"></div>
        <div class="flex flex-col items-center pt-[201px] z-[10]">

            <h1 class="text-center text-[60px] text-white font-roboto font-semibold leading-[90px]">
                By The Numbers
            </h1>

            <div class="py-[39px] text-center text-[#E0E0E0] w-[484px] leading-[28px] text-[18px] font-roboto flex justify-center items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div class="flex">

              <div class="flex flex-col">

                  <div class="text-[42.13px] text-[#DD2242] text-center font-roboto font-semibold leading-[49px] pb-[18.5px]">
                      100+
                  </div>

                  <div class="w-[340px] text-[18px] text-[#E0E0E0] text-center font-roboto font-semibold leading-[28px] tracking-[0.5px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.
                  </div>
              </div>

              <div class="flex flex-col mx-[90px]">

                  <div class="text-[42.13px] text-[#DD2242] text-center font-roboto font-semibold leading-[49px] pb-[18.5px]">
                      43,000+
                  </div>

                  <div class="w-[377px] text-[18px] text-[#E0E0E0] text-center font-roboto font-semibold leading-[28px] tracking-[0.5px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo.
                  </div>

              </div>

              <div class="flex flex-col">

                  <div class="text-[42.13px] text-[#DD2242] text-center font-roboto font-semibold leading-[49px] pb-[18.5px]">
                      30+
                  </div>

                  <div class="w-[340px] text-[18px] text-[#E0E0E0] text-center font-roboto font-semibold leading-[28px] tracking-[0.5px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.
                  </div>

              </div>

            </div>
        </div>
    </section>
  
    <section class="min-w-full h-[821px] flex items-center justify-center relative max-2xl:w-0 max-2xl:min-w-full border-2 border-brown-400">

        <div class="absolute  bg-linesImage1">

        </div>

        <div class="absolute  bg-linesImage1">

        </div>

        <div class="flex flex-col items-center">

            <div class="w-[614px]  text-[#000000] text-center text-[42px] leading-[50px] font-semibold">
                Our hills and valleys are like nothing you’ve seen.
            </div>

            <div class="w-[470px] text-[#6F7787] text-center text-[18px] leading-[28px] tracking-[0.5px] mt-[32px] mb-[36px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor.
            </div>

            <button class="w-[180px] py-[16px] px-[24px] text-[18px] text-white font-roboto font-normal leading-[27px] bg-[#DD2242] rounded-[32px]">
                Learn More
            </button>

        </div>

    </section>

    <section class="min-w-full h-[1476px] bg-countryImage1 bg-no-repeat bg-cover bg-center relative z-[10] flex flex-col items-center border-2 border-orange-400 max-2xl:w-0 max-2xl:min-w-full">
        <div class="absolute min-w-full min-h-full bg-[#010A20] opacity-50 z-[-1]"></div>
      
        <div class="w-[1056px] pt-[142px] pb-[87.2px] text-white text-center text-[42px] leading-[50px] font-roboto font-semibold flex justify-center items-center">
            Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.
        </div>

        <div class="flex justify-center items-center mb-[125px]">
          <img src="@/assets/images/Country/country-people.png" alt="" class="">
        </div>

        <div class="flex justify-center ">

            <div class="flex">

                <img src="@/assets/images/Country/country-road.png" class="mr-[42px]">


                <div class="flex flex-col mr-[75px]">

                    <p class="text-[18px] text-white leading-[27px] pb-[15px] font-roboto font-semibold">
                        In The Country
                    </p>

                    <p class="text-[18px] w-[334px] text-white leading-[28px] tracking-[0.5px] font-roboto font-normal opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.
                    </p>

                </div>

            </div>

            <div class="flex ">

                <img src="@/assets/images/Country/country-city.png" class="mr-[42px]">

                <div class="flex flex-col">

                    <p class="text-[18px] text-white leading-[27px] pb-[15px] font-roboto font-semibold ">
                        In The City
                    </p>

                    <p class="text-[18px] w-[283px] text-white leading-[28px] tracking-[0.5px] font-roboto font-normal opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in.
                    </p>

                </div>

            </div>

        </div>

    </section>

    <section class="h-[1388px] min-w-full flex justify-center max-2xl:min-w-[80rem]">

        <div class="flex flex-col pt-[177px]">

            <h1 class="text-[#010A20] text-[60px] text-center leading-[90px] font-semibold">
                Photo Gallery
            </h1>

            <div class="text-center text-[18px] leading-[28px] text-[#6F7787] tracking-[0.18px] w-[511px] pt-[41.8px] pb-[71px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.
            </div>

            <div class="flex">

                <div class="w-[370px] flex flex-col">
                    <img src="../assets/images/Gallery/photo-gallery-1.png" alt="" class="pb-[30px]">

                    <img src="../assets/images/Gallery/photo-gallery-2.png" alt="" class="">

                </div>

                <div class="mx-[30px] w-[370px] flex flex-col">

                    <img src="../assets/images/Gallery/photo-gallery-3.png" alt="" class="pb-[30px]">

                    <img src="../assets/images/Gallery/photo-gallery-4.png" alt="" class="">

                </div>

                <div class="w-[370px] flex flex-col">

                    <img src="../assets/images/Gallery/photo-gallery-5.png" alt="" class="pb-[30px]">

                    <img src="../assets/images/Gallery/photo-gallery-6.png" alt="" class="w-[370px] h-[370px]">

                </div>

            </div>

        </div>

    </section>

    <section class="h-[1432px] min-w-full bg-[#DCE8F2] max-2xl:w-0 max-2xl:min-w-full">

        <div class="pt-[119px] pl-[387px] flex flex-col max-2xl:pl-[200px] max-xl:pl-0 max-2xl:pl-[30px]">

            <h1 class="text-[#010A20] text-[60px] leading-[90px]">
                Getting there
            </h1>

            <div class="mt-[60px]">

                <div class="relative flex flex-col pl-[50px] ml-[20px] h-[220px] border-l-2 border-[#15143966] relative">
                      
                    <div class="absolute bg-red-600 w-[45px] h-[45px] rounded-[50%] text-white text-[22px] leading-[37px] top-[-1px] left-[-23px] flex justify-center items-center">1</div>
                    
                    <div class="text-[26.4px] font-semibold text-[#010A20]">
                        Bookings your flights
                    </div>

                    <div class="w-[1038px] text-[23.4px] leading-[38.1px] mt-[28px] opacity-40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius.
                      Sed euismod orci dictum faucibus malesuada.
                      Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.
                    </div>

                </div>

              <div class="relative flex flex-col pl-[50px] ml-[20px] h-[540px] border-l-2 border-[#15143966] relative">

                  <div class="absolute bg-red-600 w-[45px] h-[45px] rounded-[50%] text-white text-[22px] leading-[37px] top-[-1px] left-[-23px] flex justify-center items-center">2</div>

                  <div class="text-[26.4px] font-semibold text-[#010A20]">
                      Bookings your flights
                  </div>

                  <div class="w-[1038px] text-[23.4px] leading-[38.1px] mt-[28px] mb-[94px] opacity-40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius.
                      Sed euismod orci dictum faucibus malesuada.
                      Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.
                  </div>

                  <div class="flex">

                      <img src="@/assets/images/motorcycle.jpg" alt="" class="w-[250px] h-[165px] rounded">

                      <div class="flex flex-col ml-[45.5px]">

                          <div class="text-[26.4px] font-semibold text-[#010A20]">
                              Bookings your flights
                          </div>

                          <div class="w-[446px] text-[23.4px] leading-[38.1px] mt-[12.9px] opacity-40">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus dapibus mauris in lectus tempus, eget tincidunt.
                          </div>

                      </div>
                  </div>

              </div>

                <div class="relative flex flex-col">

                </div>

            </div>

            <div class="relative flex flex-col pl-[50px] ml-[20px] relative">

                <div class="absolute bg-red-600 w-[45px] h-[45px] rounded-[50%] text-white text-[22px] leading-[37px] top-[-3px] left-[-22px] flex justify-center items-center">3</div>

                <div class="text-[26.4px] font-semibold text-[#010A20]">
                    Planning your experiences
                </div>

                <div class="w-[1008px] text-[23.4px] leading-[38.1px] mt-[28px] mb-[17px] opacity-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius.
                </div>

                <button class="w-[210px] h-[64px] py-[16px] px-[24px] text-[18px] text-white font-roboto font-normal leading-[27px] bg-[#DD2242] rounded-[32px]">
                    Learn More
                </button>

          </div>

        </div>

    </section>
    <TheFooter></TheFooter>
  </div>
</template>

<style scoped>
.margin{
  margin: 0 auto;
}
</style>