<script setup lang="ts">
import type { PropType } from 'vue';
import type { TSectorInformation } from '@/type/loadstock';

const props = defineProps({
    sectorIndex:{
        type: Object as PropType <TSectorInformation[]>,
        default: {}
    }
})
console.log("as",props.sectorIndex);

</script>
<template>
    <div class="pt-3 mb-2 border-b border-[#5F6672] border-opacity-30">
        <div class="pb-3 flex flex-wrap">
            <div class="flex text-white">
                <div class="flex">
                    <div class="my-auto text-xl font-bold">{{sectorIndex[0].SectorSymbol}}</div>
                    <div class="my-auto text-xl ml-3 font-bold">{{sectorIndex[0].IndexValue}}</div>
                    <div class="my-auto text-sm ml-5 font-bold whitespace-nowrap">{{sectorIndex[0].IndexValueChange}}&nbsp;&nbsp;{{sectorIndex[0].IndexValueChangePct}}%
                    </div>
                </div>
                <div class="ml-3 flex">
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>High:</div>
                            <div class="ml-1">{{sectorIndex[0].IndexHigh}} {{sectorIndex[0].IndexHighChange}}</div>
                        </div>
                    </div>
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>Low:</div>
                            <div class="ml-1">{{sectorIndex[0].IndexLow}} {{sectorIndex[0].IndexLowChange}}</div>
                        </div>
                    </div>
                    <div class="flex ml-2">
                        <div class="my-auto flex text-sm">
                            <div>Value:</div>
                            <div class="ml-1">{{sectorIndex[0].TotalValue}}{{sectorIndex[0].TotalValueUnitFormat}}</div>
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
</template>