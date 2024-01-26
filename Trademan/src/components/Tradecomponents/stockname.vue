<script setup lang="ts">
import type { TStockInformation } from "@/type/loadstock";
import {changetextcolor} from "@/utilities/changetextcolor"
import type { PropType } from "vue";
const props = defineProps({
    stockinstockname: {
        type: Object as PropType <TStockInformation>
    }
})

</script>
<template>
    <div class="w-full relative">
        <div class="grid grid-rows-3
                    w-full h-[94px]
                    px-3 pb-1 pt-2 
                    border-r border-l border-[#5f6672] border-opacity-25">
            <div class="flex justify-between w-full">
                <div class="rounded-md bg-white font-bold flex pr-3 text-black">
                    <!-- <img src="https://s3.efinancethai.com/symbols-logo/BBL.png" alt="" class="h-[24px] px-2"> -->
                    <div class="ml-2">{{stockinstockname?.StockSymbol}}</div>
                </div>
                <div :class="changetextcolor(stockinstockname?.LastSalePrice, stockinstockname?.PriorClosePrice, stockinstockname?.Ceiling, stockinstockname?.Floor)" class="text-xl font-bold text-[#f59e0b]">{{stockinstockname?.LastSalePrice}}</div>
            </div>
            <div class="flex justify-between mt-1.5 w-full">
                <div class="text-[11px] text-[#94a3b8] w-1/2">{{stockinstockname?.StockFullName}}</div>
                <div :class="changetextcolor(stockinstockname?.LastSalePrice, stockinstockname?.PriorClosePrice,'a', 'b')" class="font-bold text-sm">{{stockinstockname?.ChangePrice}} {{stockinstockname?.ChangePricePct}}%
                </div>
            </div>
        </div>
    </div>
</template>



<!-- <div class="h-full w-full relative">
                <div class=" grid grid-rows-3
                            w-full h-[94px]
                            px-3 pb-1 pt-2 
                            border-r border-l border-[#5f6672] border-opacity-25">
                    <div class="flex justify-between w-full">
                        <div class="rounded-md bg-white font-bold flex pr-3 text-black">
                            <img src="https://s3.efinancethai.com/symbols-logo/BBL.png" alt="" class="h-[24px] px-2">
                            <div>{{stockinfo?.StockSymbol}}</div>
                        </div>
                        <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling, stockinfo?.Floor)" class="text-xl font-bold text-[#f59e0b]">{{stockinfo?.LastSalePrice}}</div>
                    </div>
                    <div class="flex mt-2 justify-between w-full">
                            <div class="text-xs text-[#94a3b8]">{{stockinfo?.StockFullName}}</div>
                            <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice,'a', 'b')" class="font-bold text-sm text-[#f59e0b]">{{stockinfo?.ChangePrice}} {{stockinfo?.ChangePricePct}}%</div>
                    </div>
                </div>
            </div> -->