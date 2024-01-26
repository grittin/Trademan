<script setup lang="ts">
import type { TStockinfo } from "@/type/loadstock";
import {changetextcolor} from "@/utilities/changetextcolor"
import type { PropType } from "vue";

const props = defineProps({
    stockinstockdetail: {
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
                        <div :class="changetextcolor(stockinstockdetail?.Average, stockinstockdetail?.PriorClosePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinstockdetail?.Average}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Prev</p>
                        <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinstockdetail?.PriorClosePrice }}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>%CMPR</p>
                        <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinstockdetail?.CmprPct}}</div>
                    </div>
                </div>
            </div>

            <div class="2xl:w-[23%] md:pr-3 md:w-26%">
                <div class="grid grid-rows-3 gap-1.5 text-white">
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>H/L 52 W</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div>
                            <span :class="changetextcolor(stockinstockdetail?.High52,stockinstockdetail?.PriorClosePrice,stockinstockdetail?.Ceiling,stockinstockdetail?.Floor)">
                                {{stockinstockdetail?.High52}}
                            </span>
                            <span>
                            /
                            </span>
                            <span :class="changetextcolor(stockinstockdetail?.Low52,stockinstockdetail?.PriorClosePrice,stockinstockdetail?.Ceiling,stockinstockdetail?.Floor)">
                                {{stockinstockdetail?.Low52}}
                            </span>
                            </div>
                        </div>
                    </div>
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>Ceiling/Floor</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div>
                                <span class="text-[#558BED]">
                                    {{stockinstockdetail?.Ceiling}} 
                                </span>
                                <span>
                                    / 
                                </span>
                                <span class="text-[#D964D7]">
                                    {{stockinstockdetail?.Floor}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="item-center grid grid-cols-2 text-sm md:text-xs 2xl:text-sm">
                        <p>PrjClose / Vol</p>
                        <div class="ml-2 item-center grid grid-cols-1">
                            <div v-if="stockinstockdetail?.ProjectedClose !== ''">
                                <span class="text-[#558BED]">
                                    {{stockinstockdetail?.ProjectedClose}} 
                                </span>
                                <span>
                                    / 
                                </span>
                                <span class="text-[#D964D7]">
                                    {{stockinstockdetail?.ProjectedVolume}}
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
                        <div :class="changetextcolor(stockinstockdetail?.HighPrice, stockinstockdetail?.PriorClosePrice, stockinstockdetail?.Ceiling, 'b')" class="item-center grid grid-cols-1">{{stockinstockdetail?.HighPrice}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Low</p>
                        <div :class="changetextcolor(stockinstockdetail?.LowPrice, stockinstockdetail?.PriorClosePrice, stockinstockdetail?.Floor, 'b')" class="item-center grid grid-cols-1">{{stockinstockdetail?.LowPrice}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Value</p>
                        <div class="item-center grid grid-cols-1">{{stockinstockdetail?.TotalValue}}</div>
                    </div>
                </div>
            </div>

            <div class="w-[20%] md:w-[15%]">
                <div class="grid grid-rows-3 gap-1.5 text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2">
                        <p>Open-1</p>
                        <div :class="changetextcolor(stockinstockdetail?.Open1, stockinstockdetail?.PriorClosePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinstockdetail?.Open1}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Open-2</p>
                        <div :class="changetextcolor(stockinstockdetail?.Open2, stockinstockdetail?.PriorClosePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinstockdetail?.Open2}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Volume</p>
                        <div class="item-center grid grid-cols-1">{{stockinstockdetail?.TotalVolume}}</div>
                    </div>
                </div>
            </div>

            <div class="w-[20%]">
                <div class="grid grid-rows-3 gap-1.5 whitespace-nowrap text-white md:text-xs 2xl:text-sm">
                    <div class="item-center grid grid-cols-2">
                        <p>Prj Vol</p>
                        <div class="item-center grid grid-cols-1">{{stockinstockdetail?.ProjectedVolume}}</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Buy Vol</p>
                        <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinstockdetail?.BuyVolume}} ({{stockinstockdetail?.BuyVolumePct}})</div>
                    </div>
                    <div class="item-center grid grid-cols-2">
                        <p>Sell Vol</p>
                        <div class="item-center grid grid-cols-1 text-[#D964D7]">{{stockinstockdetail?.SellVolume }} ({{stockinstockdetail?.SellVolumePct}})</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- <div class="h-full w-full relative">
                <div class="h-[94px] w-full 
                            flex items-center
                            px-3 pb-2 pt-2
                            border-r border-[#5f6672] border-opacity-25">
                    <div class="w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Avg</p>
                                <div :class="changetextcolor(stockinfo?.Average, stockinfo?.PriorClosePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinfo?.Average}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Prev</p>
                                <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinfo?.PriorClosePrice }}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>%CMPR</p>
                                <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinfo?.CmprPct}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[23%] pr-3">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>H/L 52 W</p>
                                <div class="item-center grid grid-cols-1">
                                    <div>
                                    <span :class="changetextcolor(stockinfo?.High52,stockinfo?.PriorClosePrice,stockinfo?.Ceiling,stockinfo?.Floor)">
                                        {{stockinfo?.High52}}
                                    </span>
                                    <span>
                                    /
                                    </span>
                                    <span :class="changetextcolor(stockinfo?.Low52,stockinfo?.PriorClosePrice,stockinfo?.Ceiling,stockinfo?.Floor)">
                                        {{stockinfo?.Low52}}
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Ceiling/Floor</p>
                                <div class="item-center grid grid-cols-1">
                                    <div>
                                        <span class="text-[#558BED]">
                                            {{stockinfo?.Ceiling}} 
                                        </span>
                                        <span>
                                            / 
                                        </span>
                                        <span class="text-[#D964D7]">
                                            {{stockinfo?.Floor}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>PrjClose / Vol</p>
                                <div class="item-center text-right grid grid-cols-1 text-sm"></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>High</p>
                                <div :class="changetextcolor(stockinfo?.HighPrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling, 'b')" class="item-center grid grid-cols-1">{{stockinfo?.HighPrice}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Low</p>
                                <div :class="changetextcolor(stockinfo?.LowPrice, stockinfo?.PriorClosePrice, stockinfo?.Floor, 'b')" class="item-center grid grid-cols-1">{{stockinfo?.LowPrice}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Value</p>
                                <div class="item-center grid grid-cols-1">{{stockinfo?.TotalValue}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Open-1</p>
                                <div :class="changetextcolor(stockinfo?.Open1, stockinfo?.LastSalePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinfo?.Open1}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Open-2</p>
                                <div :class="changetextcolor(stockinfo?.Open2, stockinfo?.LastSalePrice,'a', 'b')" class="item-center grid grid-cols-1">{{stockinfo?.Open2}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Volume</p>
                                <div class="item-center grid grid-cols-1">{{stockinfo?.TotalVolume}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[20%]">
                        <div class="grid grid-rows-3 gap-1.5 whitespace-nowrap text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Prj Vol</p>
                                <div class="item-center grid grid-cols-1">{{stockinfo?.ProjectedVolume}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Buy Vol</p>
                                <div class="item-center grid grid-cols-1 text-[#FFC64B]">{{stockinfo?.BuyVolume}} ({{stockinfo?.BuyVolumePct}})</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Sell Vol</p>
                                <div class="item-center grid grid-cols-1 text-[#D964D7]">{{stockinfo?.SellVolume }} ({{stockinfo?.SellVolumePct}})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->