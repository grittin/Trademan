import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)



app.mount('#app')