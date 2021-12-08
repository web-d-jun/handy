import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '@/views/TheDashboard.vue';
import Ai from '@/views/TheAi.vue';
import SendSms from '@/views/TheSendSms.vue';
import Event from '@/views/TheEvent.vue';
import Pop from '@/views/ThePop.vue';
import TeryMall from '@/views/TheTeryMall.vue';
import TeryChat from '@/views/TheTeryChat.vue';
import BestMall from '@/views/TheBestMall.vue';
import AllHistory from '@/views/TheAllHistory.vue';
import GroupManage from '@/views/TheGroupManage.vue';
import CustomerDistribution from '@/views/TheDistribution.vue';
import StoreInfo from '@/views/TheStoreInfo.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: DashBoard,
  },
  {
    path: '/ai',
    component: Ai,
  },
  {
    path: '/sendSms',
    component: SendSms,
  },
  {
    path: '/event',
    component: Event,
  },
  {
    path: '/pop',
    component: Pop,
  },
  {
    path: '/tery-mall',
    component: TeryMall,
  },
  {
    path: '/tery-chat',
    component: TeryChat,
  },
  {
    path: '/best-mall',
    component: BestMall,
  },
  {
    path: '/all-history',
    component: AllHistory,
  },
  {
    path: '/group-manage',
    component: GroupManage,
  },
  {
    path: '/distribution',
    component: CustomerDistribution,
  },
  {
    path: '/store-info',
    component: StoreInfo,
  },
];
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});
