import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import http from './http';
import auth from './auth';
import IndexView from './Index.vue';

const app = createApp(IndexView);

app.use(router);
app.use(http);
app.use(auth);

app.mount('#app');


