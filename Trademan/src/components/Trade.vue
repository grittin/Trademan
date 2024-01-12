<script setup lang="ts">
import { onMounted, ref } from "vue"
import {loadstockinformation, loadallinformation} from "../api/trademanapi"
import type{TStockinfo, TLastsale, TBestbidoffer,TStockInformation, TStockInfoStat} from "../type/loadstock"
import {changetextcolor} from "./changetextcolor"
import {changebarcolor} from "./changebarcolor"
import {changearrowcolor} from "./changearrow"


const stockinfo = ref<TStockinfo>()
const lastsale = ref<TLastsale>()
const bestbidoffer = ref<TBestbidoffer>()
const stockinformation = ref<TStockInformation[]>()


let sea = ref()

const search = (x: any) => {
    if (stockinformation.value){
        let asd = stockinformation.value?.filter ((sea)=> )  
        
    }else{  

        }
 
    console.log(stockinformation.value)
}

const loadstock = () => {
    loadstockinformation("65626").then((res: any) => {
            const stockin = res.StockInfo
            const lastsa = res.Lastsale
            const bestbid = res.BestBidOffer
            bestbidoffer.value=bestbid
            stockinfo.value=stockin
            lastsale.value=lastsa
        })
}

const loadallinfo = () => {
    loadallinformation().then((res: any)=>{
        const loadall = res.StockInformation
        stockinformation.value=loadall
        
    })
}


    onMounted(() => {
        loadstock()
        loadallinfo()
    })
</script>

