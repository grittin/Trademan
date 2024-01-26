<script setup lang="ts">
import {changetextcolor} from "@/utilities/changetextcolor"
import {changearrow} from "@/utilities/changearrow"
import {openchangearrow} from "@/utilities/openchangearrow"
import {changebarcolor} from "@/utilities/changebarcolor"
import { onMounted, ref, type PropType } from "vue";
import type {TLastsale, TStockInformation, TBestbidoffer} from "@/type/loadstock"

const props = defineProps({
    stockinbidofferbar: {
        type: Object as PropType <TStockInformation>
    },
    bestbidoffer:{
        type: Object as PropType <TBestbidoffer>
    },
    lastprice:{
        type: Array as PropType <TLastsale[]>,
    }
})
// console.log('lastprice:', props.lastprice[0].Price);
// const toggle = ref("")

// const current = props.lastprice[0].Price
// const previous = props.lastprice[1].Price
// let xx = true

let tog = ref(1)

const toggle = (x:any) => {
       console.log(x);
       if(x == 0){
                return tog.value = 0
        } else {
                return tog.value = 1
        }
};

const arrowsvg = () => {
         if (props.lastprice != undefined) {
                if (props.lastprice[1] == null && props.stockinbidofferbar){
                        console.log(props.stockinbidofferbar.LastSalePrice,props.stockinbidofferbar.PriorClosePrice);
                        return openchangearrow(props.stockinbidofferbar.LastSalePrice,props.stockinbidofferbar.PriorClosePrice)        
                }else if(props.lastprice[0] && props.stockinbidofferbar){

                } else if (props.lastprice[0] && props.lastprice[1]) {
                        const current = props.lastprice[0].Price
                        const previous = props.lastprice[1].Price
                        return changearrow(current, previous);
                }
        }
};

        

// const test = (x:any, y:string) => {
//         x = arrowsvg()
//         if(x >= y){
//                 return '<svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1 pb-1 h-6"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#00d136" transform="matrix(-1 0 0 -1 8.945 19.5)"/></svg>';
//         } else if(x < y) {
//                 return '<svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1 pb-1 h-6"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#e44840"/></svg>';
//     } else {
//     }
// }
// onMounted(() => {
//         defineProps(
//                 console.log(lastprice);
//         )
// })

</script>
<template>
    <div class="h-full border-l border-y border-[#5f6672] border-opacity-25">
        <div class="flex h-[45px] p-3
                    text-sm text-[#94a3b8]">
            <div class="text-xs flex-grow">Price (THB)</div>
            <div class="text-xs flex-grow">Volume ({{stockinbidofferbar?.StockSymbol}})</div>
            <div class="text-xs flex-grow text-right">Value</div>
        </div>
        <div class="h-[calc(100%-45px-30px)]">
                <div :class="{'': tog == 0,'h-[315px]': tog == 1}" class="flex pb-1 items-end">
                        <div class="w-full">
                                <table class="w-full">
                                        <tbody>
                                        <tr v-if="bestbidoffer?.OfferVolume10 !== ''" class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice10, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal10}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume9 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice9, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal9}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume8 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice8, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal8}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume7 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice7, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal7}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume6 !== ''" class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice6, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal6}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume5 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice5, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal5}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume4 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice4, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal4}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume3 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice3, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal3}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume2 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice2, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal2}}</td
                                                        >
                                        </tr>
                                        <tr v-if="bestbidoffer?.OfferVolume1 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.OfferPrice1, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px]
                                                        text-left w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferPrice1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferVolume1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.OfferTotal1}}</td
                                                        >
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
                        
                <div :class="changebarcolor(stockinbidofferbar?.LastSalePrice, stockinbidofferbar?.PriorClosePrice, stockinbidofferbar?.Ceiling, stockinbidofferbar?.Floor)" class=" pl-3 py-2 mx-2 flex bg-opacity-5">
                <div class="flex h-6">
                        <span  v-html="arrowsvg()">
                                                             
                        </span>
                        <span :class="changetextcolor(stockinbidofferbar?.LastSalePrice, stockinbidofferbar?.PriorClosePrice,'a','b')" class="font-bold">{{stockinbidofferbar?.LastSalePrice}}</span>
                </div>
                </div>           
                        
                <div class="flex h-[400px] pb-10 pt-1">
                        <div class="h-full w-full">
                                <table class="w-full">
                                        <tbody>
                                                <tr v-if="bestbidoffer?.BidPrice1 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice1, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume1}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal1}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice2 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice2, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume2}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal2}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice3 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice3, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume3}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal3}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice4 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice4, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume4}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal4}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice5 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice5, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left 
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume5}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal5}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice6 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice2, stockinbidofferbar?.PriorClosePrice,'a', 'b')"
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume6}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal6}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice7 !== ''"  class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice7, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume7}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal7}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice8 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice8, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume8}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal8}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice9 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice9, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume9}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal9}}</td
                                                        >
                                                </tr>
                                                <tr v-if="bestbidoffer?.BidPrice10 !== ''" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                                <td :class ="changetextcolor(bestbidoffer?.BidPrice10, stockinbidofferbar?.PriorClosePrice,'a', 'b')" 
                                                        class="text-[12px] xl:text-[14px] text-left
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidPrice10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 pr-7 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidVolume10}}</td
                                                        >
                                                <td class="text-[12px] xl:text-[14px] text-right
                                                        w-1/3 py-1.5 px-1.5"
                                                        >{{bestbidoffer?.BidTotal10}}</td
                                                        >
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                </div>
        </div>

        <div class="flex h-[30px] justify-end border-t border-[#5f6672] border-opacity-25">
            <div :class="{'bg-[#AFB3BD] bg-opacity-5': tog == 0,'': tog == 1}" class="px-4 cursor-pointer border-x border-[#5f6672] border-opacity-25" @click="toggle(0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" 
                     class="inline-block h-4"
                     :class="{'fill-[#9da0ab]': tog == 0,'fill-[#3f4044]': tog == 1}">
                    <g data-name="Group 75772" transform="translate(-492 -383)">
                        <rect data-name="Rectangle 19808" width="6" height="14" rx="2" transform="translate(492 383)"></rect>
                        <rect data-name="Rectangle 19809" width="6" height="10" rx="2" transform="translate(500 383)"></rect>
                    </g>
                </svg>
            </div>
        <div :class="{'bg-[#AFB3BD] bg-opacity-5 fill-[#9da0ab]': tog == 1,'': tog == 0}" class="px-4 cursor-pointer" @click="toggle(1)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" 
                     class="inline-block h-4"
                     :class="{'fill-[#9da0ab]': tog == 1,'fill-[#3f4044]': tog == 0}">
                    <g data-name="Group 75771" transform="translate(-533 -383)">
                        <rect data-name="Rectangle 19806" width="6" height="14" rx="2" transform="translate(533 383)"></rect>
                        <rect data-name="Rectangle 19807" width="6" height="10" rx="2" transform="translate(541 385)"></rect>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    
