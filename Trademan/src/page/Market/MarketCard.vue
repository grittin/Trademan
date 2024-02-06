<script setup lang="ts">
import type { TSectorInformation } from '@/type/loadstock';
import type { PropType } from 'vue';
// const props = defineProps(['marketName']);

const props = defineProps({
    sectorIns: {
        type: Object as PropType <TSectorInformation[]>,
        require: true,
        default: {}
    }
})
</script>
<template>
    <div class="p-4 2xl:px-4 lg:px-2 md:px-4 sm:px-4 flex-grow item-blocks border border-opacity-30 rounded-lg border-[#5F6672]">
            <div class=" text-white font-bold">{{sectorIns?.SectorSymbol}}</div>
            <div class="text-xl">
                <span class="font-bold text-warning">
                410.43</span
                >
                <span class="text-sm text-warning">
                0.00 0.00%</span
                >
            </div>
            <div class="text-xs">
                <span class="text-white">Value: </span>
                <span class="text-ceiling">0.00</span>
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
                    <div class="text-xs text-success">408.09 -2.34</div>
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
                    <div class="text-xs text-error">408.09 -2.34</div>
                </div>
            </div>
        </div>
</template>