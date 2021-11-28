import { createRouter, createWebHistory } from 'vue-router';

const component = () => {
  console.log('fetching component');
  return import('./views/testVue.vue');
};
const delay = (t: number) => new Promise(resolve => setTimeout(resolve, t));
const routes = [{ path: '/home', redirect: '/' }, {
  path: '/testVue',
  component: async () => {
    await delay(500);
    return component()
  },

}];
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
