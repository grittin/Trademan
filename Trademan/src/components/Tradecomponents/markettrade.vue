<script setup lang="ts">
import { changetextcolor } from '@/utilities/changetextcolor';
import type {TLastsale, TStockInformation, TBestbidoffer} from "@/type/loadstock"
import type { PropType } from 'vue';

const props = defineProps({
    lastsale: {
        type: Array as PropType <TLastsale[]>
    },
    stockinmarkettrade: {
        type: Object as PropType <TStockInformation[]>
    }
})

</script>
<template>
    <div class="h-full w-full border border-l-0
                border-[#5f6672] border-opacity-25">
                <div class="text-sm font-ibm-plex-sans text-white text-navbarTxtBlack border-t-0.5 border-headerGray dark:border-opacity-25 py-2 px-3">Market Trade</div>
                <div class="relative w-full font-ibm-plex-sans">
                    <div class="text-sm text-[#94a3b8]
                                relative top-0 left-0 w-full
                                flex h-[38px] border-0 mt-0.5">
                        <div class="p-3 text-xs w-[25%]">
                            <div class="flex justify-start">Price</div>
                        </div>
                        <div class="p-3 text-xs w-[25%] ">
                            <div class="flex justify-center">Side</div>
                        </div>
                        <div class="p-3 text-xs w-[25%]">
                            <div class="flex justify-end">Volume</div>
                        </div>
                        <div class="p-3 text-xs w-[25%]">
                            <div class="flex justify-end">Time</div>
                        </div>
                    </div>

                    <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[350px] scrollbar">
                        
                                <div v-for="item in lastsale" class="border-0 flex cursor-pointer select-none text-white">
                                    <div :class="changetextcolor(item?.Price, stockinmarkettrade?.PriorClosePrice, stockinmarkettrade?.Ceiling, stockinmarkettrade?.Floor)" class="text-xs pl-3 py-1.5 w-1/3 pr-3">
                                        {{item?.Price}}
                                    </div>
                                    <div class="text-xs text-center py-1.5 w-1/3">
                                        <span v-if="item?.Side == 'B'" class="text-[#FFC64B]">{{item?.Side}}</span>
                                        <span v-else-if="item?.Side == 'S'" class="text-[#D964D7]">{{item?.Side}}</span>
                                        <span v-else="item?.Side == ''"></span>
                                    </div>
                                    <div class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        <span v-if="item?.Side == 'B'" class="text-[#FFC64B]">{{item?.Volume}}</span>
                                        <span v-else-if="item?.Side === 'S'" class="text-[#D964D7]">{{item?.Volume}}</span>
                                        <span v-else="item?.Side == ''" class="text-white">{{item?.Volume}}</span>
                                    </div>
                                    <div :class="changetextcolor(item?.Price, stockinmarkettrade?.PriorClosePrice, stockinmarkettrade?.Ceiling, stockinmarkettrade?.Floor)" class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{item?.DisplayTime}}
                                    </div>
                                </div>
                                 
                    </div>
                </div>
            </div>
</template>

<style>
::-webkit-scrollbar {
    width: 3px;
}
::-webkit-scrollbar-thumb {
    background: #747272;
}
</style>

<!-- <div class="h-full w-full border border-l-0
                      border-[#5f6672] border-opacity-25">
                <div class="text-sm font-ibm-plex-sans text-white text-navbarTxtBlack border-t-0.5 border-headerGray dark:border-opacity-25 py-2 px-3">Market Trade</div>
                <div class="relative w-full font-ibm-plex-sans">
                    <div class="text-sm text-[#94a3b8]
                                relative top-0 left-0 w-full
                                flex h-[38px] border-0 mt-0.5">
                        <div class="p-3 w-[25%]">
                            <div class="flex justify-start">Price</div>
                        </div>
                        <div class="p-3 w-[25%] ">
                            <div class="flex justify-center">Side</div>
                        </div>
                        <div class="p-3 w-[25%]">
                            <div class="flex justify-end">Volume</div>
                        </div>
                        <div class="p-3 w-[25%]">
                            <div class="flex justify-end">Time</div>
                        </div>
                    </div>

                    <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[350px] scrollbar">
                        <div class="vue-recycle-scroller__item-wrapper" style="min-height: 0px;">
                            <div class="vue-recycle-scroller__item-view" style="transform: translateY(0px);">
                                <div v-for="item in lastsale" class="border-0 flex cursor-pointer select-none text-white">

                                    <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling, stockinfo?.Floor)" class="text-xs pl-4 py-1.5 w-1/3 pr-3">
                                        {{item.Price}}
                                    </div>
                                    <div class="text-xs text-center py-1.5 w-1/3">
                                        {{item.Side}}
                                    </div>
                                    <div class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{item.Volume}}
                                    </div>
                                    <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling, stockinfo?.Floor)" class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{item.DisplayTime}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->