<script setup lang="ts">
import axios from 'axios';
import { ref, watch } from 'vue';

let stockInfox = "ab"
const stockInfoxy = ref("ab")

const apiUrl = "https://demotrade.efintradeplus.com/efinTrade.TradeManAPI.DEV/api/webtrade/WebTradeRequest"


    axios.post(apiUrl, loadallinformationRequest);

watch(stockInfoxy,  () =>{
    console.log(stockInfoxy.value);
            
})
watch(() => stockInfox, () =>{
    console.log(stockInfox);
    
})

</script>

<template>
<div class="bg-black">
<div class="text-white">{{stockInfox}}</div>
                <div class="text-white">{{ stockInfoxy }}</div>
                <input v-model="stockInfox" class="p-2 bg-white z-[100]">
                <input v-model="stockInfoxy" class="p-2 bg-white z-[100]">
            </div>
</template>