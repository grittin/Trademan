<script setup lang="ts">
import type { TStockInformation } from "@/type/loadstock";
import {changeTextColor} from "@/utilities/ChangeTextColor"
import type { PropType } from "vue";
const props = defineProps({
    stockInStockname: {
        type: Object as PropType <TStockInformation>
    }
    // ,
    // stock1: {
    //     type: Function
    // }
    
    
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
                    <div class="ml-2">{{stockInStockname?.StockSymbol}}</div>
                    <!-- <div :class="stock1" class="ml-2"></div> -->
                </div>
                <div :class="changeTextColor(stockInStockname?.LastSalePrice, stockInStockname?.PriorClosePrice,stockInStockname?.Ceiling, stockInStockname?.Floor)" class="text-xl font-bold text-[#f59e0b]">{{stockInStockname?.LastSalePrice}}</div>
            </div>
            <div class="flex justify-between mt-1.5 w-full">
                <div class="text-[11px] text-[#94a3b8] w-1/2">{{stockInStockname?.StockFullName}}</div>
                <div :class="changeTextColor(stockInStockname?.LastSalePrice, stockInStockname?.PriorClosePrice)" class="font-bold text-sm">{{stockInStockname?.ChangePrice}} {{stockInStockname?.ChangePricePct}}%
                </div>
            </div>
        </div>
    </div>
</template>