<template>
    <div class="grid grid-cols-12 auto-rows-min">
        <div class="col-start-1 col-end-4 row-start-1 row-end-2">
            <div class="h-full w-full border-0 relative">
                <div class=" grid grid-rows-3
                            w-full h-[94px]
                            px-3 pb-1 pt-2 
                            border-r border-l ">
                    <div class="flex justify-between w-full">
                        <div class="rounded-md bg-white text-xl font-bold flex pr-3 text-black">
                            <img src="https://s3.efinancethai.com/symbols-logo/BBL.png" alt="" class="h-[24px] px-2">
                            <div>{{stockinfo?.StockSymbol}}</div>
                        </div>
                        <div :class=" changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling, stockinfo?.Floor)" class="text-xl font-bold text-[#f59e0b]">{{stockinfo?.LastSalePrice}}</div>
                    </div>
                    <div class="flex mt-2 justify-between w-full">
                            <div class="text-xs text-[#94a3b8]">{{stockinfo?.StockFullName}}</div>
                            <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class="font-bold text-sm text-[#f59e0b]">{{stockinfo?.ChangePrice}} {{stockinfo?.ChangePricePct}}%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-start-4 col-end-13 row-start-1 row-end-2"> 
            <div class="h-full w-full border-0 relative">
                <div class="h-[94px] w-full 
                            flex items-center
                            px-3 pb-2 pt-2
                            border-r">
                    <div class="md:w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Avg</p>
                                <div :class="changetextcolor(stockinfo?.Average, stockinfo?.PriorClosePrice)" class="item-center grid grid-cols-1">{{stockinfo?.Average}}</div>
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

                    <div class="md:w-[26%] 2xl:w-[23%] md:pr-3">
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

                    <div class="w-[20%] md:w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>High</p>
                                <div :class="changetextcolor(stockinfo?.HighPrice, stockinfo?.PriorClosePrice, stockinfo?.Ceiling)" class="item-center grid grid-cols-1">{{stockinfo?.HighPrice}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Low</p>
                                <div :class="changetextcolor(stockinfo?.LowPrice, stockinfo?.PriorClosePrice, stockinfo?.Floor)" class="item-center grid grid-cols-1">{{stockinfo?.LowPrice}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Value</p>
                                <div class="item-center grid grid-cols-1">{{stockinfo?.TotalValue}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[20%] md:w-[15%]">
                        <div class="grid grid-rows-3 gap-1.5 text-white">
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Open-1</p>
                                <div :class="changetextcolor(stockinfo?.Open1, stockinfo?.LastSalePrice)" class="item-center grid grid-cols-1">{{stockinfo?.Open1}}</div>
                            </div>
                            <div class="item-center grid grid-cols-2 text-sm">
                                <p>Open-2</p>
                                <div :class="changetextcolor(stockinfo?.Open2, stockinfo?.LastSalePrice)" class="item-center grid grid-cols-1">{{stockinfo?.Open2}}</div>
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
            </div>
        </div>

        <div class="col-start-1 col-end-4 row-start-2 row-end-5">
            <div class="h-full border-l border-y">
                <div class="flex h-[45px] border-0 p-3
                            text-sm text-[#94a3b8]">
                    <div class="text-xs flex-grow">Price (THB)</div>
                    <div class="text-xs flex-grow">Volume ({{stockinfo?.StockSymbol}})</div>
                    <div class="text-xs flex-grow text-right">Value</div>
                </div>
                
                    <div class="flex pb-1 px-3 h-[350px] items-end">
                            <table class="w-full">
                                <tbody class="">
                                    <tr class="border-0  text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice10, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice10}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume10}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal10}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice9, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice9}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume9}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal9}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice8, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice8}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume8}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal8}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice7, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left font-tuffy w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice7}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume7}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal7}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice6, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice6}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right font-tuffy w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume6}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right text-textBlack w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal6}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice5, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice5}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume5}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal5}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice4, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left font-tuffy w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice4}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume4}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal4}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice3, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice3}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume3}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal3}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice2, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice2}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume2}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal2}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(bestbidoffer?.OfferPrice1, stockinfo?.ProjectedClose)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferPrice1}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.OfferVolume1}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.OfferTotal1}}</td
                                                >
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    <div class="py-1 pl-3 flex">
                        <div :class="changebarcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class="absolute px-40 h-10 opacity-10"></div>
                        <div class="flex">
                            <span :class="changearrowcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class="absolute pl-1 pb-2 w-10 h-10">
                                                                                                                                                            <!-- <!-- <svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 pb-1 h-6 fill-[#FA6B82]">
                                                                                                                                                                <path d="M.218 5a.754.754 0 0 0 1.06 0l2.45-2.45v16.2a.75.75 0 0 0 1.5 0V2.56L7.668 5a.75.75 0 0 0 
                                                                                                                                                                1.06-1.06L5.018.23a.782.782 0 0 0-.26-.17.037.037 0 0 1-.03-.01.733.733 
                                                                                                                                                                0 0 0-.79.17L.218 3.94a.754.754 0 0 0 0 1.06z" >
                                                                                                                                                                </path>
                                                                                                                                                            </svg> -->
                            </span>
                            <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice,'a','b')" class="font-bold text-base pl-3 pt-2">{{stockinfo?.LastSalePrice}}</div>
                        </div>
                    </div>

                    <div class="flex h-[350px] pb-10 px-3 pt-1">
                        <div class="h-full w-full">
                            <table class="w-full">
                                <tbody class="bg-transparent">
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice1)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice1}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right dark:text-grayTxtBidOffer 
                                                text-textBlack font-tuffy w-1/3 pr-7 py-1.5 green-flash"
                                                >{{bestbidoffer?.BidVolume1}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal1}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice2)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice2}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume2}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal2}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice3)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice3}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume3}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal3}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice4)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice4}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume4}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal4}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice5)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice5}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume5}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right font-tuffy w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal5}}</td
                                                >
                                    </tr>
                                    <tr :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice6)" class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice6}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume6}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal6}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice7)" class="text-[12px] xl:text-[14px] 
                                                text-left font-tuffy w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice7}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume7}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal7}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice8)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice8}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume8}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal8}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice9)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice9}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume9}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal9}}</td
                                                >
                                    </tr>
                                    <tr class="border-0 text-white cursor-pointer select-none hover:bg-zinc-800">
                                        <td :class ="changetextcolor(stockinfo?.ProjectedClose,bestbidoffer?.BidPrice10)" class="text-[12px] xl:text-[14px] 
                                                text-left w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidPrice10}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right font-tuffy w-1/3 pr-7 py-1.5"
                                                >{{bestbidoffer?.BidVolume10}}</td
                                                >
                                        <td class="text-[12px] xl:text-[14px] 
                                                text-right w-1/3 py-1.5"
                                                >{{bestbidoffer?.BidTotal10}}</td
                                                >
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="flex border-t">

                    </div>
            </div>
        </div>

        <div class="col-start-4 col-end-10 row-start-2 row-span-3">
            <div class="h-full">
                <div class="h-[60%] bg-slate-600 border border-b-0">
                </div>

                <div class="h-[40%] bg-slate-600 p-0 border">
                    <div class="flex gap-5 text-sm py-4 px-3"
                    ></div>
                    <div class="flex h-full w-full"></div>
                </div>
            </div>
        </div>

        <div class="col-start-10 col-end-13 row-start-2 row-end-3">
            <div class="h-full w-ful border border-l-0 border-b-0 pb-4">
                <div class="p-1"></div>
                <div class="relative mx-1.5"> 
                    <span class="absolute h-full top-1.5 left-2 cursor-pointer">
                        <svg data-v-3d401098="" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-full"><g fill="none">
                            <path d="M20.02 11.01A9.01 9.01 0 1 1 11.01 2a9.01 9.01 0 0 1 9.01 9.01z"></path>
                            <path d="M11.01 4.5c-3.59 0-6.51 2.92-6.51 6.51s2.92 6.51 6.51 6.51 6.51-2.92 6.51-6.51S14.6 4.5 11.01 4.5m0-2.5a9.01 9.01 0 1 1 0 18.02 9.01 9.01 0 0 1 0-18.02z" fill="#5f6672"></path>
                            </g><path d="M21.99 18.95a2.1 2.1 0 0 0-1.97-.95 2.02 2.02 0 0 0-1.68.79 2.029 2.029 0 0 0-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64a1.148 1.148 0 0 0 .19.01 2.168 2.168 0 0 0 1.78-1.18 2.06 2.06 0 0 0 .31-2.15z" fill="#5f6672"></path>
                        </svg>
                    </span>
                    <form autocomplete="off">
                        <input type="text" @input="search" v-model="sea" placeholder="Search..." class=" pl-10 p-2 w-[100%] outline-none
                            text-sm font-bold placeholder-navbarIconBlack 
                            text-white border border-white border-opacity-10
                            rounded bg-[#2A2D35]" autocomplete="off">
                        </form>
                </div>

                <div class="h-full mt-2">
                    <div class="relative w-full">
                        <div class="relative w-full flex gap-5 h-[38px] border-0">
                            <div class="text-xs p-3 text-[#94a3b8] flex-grow justify-start">
                                <span class="whitespace-nowrap cursor-pointer">
                                    <svg height="15.892" width="15.999" xmlns="http://www.w3.org/2000/svg" data-cy="stockList.Favorites" class="w-4 mb-1 mr-3 inline-block duration-300 fill-[#94a3b8]  cursor-pointer">
                                        <path d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68L8.8 14.019a1.7 1.7 
                                        0 0 0-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68L3.1 11.3a1.817 1.817 0 0 0-.43-1.46L.679 7.849c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z"></path>
                                    </svg>
                                    Symbol</span
                                >
                            </div>

                            <div class="text-xs p-3 text-[#94a3b8] flex-grow justify-center">Last Price</div>
                            <div class="text-xs p-3 text-[#94a3b8] flex-grow justify-right">%CHG
                                <span class="whitespace-nowrap cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.001" height="13.092" 
                                        class="w-4 fill-navbarIconBlack fill-[#94a3b8] hover:fill-white mb-1 ml-2 inline-block duration-300">
                                        <g data-name="Group 40035">
                                            <path data-name="Union 97" d="M13.462 3.836H1.83l1.759 1.8a.563.563 0 0 1 0 .78.532.532 0 0 1-.76 0L.157 3.681A.561.561 0 0 1 0 3.292a.565.565 0 0 1 .036-.191.03.03 0 0 0 .006-.021.567.567 0 0 1 .123-.191L2.829.162a.529.529 0 0 1 .76 0 .561.561 0 0 1 0 .778l-1.75 1.794h11.623a.549.549 0 0 1 .539.55.549.549 0 0 1-.539.552Zm.5 6.156a.033.033 0 0 0-.006.022.555.555 0 0 1-.123.19l-2.663 
                                                                        2.728a.532.532 0 0 1-.762 0 .563.563 0 0 1 0-.778l1.753-1.794H.536a.548.548 0 0 1-.538-.55.548.548 0 0 1 .538-.552h11.631l-1.759-1.8a.563.563 0 0 1 0-.778.531.531 0 0 1 .762 0l2.67 2.734a.558.558 0 0 1 .159.389.565.565 0 0 1-.035.189Z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                            </div>

                        </div>
                        <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[295px]">
                                <div class="vue-recycle-scroller__item-wrapper" style="min-height: 0px;">
                                    <div class="vue-recycle-scroller__item-view" style="transform: translateY(0px);">
                                        <div v-for="item in stockinformation" class="border-0 flex cursor-pointer select-none text-white">
                                            <div class="whitespace-nowrap py-1.5 w-1/3 pl-3 text-xs xl:text-sm relative">
                                                <div class="w-full overflow-hidden">
                                                    <span class="whitespace-nowrap cursor-pointer">
                                                        <svg height="15.892" width="15.999" xmlns="http://www.w3.org/2000/svg" data-cy="stockList.Favorites" class="fill-[#53585f] w-4 mb-1 mr-3 inline-block ">
                                                            <path d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68L8.8 14.019a1.7 1.7 
                                                                     0 0 0-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68L3.1 11.3a1.817 1.817 0 0 0-.43-1.46L.679 7.849c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span data-v-3bcf84b8="" class="inline-block duration-200 relative">{{item.StockSymbol}}</span>
                                                </div>
                                            </div>
                                            <div :class="changetextcolor(stockinfo?.LastSalePrice, stockinfo?.PriorClosePrice)" class="text-xs xl:text-sm text-right font-tuffy pr-3 xl:pr-7 py-1.5 w-1/3  font-tuffy">
                                                {{item.LastSalePrice}}
                                            </div>
                                            <div class="text-xs xl:text-sm text-right font-tuffy py-1.5 w-1/3 pr-3">
                                                {{item.ChangePricePct}}
                                            </div>
                                        </div>
                             
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-start-10 col-end-13 row-start-4 row-end-5">
            <div class="h-full w-full border border-l-0">
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

                    <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[350px]">
                    
                    </div>
                </div>
            </div>
        </div>

        <div class="col-start-1 col-end-13 row-start-5 row-end-7">
            <div class="h-full w-full border border-t-0 pt-0.5 bg-[#1e2025]">
                <div class="w-full border-0 ">
                    <thead class="border-b-2 border-borderGray rounded-none">
                    <tr>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Order#</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">B/S</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Symbol</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Volume</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Price</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Matched</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Status</th>
                        <th class="normal-case text-xs font-normal py-3 text-[#94a3b8]">Time</th>
                        <th class="p-3 text-xs font-normal py-3 text-[#94a3b8]">Quote</th>
                    </tr>
                    </thead>
                </div>
            </div>
            
        </div>
    </div>
  </template>../api/dataapi../api/trademanapi./changetextcolor./changebarcolor