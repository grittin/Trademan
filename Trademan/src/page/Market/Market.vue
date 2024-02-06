<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import IndexValue from "./IndexValue.vue"
import MarketGrid from "./MarketGrid.vue"
import MarketSearch from "./MarketSearch.vue"
import {loadAllInformation} from "@/api/TradeManApi"
import type{TSectorInformation} from "@/type/loadstock"

const sectorInformation = ref<TSectorInformation[]>([])
const loadallinfo = async () => {
    await loadAllInformation().then((res: any)=>{
        const loadallinfoData = res.SectorInformation
        sectorInformation.value = loadallinfoData
    })
}

onMounted(() => {
    loadallinfo();
})

</script>
<template>
    
    <div class="bg-[#0B0E11]">
        <div class="duration-300 container xl:px-38 mx-auto 2xl:w-[75%] pb-10 font-ibm-plex-sans ">
            <div class="pt-2">
                <MarketGrid :sectorIns="sectorInformation"></MarketGrid>
            </div>
        </div>
        <div class="rounded-t-3xl bg-[#181A20] p-44">
            <!-- <MarketSearch></MarketSearch> -->
        </div>
    </div>
</template>