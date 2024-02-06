<script setup lang="ts">
import type { TStockinfo } from "@/type/loadstock";
import {changeTextColor} from "@/utilities/ChangeTextColor"
import type { PropType } from "vue";

const props = defineProps({
    stockInStockDetail: {
        type: Object as PropType <TStockinfo>
    }
})
</script>
<template>
    <div class="h-full w-full relative">
        <div class="h-[94px] w-full 
                    flex items-center
                    px-3 pb-2 pt-2
                    border-r border-[#5f6672] border-opacity-25">
            <div class="md:w-[15%]">
                <div class="grid grid-rows-3 gap-1.5 text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2 ">
                        <p>Avg</p>
                        <div :class="changeTextColor(stockInStockDetail?.Average, stockInStockDetail?.PriorClosePrice)" class="item-center grid grid-cols-1">{{stockInStockDetail?.Average}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Prev</p>
                        <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockInStockDetail?.PriorClosePrice }}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>%CMPR</p>
                        <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockInStockDetail?.CmprPct}}</div>
                    </div>
                </div>
            </div>

            <div class="2xl:w-[23%] md:pr-3 md:w-26%">
                <div class="grid grid-rows-3 gap-1.5 text-white">
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>H/L 52 W</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div v-if="stockInStockDetail?.High52 !== ''">
                                <span :class="changeTextColor(stockInStockDetail?.High52,stockInStockDetail?.PriorClosePrice,stockInStockDetail?.Ceiling,stockInStockDetail?.Floor)">
                                    {{stockInStockDetail?.High52}}
                                </span>
                                <span>
                                /
                                </span>
                                <span :class="changeTextColor(stockInStockDetail?.Low52,stockInStockDetail?.PriorClosePrice,stockInStockDetail?.Ceiling,stockInStockDetail?.Floor)">
                                    {{stockInStockDetail?.Low52}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>Ceiling/Floor</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div v-if="stockInStockDetail?.Ceiling !== ''">
                                <span class="text-[#558BED]">
                                    {{stockInStockDetail?.Ceiling}} 
                                </span>
                                <span>
                                    / 
                                </span>
                                <span class="text-[#D964D7]">
                                    {{stockInStockDetail?.Floor}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>PrjClose / Vol</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div v-if="stockInStockDetail?.ProjectedClose !== ''">
                                <span class="text-[#558BED]">
                                    {{stockInStockDetail?.ProjectedClose}} 
                                </span>
                                <span>
                                    / 
                                </span>
                                <span class="text-[#D964D7]">
                                    {{stockInStockDetail?.ProjectedVolume}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[20%] md:w-[15%]">
                <div class="grid grid-rows-3 gap-1.5 text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2">
                        <p>High</p>
                        <div :class="changeTextColor(stockInStockDetail?.HighPrice, stockInStockDetail?.PriorClosePrice, stockInStockDetail?.Ceiling)" class="item-center grid grid-cols-1">{{stockInStockDetail?.HighPrice}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Low</p>
                        <div :class="changeTextColor(stockInStockDetail?.LowPrice, stockInStockDetail?.PriorClosePrice, stockInStockDetail?.Floor)" class="item-center grid grid-cols-1">{{stockInStockDetail?.LowPrice}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Value</p>
                        <div class="item-center grid grid-cols-1">{{stockInStockDetail?.TotalValue}}</div>
                    </div>
                </div>
            </div>

            <div class="w-[20%] md:w-[15%]">
                <div class="grid grid-rows-3 gap-1.5 text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2">
                        <p>Open-1</p>
                        <div :class="changeTextColor(stockInStockDetail?.Open1, stockInStockDetail?.PriorClosePrice)" class="item-center grid grid-cols-1">{{stockInStockDetail?.Open1}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Open-2</p>
                        <div :class="changeTextColor(stockInStockDetail?.Open2, stockInStockDetail?.PriorClosePrice)" class="item-center grid grid-cols-1">{{stockInStockDetail?.Open2}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Volume</p>
                        <div class="item-center grid grid-cols-1">{{stockInStockDetail?.TotalVolume}}</div>
                    </div>
                </div>
            </div>

            <div class="w-[20%]">
                <div class="grid grid-rows-3 gap-1.5 whitespace-nowrap text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2">
                        <p>Open Vol</p>
                        <div class="item-center grid grid-cols-1">{{stockInStockDetail?.ProjectedVolume}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Buy Vol</p>
                        <div v-if="stockInStockDetail?.BuyVolume !== ''" class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockInStockDetail?.BuyVolume}} ({{stockInStockDetail?.BuyVolumePct}})</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Sell Vol</p>
                        <div v-if="stockInStockDetail?.SellVolume !== ''" class="item-center grid grid-cols-1 text-[#D964D7]">{{stockInStockDetail?.SellVolume}} ({{stockInStockDetail?.SellVolumePct}})</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>