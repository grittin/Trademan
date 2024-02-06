import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useStore = defineStore('loadallinformation', () => {
    const stockInfo = ref<any>(0)
    const dataStock = computed(() => stockInfo.value);

    
    const setloadallinformation = (data: any) => {
        stockInfo.value = data
    }
    return {stockInfo}
  })