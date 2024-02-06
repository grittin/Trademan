<script setup lang="ts">
import {changeTextColor} from "@/utilities/ChangeTextColor"
import {changeArrow} from "@/utilities/ChangeArrow"
import {openChangeArrow} from "@/utilities/OpenChangeArrow"
import {changeBarColor} from "@/utilities/ChangeBarColor"
import { onMounted, ref, type PropType } from "vue";
import type {TLastsale, TStockInformation, TBestbidoffer} from "@/type/loadstock"

const props = defineProps({
    stockInBidofferBar: {
        type: Object as PropType <TStockInformation>
    },
    bestBidOffer:{
        type: Object as PropType <TBestbidoffer>
    },
    lastPrice:{
        type: Array as PropType <TLastsale[]>,
    }
})

let toggleDefault = ref(1)

const toggleSetValue = (toggleValue:any) => {
       console.log(toggleValue);
       if(toggleValue == 0){
                return toggleDefault.value = 0
        } else {
                return toggleDefault.value = 1
        }
};

const arrowsvg = () => {
         if (props.lastPrice != undefined) {
                if (props.lastPrice[1] == null && props.stockInBidofferBar){
                        console.log(props.stockInBidofferBar.LastSalePrice,props.stockInBidofferBar.PriorClosePrice);
                        return openChangeArrow(props.stockInBidofferBar.LastSalePrice,props.stockInBidofferBar.PriorClosePrice)        
                }else if (props.lastPrice[0] && props.lastPrice[1]) {
                        const current = props.lastPrice[0].Price
                        const previous = props.lastPrice[1].Price
                        return changeArrow(current, previous);
                }
        }
};
</script>
<template>
    <div class="h-full border-l border-y border-[#5f6672] border-opacity-25">
        <div class="flex h-[45px] p-3
                    text-sm text-[#94a3b8]">
            <div class="text-xs flex-grow">Price (THB)</div>
            <div class="text-xs flex-grow">Volume ({{stockInBidofferBar?.StockSymbol}})</div>
            <div class="text-xs flex-grow text-right">Value</div>
        </div>
        <div class="h-[calc(100%-45px-30px)]">
                <div :class="{'': toggleDefault == 0,'h-[315px]': toggleDefault == 1}" class="flex pb-1 items-end">
                        <div class="w-full">
                                <table class="w-full">
                                        <tbody>
                                        <tr v-if="bestBidOffer?.OfferVolume10 !== ''" class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice10, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal10}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume9 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice9, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal9}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume8 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice8, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal8}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume7 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice7, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal7}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume6 !== ''" class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice6, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal6}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume5 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice5, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal5}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume4 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice4, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal4}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume3 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice3, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal3}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume2 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice2, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal2}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestBidOffer?.OfferVolume1 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.OfferPrice1, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px]
                                                        text-left w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferPrice1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferVolume1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.OfferTotal1}}</td
                                                        >
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
                        
                <div :class="changeBarColor(stockInBidofferBar?.LastSalePrice, stockInBidofferBar?.PriorClosePrice, stockInBidofferBar?.Ceiling, stockInBidofferBar?.Floor)" class=" pl-3 py-2 mx-2 flex bg-opacity-5">
                <div class="flex h-6">
                        <span v-html="arrowsvg()"></span>
                        <span :class="changeTextColor(stockInBidofferBar?.LastSalePrice, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" class="font-bold">{{stockInBidofferBar?.LastSalePrice}}</span>
                </div>
                </div>           
                        
                <div class="flex h-[400px] pb-10 pt-1">
                        <div class="h-full w-full">
                                <table class="w-full">
                                        <tbody>
                                                <tr v-if="bestBidOffer?.BidPrice1 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice1, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal1}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice2 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice2, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal2}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice3 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice3, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal3}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice4 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice4, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal4}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice5 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice5, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal5}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice6 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice2, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)"
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal6}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice7 !== ''"  class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice7, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidoffer?.BidTotal7}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice8 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice8, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal8}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice9 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice9, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal9}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestBidOffer?.BidPrice10 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changeTextColor(bestBidOffer?.BidPrice10, stockInBidofferBar?.PriorClosePrice,stockInBidofferBar?.Ceiling,stockInBidofferBar?.Floor)" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidPrice10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidVolume10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestBidOffer?.BidTotal10}}</td
                                                        >
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
        </div>

        <div class="flex h-[30px] justify-end border-t border-[#5f6672] border-opacity-25">
            <div :class="{'bg-[#AFB3BD] bg-opacity-5': toggleDefault == 0,'': toggleDefault == 1}" class="px-4 cursor-pointer border-x border-[#5f6672] border-opacity-25" @click="toggleSetValue(0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" 
                     class="inline-block h-4"
                     :class="{'fill-[#9da0ab]': toggleDefault == 0,'fill-[#3f4044]': toggleDefault == 1}">
                    <g data-name="Group 75772" transform="translate(-492 -383)">
                        <rect data-name="Rectangle 19808" width="6" height="14" rx="2" transform="translate(492 383)"></rect>
                        <rect data-name="Rectangle 19809" width="6" height="10" rx="2" transform="translate(500 383)"></rect>
                    </g>
                </svg>
            </div>
        <div :class="{'bg-[#AFB3BD] bg-opacity-5 fill-[#9da0ab]': toggleDefault == 1,'': toggleDefault == 0}" class="px-4 cursor-pointer" @click="toggleSetValue(1)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" 
                     class="inline-block h-4"
                     :class="{'fill-[#9da0ab]': toggleDefault == 1,'fill-[#3f4044]': toggleDefault == 0}">
                    <g data-name="Group 75771" transform="translate(-533 -383)">
                        <rect data-name="Rectangle 19806" width="6" height="14" rx="2" transform="translate(533 383)"></rect>
                        <rect data-name="Rectangle 19807" width="6" height="10" rx="2" transform="translate(541 385)"></rect>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    
</template>