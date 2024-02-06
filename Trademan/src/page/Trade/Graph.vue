<script setup lang="ts">
import { onMounted, ref } from 'vue';


const props = defineProps({
    symbol: {
        type: String
    }
})
let chartSymbol = ref('')

onMounted(() => {
    let storedGetStock = localStorage.getItem('setStock');
    let res
        if (storedGetStock){
            res = JSON.parse(storedGetStock);
            chartSymbol.value = res.StockSymbol;
        } 
});

</script>
<template>
    <div class="h-full border border-b
                border-[#5f6672] border-opacity-25">
                <iframe
                    class="h-full w-full"
                    :src="`https://demo.efinancethai.com/html5/controls/stockchart_trade/chartSTI.asp?userid=98-grittin&symbol=${symbol ?? chartSymbol}&hidesearch=Y&rgb=20,20,20&tp=0&support_new_design=true`"
                ></iframe>
    </div>
</template>