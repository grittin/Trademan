<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import {loadStockInformation, loadAllInformation} from "@/api/TradeManApi"
import type{TStockinfo, TLastsale, TBestbidoffer,TStockInformation, TStockInfoStat} from "@/type/loadstock"
import stockName from './StockName.vue'
import stockDetail from './StockDetail.vue'
import bidOfferBar from "./BidOfferBar.vue"
import graph from "./Graph.vue"
import marketTrade from "./MarketTrade.vue"
import stockList from "./StockList.vue"


const stockInfo = ref<TStockinfo>()
const lastSale = ref<TLastsale[]>()
const bestBidOffer = ref<TBestbidoffer>()
const stockInformation = ref<TStockInformation[]>()
const chart = ref("")

console.log(stockInfo);
// const stock1 = computed(() =>{
//      return stockInfo.value?.StockSymbol+"+1"    
// })
// console.log(stock1);

const setStock = ref({
  StockNumber: '',
  StockSymbol: '',
});

const pickstock = (stockNumber:string, stockSymbol:string) => {
    chart.value = stockSymbol
    loadStockInformation(stockNumber).then((res: any) => {
        const stockinData = res.StockInfo
        const lastsaleData = res.Lastsale
        const bestbidData = res.BestBidOffer
        bestBidOffer.value = bestbidData
        stockInfo.value = stockinData
        lastSale.value = lastsaleData
    })
    setStock.value = {
        StockNumber: stockNumber,
        StockSymbol: stockSymbol,
    };
    localStorage.setItem('setStock', JSON.stringify(setStock.value));
}

const getLastSale = computed(() => {
    return lastSale.value
})

const loadallinfo = async () => {
    await loadAllInformation().then((res: any)=>{
        const loadallinfoData = res.StockInformation
        stockInformation.value = loadallinfoData
    })
}

const loadStock = (stockNumber:string) => {
    loadStockInformation(stockNumber).then((res: any) => {
        const stockInData = res.StockInfo
        const lastSaleData = res.Lastsale
        const bestbidData = res.BestBidOffer
        bestBidOffer.value = bestbidData
        stockInfo.value = stockInData
        lastSale.value = lastSaleData
    })
}
const loadGraph = (stockSymbol:string) =>{
    chart.value = stockSymbol
}

onMounted(async() => {
    await loadallinfo()
    const stockNumber = getStockNumber()
    const stockSymbol = getStockSymbol()
    loadStock(stockNumber)
    loadGraph(stockSymbol)
});


const getStockNumber = () => {
    let storedgetStock = localStorage.getItem('setStock');
    let res ;
        if (storedgetStock) {
            res = JSON.parse(storedgetStock);
        } else if(storedgetStock !== ''){
            res = { StockNumber: '66479'};
        }
    return res.StockNumber
}
const getStockSymbol = () => {
    let storedgetStock = localStorage.getItem('setStock');
    let res ;
        if (storedgetStock) {
            res = JSON.parse(storedgetStock);
        } else if(storedgetStock !== ''){
            res = { StockSymbol: '24CS' };
        }
    return res.StockSymbol
}
</script>

<template>
<div class="bg-[#161a1e]">
    <div class="mx-9 pb-20 px-4 w-[95%]">
        <div class="grid grid-cols-12 auto-rows-min">
            <div class="col-start-1 col-end-4 row-start-1 row-end-4">
                <stockName :stockInStockname="stockInfo"></stockName>
            </div>
            <div class="col-start-4 col-end-13 row-start-1 row-end-2">
                <stockDetail :stockInStockDetail="stockInfo"></stockDetail>
            </div>
            <div class="col-start-1 col-end-4 row-start-2 row-end-5">
                <bidOfferBar :stockInBidofferBar="stockInfo" :lastPrice="getLastSale" :bestBidOffer="bestBidOffer"></bidOfferBar>
            </div>
            <div class="col-start-4 col-end-10 row-start-2 row-span-3">
                <graph :symbol="chart"></graph>
            </div>
            <div class="col-start-10 col-end-13 row-start-2 row-end-3">
                <stockList :stockInstockList="stockInformation" :resultPickStock="pickstock"></stockList>
            </div>
            <div class="col-start-10 col-end-13 row-start-4 row-end-5">
                <marketTrade :lastSale="lastSale" :stockInMarketTrade="stockInfo" ></marketTrade>
            </div>
        </div>
    </div>
</div>
</template>@/api/TradeManApi