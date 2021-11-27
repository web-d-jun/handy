import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/home', redirect: '/' }];
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