</template>

<!--<div class="h-full border-l border-y border-[#5f6672] border-opacity-25">
                <div class="flex h-[45px] p-3
                            text-sm text-[#94a3b8]">
                    <div class="text-xs flex-grow">Price (THB)</div>
                    <div class="text-xs flex-grow">Volume ({{stockinfo?.StockSymbol}})</div>
                    <div class="text-xs flex-grow text-right">Value</div>
                </div>
        
                    <div class="flex pb-1 h-[315px] items-end">
                            <table class="w-full">
                                <tbody>
                                    <tr class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice10, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice10}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume10}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal10}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice9, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice9}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume9}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal9}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice8, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice8}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume8}}</td
                                                >
                                        <td class="text-[14px] text-right 
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal8}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice7, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice7}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume7}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal7}}</td
                                                >
                                    </tr>
                                    <tr class="text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice6, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice6}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume6}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal6}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice5, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice5}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume5}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal5}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice4, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice4}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume4}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal4}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice3, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice3}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume3}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal3}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice2, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice2}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume2}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal2}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice1, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] 
                                                text-left w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferPrice1}}</td
                                                >
                                        <td class="text-[14px] text-right 
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferVolume1}}</td
                                                >
                                        <td class="text-[14px] text-right 
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.OfferTotal1}}</td
                                                >
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                   
                    <div :class="changebarcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class=" pl-3 py-2 mx-2 flex bg-opacity-5">
                        <div class="flex h-6">
                            <span :class="changearrowcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class="">
                                                                                                                                                            <!-- <!-- <svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 pb-1 h-6 fill-[#FA6B82]">
                                                                                                                                                                <path d="M.218 5a.754.754 0 0 0 1.06 0l2.45-2.45v16.2a.75.75 0 0 0 1.5 0V2.56L7.668 5a.75.75 0 0 0 
                                                                                                                                                                1.06-1.06L5.018.23a.782.782 0 0 0-.26-.17.037.037 0 0 1-.03-.01.733.733 
                                                                                                                                                                0 0 0-.79.17L.218 3.94a.754.754 0 0 0 0 1.06z" >
                                                                                                                                                                </path>
                                                                                                                                                            </svg> -->
                     <!--   </span>
                            <span :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice,'a','b')" class="font-bold">{{stockinfo?.LastSalePrice}}</span>
                        </div>
                    </div>
                        
                 
                    <div class="flex h-[400px] pb-10 pt-1">
                        <div class="h-full w-full">
                            <table class="w-full">
                                <tbody>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice1, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice1}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume1}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal1}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice2, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice2}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume2}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal2}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice3, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice3}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume3}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal3}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice4, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice4}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume4}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal4}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice5, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left 
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice5}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume5}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal5}}</td
                                                >
                                    </tr>
                                    <tr :class ="changetextcolor(bestbidoffer?.BidPrice6, stockinfo?.PriorClosePrice,'a', 'b')" 
                                         class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice6}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume6}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal6}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice7, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice7}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume7}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal7}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice8, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice8}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume8}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal8}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice9, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice9}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                 w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume9}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal9}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.BidPrice10, stockinfo?.PriorClosePrice,'a', 'b')" 
                                             class="text-[14px] text-left
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidPrice10}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 pr-7 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidVolume10}}</td
                                                >
                                        <td class="text-[14px] text-right
                                                w-1/3 py-1.5 px-1.5"
                                                >{{bestbidoffer?.BidTotal10}}</td
                                                >
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="flex h-[30px] justify-end border-t border-[#5f6672] border-opacity-25">
                        <div class="px-4 cursor-pointer border-x border-[#5f6672] border-opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="inline-block h-4 fill-[#9da0ab]">
                                <g data-name="Group 75772" transform="translate(-492 -383)">
                                    <rect data-name="Rectangle 19808" width="6" height="14" rx="2" transform="translate(492 383)"></rect>
                                    <rect data-name="Rectangle 19809" width="6" height="10" rx="2" transform="translate(500 383)"></rect>
                                </g>
                            </svg>
                        </div>
                        <div class="px-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="inline-block h-4 fill-[#9da0ab]">
                                <g data-name="Group 75771" transform="translate(-533 -383)">
                                    <rect data-name="Rectangle 19806" width="6" height="14" rx="2" transform="translate(533 383)"></rect>
                                    <rect data-name="Rectangle 19807" width="6" height="10" rx="2" transform="translate(541 385)"></rect>
                                </g>
                            </svg>
                        </div>
                    </div>
            </div> -->