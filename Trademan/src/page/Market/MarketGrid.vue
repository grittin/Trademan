<script setup lang="ts">
// import MarketCard from '@/components/MarketCard.vue';
import type { TSectorInformation } from '@/type/loadstock';
import { onMounted, ref, watch, type PropType } from 'vue';
// import { ws } from '@/api/Socket'

// const marketName = ref(["MAI", "SET50", "SET100", "SETHD", "SSET", "SETCLMV", "SETWB", "SETESG", "SET50FF", "SET100FF"]);
const props = defineProps({
    sectorIns: {
        type: Object as PropType <TSectorInformation[]>,
        require: true,
        default: {}
    }
});

const filtersymbol = ref<TSectorInformation[]>()
const cardSymbol = ref<TSectorInformation[]>()
const setIndex = ref<TSectorInformation[]>([])

const changeValueColor = (currentValue:string, previousValue:string) => {
    // let currentValueNumber = Number(currentValue)
    // let previousValueNumber = Number(previousValue)
    if(currentValue === "0.00"){
        return 'text-warning';
    } else if(currentValue === previousValue) {
        return 'text-warning';
    } else if(currentValue > previousValue){
        return 'text-success';
    } else if(currentValue < previousValue){
        return 'text-error';
    }
}


watch(() => props.sectorIns, () => {
    // const test
    console.log(props.sectorIns);
    filtersymbol.value = props.sectorIns.filter((marketType) => {
        return marketType.SectorType === "MARKET"
    })
    setIndex.value = filtersymbol.value?.slice(0, 1)
    console.log("sd",setIndex.value);

    cardSymbol.value = filtersymbol.value?.slice(1)
    console.log(filtersymbol.value);
})
// console.log(props.sectorIns);

</script>
<template>
    <div class="pt-3 mb-2 border-b border-[#5F6672] border-opacity-30">
        <div class="pb-3 flex flex-wrap">
            <div class="flex text-white">
                <div class="flex">
                    <div class="my-auto text-xl font-bold">{{setIndex[0]?.SectorSymbol}}</div>
                    <div :class="changeValueColor(setIndex[0]?.IndexValue,setIndex[0]?.IndexPrior)" class="my-auto text-xl ml-3 font-bold">{{setIndex[0]?.IndexValue}}</div>
                    <div :class="changeValueColor(setIndex[0]?.IndexValue,setIndex[0]?.IndexPrior)" class="my-auto text-sm ml-5 font-bold whitespace-nowrap">{{setIndex[0]?.IndexValueChange}}&nbsp;&nbsp;{{setIndex[0]?.IndexValueChangePct}}%
                    </div>
                </div>
                <div class="ml-3 flex">
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>High:</div>
                            <div :class="changeValueColor(setIndex[0]?.IndexHigh,setIndex[0]?.IndexPrior)" class="ml-1">{{setIndex[0]?.IndexHigh}} {{setIndex[0]?.IndexHighChange}}</div>
                        </div>
                    </div>
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>Low:</div>
                            <div :class="changeValueColor(setIndex[0]?.IndexLow,setIndex[0]?.IndexPrior)" class="ml-1">{{setIndex[0]?.IndexLow}} {{setIndex[0]?.IndexLowChange}}</div>
                        </div>
                    </div>
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>Value:</div>
                            <div class="ml-1 text-ceiling">{{setIndex[0]?.TotalValue}}{{setIndex[0]?.TotalValueUnitFormat}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-white my-auto ml-auto md:text-left">
                <div class="text-md">
                    Call Market
                </div>
            </div>
        </div>
    </div>
        <!-- <MarketCard v-for="(item,index) in props.sectorIn" :key="index" :sectorIns="item"></MarketCard> -->
    <div class="grid grid-cols-5 gap-y-5 gap-x-3 justify-between text-[#fff]">
        <div v-for="(item) in cardSymbol" class="p-4 2xl:px-4 lg:px-2 md:px-4 sm:px-4 flex-grow item-blocks border border-opacity-30 rounded-lg border-[#5F6672]">
            <div class=" text-white font-bold">{{item?.SectorSymbol}}</div>
            <div :class="changeValueColor(item?.IndexValue,item?.IndexPrior)" class="text-xl">
                <span class="font-bold ">
                {{item?.IndexValue}}</span
                >
                <span class="text-sm ml-1">
                {{item?.IndexValueChange}} {{item?.IndexValueChangePct}}%</span
                >
            </div>
            <div class="text-xs">
                <span class="text-white">Value: </span>
                <span class="text-ceiling">{{item?.TotalValue}}{{item?.TotalValueUnitFormat}}</span>
            </div>
            <div class="mt-5">
                <div class="w-1/2 inline-block">
                    <div>
                        <span class="inline-block mr-1 h-2 w-2">
                            <svg viewBox="0 0 8.485 8.485" xmlns="http://www.w3.org/2000/svg" class="fill-success"><path d="m6 0v6h-6z" transform="matrix(-.70710678 -.70710678 .70710678 -.70710678 4.243 8.485)"/></svg>
                        </span>
                        <span class="text-white text-xs">
                            High</span
                        >
                    </div>
                    <div :class="changeValueColor(item?.IndexHigh,item?.IndexPrior)" class="text-xs text-success">{{item?.IndexHigh}} {{item?.IndexHighChange}}</div>
                </div>
                <div class="w-1/2 inline-block text-white">
                    <div>
                        <span class="inline-block mr-1 h-2 w-2">
                            <svg  class="fill-[#fd3b31]" 
                                viewBox="0 0 8.485 8.485" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 0v6h-6z" transform="matrix(.70710678 .70710678 -.70710678 .70710678 4.243 0)"/>
                            </svg>
                        </span>
                        <span class="text-white text-xs">
                            Low</span
                        >
                    </div>
                    <div :class="changeValueColor(item?.IndexLow,item?.IndexPrior)" class="text-xs text-error">{{item?.IndexLow}} {{item?.IndexLowChange}}</div>
                </div>
            </div>
        </div>
    </div>
</template>