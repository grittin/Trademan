<script setup lang="ts">
import type { TStockInformation } from '@/type/loadstock';
import { changeTextColor } from '@/utilities/ChangeTextColor';
import { onMounted, ref, type PropType } from 'vue';

const props = defineProps({
    stockInstockList: {
        type: Array as PropType <TStockInformation[]>
        // require = true
    },
    resultPickStock:{
        type: Function,
        // require = true
    }
})

const symbol = ref<string[]>([])
const headerIndex = ref<number>(1)
const filteredStocks = ref<TStockInformation[]>()
let word = ref();
let currentValue = "%CHG"
const toggleFavorite = ref(false);

const fav = (favStock:string) => {
    console.log(favStock);
    
    const index = symbol.value.indexOf(favStock);
    if (index === -1) {
        symbol.value.push(favStock);
    } else {
        symbol.value.splice(index, 1);
    }
    localStorage.setItem('symbol', JSON.stringify(symbol.value));

    toggleFavorite.value = !toggleFavorite.value;
    console.log(toggleFavorite.value);
    
}

const search = () => {
        filteredStocks.value = props.stockInstockList?.filter((stock: any) => {
          return stock.StockSymbol.toLowerCase().includes(word.value.toLowerCase())
        });
    }

const toggleValue = () => {
    console.log(currentValue);
    if(currentValue==="%CHG"){
        currentValue = "CHG";
    } else if(currentValue==="CHG"){
        currentValue = "PO";
    } else{
        currentValue = "%CHG";
    }
    headerIndex.value++
        if(headerIndex.value>3){
            headerIndex.value=1
        }
}
const checkNull = (pricevalue:any) => {
    console.log(pricevalue);
    if(pricevalue == ""){
        return pricevalue = "0.00" 
    }
}
</script>
<template>
<div class="h-full w-ful border border-l-0 border-b-0 pb-4
            border-[#5f6672] border-opacity-25">
                <div class="p-1"></div>
                <div class="relative mx-1.5"> 
                    <span class="absolute h-full top-1.5 left-2 cursor-pointer">
                        <svg data-v-3d401098="" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-full"><g fill="none">
                            <path d="M20.02 11.01A9.01 9.01 0 1 1 11.01 2a9.01 9.01 0 0 1 9.01 9.01z"></path>
                            <path d="M11.01 4.5c-3.59 0-6.51 2.92-6.51 6.51s2.92 6.51 6.51 6.51 6.51-2.92 6.51-6.51S14.6 4.5 11.01 4.5m0-2.5a9.01 9.01 0 1 1 0 18.02 9.01 9.01 0 0 1 0-18.02z" fill="#5f6672"></path>
                            </g><path d="M21.99 18.95a2.1 2.1 0 0 0-1.97-.95 2.02 2.02 0 0 0-1.68.79 2.029 2.029 0 0 0-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64a1.148 1.148 0 0 0 .19.01 2.168 2.168 0 0 0 1.78-1.18 2.06 2.06 0 0 0 .31-2.15z" fill="#5f6672"></path>
                        </svg>
                    </span>
                    <div>
                        <input type="text" @input="search" v-model="word" placeholder="Search..." 
                        class=" pl-10 p-2 w-[100%] outline-none
                                text-sm font-bold text-white
                                border border-white border-opacity-10
                                rounded bg-[#2A2D35] uppercase">
                    </div>
                </div>

                <div class="h-full mt-2">
                    <div class="relative w-full flex h-[38px] border-0 ">
                        <div class="text-xs p-3 text-[#94a3b8] flex justify-start w-1/3">
                            <span class="cursor-pointer whitespace-nowrap">
                                <svg height="15.892" width="15.999" xmlns="http://www.w3.org/2000/svg" data-cy="stockList.Favorites" class="w-4 mb-1 mr-3 inline-block duration-300 fill-[#94a3b8] cursor-pointer ">
                                    <path d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 0 0 0-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68L8.8 14.019a1.7 1.7 
                                    0 0 0-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68L3.1 11.3a1.817 1.817 0 0 0-.43-1.46L.679 7.849c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z"></path>
                                </svg>
                                Symbol</span
                            >
                        </div>

                        <div class="text-xs p-3 text-[#94a3b8] flex justify-center whitespace-nowrap w-1/3">Last Price</div>
                        <div class="text-xs p-3 text-[#94a3b8] flex justify-end cursor-pointer whitespace-nowrap w-1/3" @click="toggleValue()">{{ currentValue }}
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.001" height="13.092" 
                                        class="w-4 fill-navbarIconBlack fill-[#94a3b8] hover:fill-white mb-1 ml-2 inline-block duration-300">
                                        <g data-name="Group 40035">
                                            <path data-name="Union 97" 
                                                  d="M13.462 3.836H1.83l1.759 1.8a.563.563 0 0 1 0 .78.532.532 0 0 1-.76 0L.157 3.681A.561.561 0 0 1 0 3.292a.565.565 
                                                  0 0 1 .036-.191.03.03 0 0 0 .006-.021.567.567 0 0 1 .123-.191L2.829.162a.529.529 0 0 1 .76 0 .561.561 0 0 1 0 .778l
                                                  -1.75 1.794h11.623a.549.549 0 0 1 .539.55.549.549 0 0 1-.539.552Zm.5 6.156a.033.033 0 0 0-.006.022.555.555 0 0 1-.123
                                                  .19l-2.663 2.728a.532.532 0 0 1-.762 0 .563.563 0 0 1 0-.778l1.753-1.794H.536a.548.548 0 0 1-.538-.55.548.548 0 0 1 
                                                  .538-.552h11.631l-1.759-1.8a.563.563 0 0 1 0-.778.531.531 0 0 1 .762 0l2.67 2.734a.558.558 0 0 1 .159.389.565.565 0 0 1-.035.189Z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                        </div>
                    </div>
                    <div class="vue-recycle-scroller ready direction-vertical overflow-y-auto h-[295px] scrollbar ">
                        <div class="vue-recycle-scroller__item-wrapper" style="min-height: 0px;">
                            <div class="vue-recycle-scroller__item-view" style="transform: translateY(0px);">
                                <div v-for="item in filteredStocks??stockInstockList" @click="resultPickStock(item?.StockNumber, item?.StockSymbol)" 
                                search class="border-0 flex cursor-pointer select-none text-white hover:bg-zinc-800">
                                    <div class="py-1.5 w-1/3 pl-3 text-xs whitespace-nowrap">
                                        <div class="w-full overflow-hidden">
                                            <span class="cursor-pointer">
                                                <svg height="15.892" 
                                                     width="15.999" 
                                                     xmlns="http://www.w3.org/2000/svg" 
                                                     data-cy="stockList.Favorites" 
                                                     class="fill-[#53585f] w-4 mb-1 mr-3 inline-block " 
                                                     @click="fav(item.StockSymbol)"
                                                     :class="{'fill-[#53585f]': !toggleFavorite, 'fill-[#f2ba40]': toggleFavorite}">
                                                    <path d="m9.389 1.149 1.41 2.82a1.759 1.759 0 0 0 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99a1.726 1.726 
                                                    0 0 0-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68L8.8 14.019a1.7 1.7 0 0 0-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68L3.1 
                                                    11.3a1.817 1.817 0 0 0-.43-1.46L.679 7.849c-1.17-1.17-.79-2.35.84-2.63l2.55-.42a1.727 1.727 0 0 0 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span data-v-3bcf84b8="" class="inline-block">{{item?.StockSymbol}}</span>
                                        </div>
                                    </div>
                                    <div :class="changeTextColor(item?.LastSalePrice, item?.PriorClosePrice, item?.Ceiling, item?.Floor)" class="text-sm text-right pr-3 py-1.5 w-1/3">
                                        {{item?.LastSalePrice}}
                                    </div>
                                    <div v-if="headerIndex===1" :class="changeTextColor(item?.LastSalePrice, item?.PriorClosePrice, item?.Ceiling, item?.Floor)" class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{item?.ChangePricePct}}%
                                    </div>
                                    <div v-else-if="headerIndex===2" :class=" changeTextColor(item?.LastSalePrice, item?.PriorClosePrice, item?.Ceiling, item?.Floor)" class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{item?.ChangePrice}}
                                    </div>
                                    <div v-else-if="headerIndex===3" :class=" changeTextColor(item?.LastSalePrice, item?.PriorClosePrice, item?.Ceiling, item?.Floor)" class="text-sm text-right py-1.5 w-1/3 pr-3">
                                        {{ checkNull(item?.ProjectedPrice) }}
                                    </div>
                                </div>
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