<script setup lang="ts">
import { onMounted, ref } from 'vue';


const props = defineProps({
    symbol: {
        type: String
    }
})

const setStock = ref({
  StockNumber: '',
  StockSymbol: '',
});
let chartsymbol = ref('')

onMounted(() => {

    let storedgetStock = localStorage.getItem('getStock');
        // console.log(typeof(setStock.value));
        if (storedgetStock) {
            let obj = JSON.parse(storedgetStock);
            setStock.value = obj
            chartsymbol.value = obj.StockSymbol;
            // console.log(chartsymbol.value);
        }
});

</script>
<template>
    <div class="h-full border border-b
                border-[#5f6672] border-opacity-25">
                <iframe
                    class="h-full w-full"
                    :src="`https://demo.efinancethai.com/html5/controls/stockchart_trade/chartSTI.asp?userid=98-grittin&symbol=${symbol??chartsymbol}&hidesearch=Y&rgb=20,20,20&tp=0&support_new_design=true`"
                ></iframe>
    </div>
    
</template>

<!-- <div class="h-full border border-b
                border-[#5f6672] border-opacity-25">
                <iframe
               
                    class="h-full w-full"
                    
                    :src="`https://demo.efinancethai.com/html5/controls/stockchart_trade/chartSTI.asp?userid=98-grittin&symbol=${chart}&hidesearch=Y&rgb=20,20,20&tp=0&support_new_design=true`"
      
                ></iframe>
            </div> -->