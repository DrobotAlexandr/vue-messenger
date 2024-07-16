import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/common.scss';
import '@/assets/css/app.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).mount('#app')
