import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import pinia from './plugins/pinia'

createApp(App).use(pinia).mount('#app')
