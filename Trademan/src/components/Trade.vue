<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import {loadstockinformation, loadallinformation} from "../api/trademanapi"
import type{TStockinfo, TLastsale, TBestbidoffer,TStockInformation, TStockInfoStat} from "../type/loadstock"
import stockname from './Tradecomponents/stockname.vue'
import stockdetail from './Tradecomponents/stockdetail.vue'
import bidofferbar from "./Tradecomponents/bidofferbar.vue"
import graph from "./Tradecomponents/graph.vue"
import markettrade from "./Tradecomponents/markettrade.vue"
import stocklist from "./Tradecomponents/stocklist.vue"


const stockinfo = ref<TStockinfo>()
const lastsale = ref<TLastsale[]>()
const bestbidoffer = ref<TBestbidoffer>()
const stockinformation = ref<TStockInformation[]>()
const chart = ref("")
// let stocknum = ref('')
// console.log(stocknum.value);

const setStock = ref({
  StockNumber: '',
  StockSymbol: '',
});

const getStock = ref({
  StockNumber: '',
  StockSymbol: '',
});

const pickstock = (stockNumber:string, stockSymbol:string) => {
    chart.value = stockSymbol
    loadstockinformation(stockNumber).then((res: any) => {
        const stockinData = res.StockInfo
        const lastsaleData = res.Lastsale
        const bestbidData = res.BestBidOffer
        bestbidoffer.value = bestbidData
        stockinfo.value = stockinData
        lastsale.value = lastsaleData
    })
    setStock.value = {
        StockNumber: stockNumber,
        StockSymbol: stockSymbol,
    };
    localStorage.setItem('setStock', JSON.stringify(setStock.value));
    // console.log('getstock',getStock.value);
}

const getLastSale = computed(() => {
    return lastsale.value
})

const loadallinfo = async () => {
    await loadallinformation().then((res: any)=>{
        const loadallinfoData = res.StockInformation
        stockinformation.value = loadallinfoData

        // const stockSymbols = res.StockInformation.map((stock: any) => stock.StockSymbol);
        // symbols.value = stockSymbols;

        // const sym = res.StockInformation.StockSymbol
        // symbolin.value=sym
        // console.log(symbols);
    })
}


const loadstock = async (stocknumber:string) => {
    await loadstockinformation(stocknumber).then((res: any) => {
        //console.log(stocknum.value);
        const stockinData = res.StockInfo
        const lastsaleData = res.Lastsale
        const bestbidData = res.BestBidOffer
        bestbidoffer.value = bestbidData
        stockinfo.value = stockinData
        lastsale.value = lastsaleData
    })
}



onMounted( async() => {
    await loadallinfo()
    const stocknumber = await getlocalstorage()
    loadstock(stocknumber)

});

// const getlocalstorage= () => {
//     let storedgetStock = localStorage.getItem('getStock');
//     console.log(storedgetStock);
//         // console.log(typeof(setStock.value));
  
//         if (storedgetStock) {
//             let obj = JSON.parse(storedgetStock);
//             setStock.value = obj
//             stocknum.value = obj.StockNumber;
//             // console.log(stocknum.value);
//         }
    
// }


const getlocalstorage = () => {
    let storedgetStock = localStorage.getItem('setStock');
    let res ;
        if (storedgetStock) {
            res = JSON.parse(storedgetStock);
            getStock.value = res
        }
        console.log(res);
    return res.StockNumber
}

// const filteredStocks = ref<TStockInformation[]>()

// const headerindex = ref<number>(1)

// const stockinforma = ref<TStockInformation>()
    // const filteredStocks:TStockInformation[] = [];

// const symbols = ref<TStockInformation[]>()

// let sea = ref("");
// let currentvalue = "%CHG"

// const togglevalue = () => {
//     console.log(currentvalue);
//     if(currentvalue==="%CHG"){
//         currentvalue = "CHG";
//     } else if(currentvalue==="CHG"){
//         currentvalue = "PO";
//     } else{
//         currentvalue = "%CHG";
//     }
//     headerindex.value++
//         if(headerindex.value>3){
//             headerindex.value=1
//         }
// }
// const checknull = (x:any) => {
//     console.log(x);
//     if(x == ""){
//         return x = "0.00" 
//     }
// }

// const search = () => {
//     filteredStocks.value = stockinformation.value?.filter((stock: any) => {
//           return stock.StockSymbol.toLowerCase().includes(sea.value.toLowerCase())
//         });
//     };


    // if (stockinformation.value){
    //     const filteredStocks = symbols.value?.filter((x:any)=> x.symbols.includes(sea.value))  
    //     stockinformation.value = filteredStocks
    // }else{  
    //         return[stockinformation];
    //     }
    // symbols.value?.filter ((symbols: any)=>{
    //     return symbols
        
    // })
    // console.log(symbols.value);
    //     symbols.value?.filter((stock: any) => 
    //     stock.symbols.toLowerCase().includes(sea.value.toLowerCase())
    //     );
    
    // if (stockinformation.value) {
    //      const filteredStocks = symbols.value?.filter((stock: any) =>
    //          stock.toLowerCase().includes(sea.value.toLowerCase())
    //      );
    //     stockinformation.value = filteredStocks;
    //     console.log(filteredStocks);
    //  }
</script>

<template>
    <div class="grid grid-cols-12 auto-rows-min">
        <div class="col-start-1 col-end-4 row-start-1 row-end-4">
            <stockname :stockinstockname="stockinfo"></stockname>
        </div>
        <div class="col-start-4 col-end-13 row-start-1 row-end-2">
            <stockdetail :stockinstockdetail="stockinfo"></stockdetail>
        </div>
        <div class="col-start-1 col-end-4 row-start-2 row-end-5">
            <bidofferbar :stockinbidofferbar="stockinfo" :lastprice="getLastSale" :bestbidoffer="bestbidoffer"></bidofferbar>
        </div>
        <div class="col-start-4 col-end-10 row-start-2 row-span-3">
            <graph :symbol="chart"></graph>
        </div>
        <div class="col-start-10 col-end-13 row-start-2 row-end-3">
            <stocklist :stockinstocklist="stockinformation" :resultpickstock="pickstock"></stocklist>
        </div>
        <div class="col-start-10 col-end-13 row-start-4 row-end-5">
            <markettrade :lastsale="lastsale" :stockinmarkettrade="stockinfo" ></markettrade>
        </div>
    </div>

</template>