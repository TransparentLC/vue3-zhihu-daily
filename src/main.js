import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://zhihu-daily.transparentlc.workers.dev/api/4/' : '/api/4/',
});
app.use(router).mount('#app');
