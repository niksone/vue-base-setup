import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import pinia from './plugins/pinia'
import router from './router'

createApp(App).use(pinia).use(router).mount('#app')
