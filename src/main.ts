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
  faStoreAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faComments, faListAlt, faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';
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
  faStoreAlt,
  faSignInAlt,
  faBell,
  faUserCircle,
);
// document.addEventListener('click', (event: Event) => {
//   const toggle = document.querySelector('.toggle');
//   const showElement = document.querySelector('.show');
//   const target =  (event.target) as HTMLDivElement
//   console.log(target.parentElement?.classList)
//   console.log(target.parentElement?.classList.contains('btn-active'))
//   // if (showElement === event.target) {
//   //   console.log(showElement, event.target)
//   //   showElement?.classList.remove('show');
//   // }
// });

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

const modal: ModalInterface = {
  show: (key: string) => {
    console.log(key);
    const elem = document.querySelector(`div[name=${key}]`) as HTMLDivElement;
    elem.style.display = 'block';
    const slibling = elem.nextSibling as HTMLDivElement;
    slibling.style.display = 'block';
  },
  hide: (key: string) => {
    console.log(key);
    const elem = document.querySelector(`div[name=${key}]`) as HTMLDivElement;
    elem.style.display = 'none';
    const slibling = elem.nextSibling as HTMLDivElement;
    slibling.style.display = 'none';
  },
};
app.provide('$modal', modal);
app.use(router);
app.mount('#app');
