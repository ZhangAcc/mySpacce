import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './index.css'

const app = createApp(App)
app.component('comp', { template: '<div>我是组件</div>' })
app.use(router).mount('#app')
