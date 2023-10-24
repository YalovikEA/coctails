import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router/index';
import App from './App.vue';

import './assets/styles/normalize.css';
import './assets/styles/style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
