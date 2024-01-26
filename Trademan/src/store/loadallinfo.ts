import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useStore = defineStore('loadallinformation', () => {
    const count = ref<any>(0)
  
    const setloadallinformation = (data: any) => {
        count.value = data
    }
  
    return { count}
  })