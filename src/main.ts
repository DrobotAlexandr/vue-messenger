import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

import '@/assets/scss/common.scss';
import '@/assets/fonts/fonts.css';
import '@/assets/css/app.css';
import '@/assets/css/mobile.css';
import 'bootstrap';


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
