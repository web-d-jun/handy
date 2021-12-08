import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import { router } from './router';
import './index.css';

library.add(faUserSecret, faBars);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
