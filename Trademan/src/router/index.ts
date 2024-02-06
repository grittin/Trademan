import { createRouter, createWebHistory } from 'vue-router';
import Market from '../page/Market/Market.vue';
import Trade from '../page/Trade/Trade.vue';
import test from '../page/test.vue'



const routes = [
    {
        path: '',
        name: 'Market',
        component: Market,
    },
    {
        path: '/Market',
        name: 'Market',
        component: Market,
    },
    {
        path: '/Trade',
        name: 'Trade',
        component: Trade,
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;