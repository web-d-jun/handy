import { createRouter, createWebHistory } from 'vue-router';
import testVue from './views/testVue.vue';

const routes = [
  { path: '/home', redirect: '/' },
  {
    path: '/testVue',
    component: testVue,
  },
];
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
