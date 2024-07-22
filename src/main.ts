import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/common.scss';
import '@/assets/fonts/fonts.css';
import '@/assets/css/app.css';
import 'bootstrap';

createApp(App).use(router).mount('#app')
