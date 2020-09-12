import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import axios from 'axios';
// axios.defaults.baseURL = 'https://zhihu-daily.transparentlc.workers.dev/api/4/';
axios.defaults.baseURL = '/api/4/';

createApp(App).use(router).mount('#app');
