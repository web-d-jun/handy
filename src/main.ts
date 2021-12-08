import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faBars,
  faChartBar,
  faBrain,
  faFileContract,
  faFileImage,
  faShippingFast,
  faAddressBook,
  faUsers,
  faStoreAlt
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faComments, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import { router } from './router';
import './index.css';

library.add(
  faUserSecret,
  faBars,
  faChartBar,
  faBrain,
  faEnvelope,
  faFileContract,
  faFileImage,
  faShippingFast,
  faComments,
  faListAlt,
  faAddressBook,
  faUsers,
  faStoreAlt
);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
