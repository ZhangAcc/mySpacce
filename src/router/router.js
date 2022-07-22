import child from '../child.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: child },
]


const router = createRouter({

    history: createWebHashHistory(),
    routes,
})


export default router
