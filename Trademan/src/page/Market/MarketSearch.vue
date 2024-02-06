<script setup lang="ts">
import Search from '@/components/Search.vue';
import { ref } from 'vue';
import StockTableVue from "./StockTable.vue";

let word = ref();
const search = () => {
        filteredStocks.value = props.stockInstockList?.filter((stock: any) => {
          return stock.StockSymbol.toLowerCase().includes(word.value.toLowerCase())
        });
    }
</script>
<template>
    <div class="container 2xl:w-[75%] xl:px-38 sm:mx-auto pb-20 pt-0.5">
        <div class="h-full mt-11">
            <div class="mx-auto">
                <div class="flex my-3 justify-between sm:flex-wrap text-sm font-bold relative">
                    <div class="flex text-[#9DA1AC]">
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 px-5">
                            <span class="m-auto">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" class="w-6 h-6 inline-block mr-2 fill-[#94a3b8]">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                                        1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                                        1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </span> 
                                Favourites
                            </span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> All</span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> SET</span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> SET50</span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> SET100</span>
                        </div><div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> Mai</span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> Warrant</span>
                        </div>
                        <div class="flex mr-2 rounded-xl cursor-pointer xl:py-2 sm:py-2 font-light px-5">
                            <span class="m-auto"> Derivative Warrant</span>
                        </div>
                    </div>
                    <div class="relative top-0 md:w-auto sm:w-full">
                        <Search @input="search" v-model="word"></Search>
                    </div>
                </div>

                <div class="w-full flex justify-between">
                    <div class="w-[82%]"></div>
                    <div class="w-[18%] mb-3 text-right flex justify-end">
                        <div class="mt-3 mr-2 text-[#AFB3BD] text-xs">แสดงจำนวนหุ้น :</div>
                            <div class="relative mt-1">
                                <button class="relative flex flex-nowrap w-full cursor-pointer rounded-md bg-transparent text-left pl-1 border-[#5F6672] border" >
                                    <span class="flex flex-nowrap">
                                        <span class="text-xs mt-1 pr-1 pl-1 font-normal text-[#AFB3BD]">10</span>
                                    </span>
                                    <span class="pointer-events-none items-center">
                                        <span class=" w-6 h-6 mt-0.5 flex rounded-md cursor-pointer duration-300">
                                            <svg mlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    aria-hidden="true" class="mt-1 w-4 h-4  fill-[#5F6672]">
                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </div>
                    </div>
                </div>
            <div class="relative">
                <StockTableVue></StockTableVue>
            </div>
            </div>
        </div>
    </div>

</template>