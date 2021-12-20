import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
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

const requireAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const accessToken = localStorage.getItem('accessToken') || 'bad';
  if (accessToken === 'good') {
    next();
  } else {
    alert('로그인 유효기간이 지났습니다.');
    next('/login');
  }
};

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: DashBoard,
    beforeEnter: requireAuth,
    meta: {
      title: '대쉬보드',
    },
  },
  {
    path: '/ai',
    component: Ai,
    meta: {
      title: '인공지능',
    },
  },
  {
    path: '/sendSms',
    component: SendSms,
    meta: {
      title: '일반문자',
    },
  },
  {
    path: '/event',
    component: Event,
    meta: {
      title: '스마트전단',
    },
  },
  {
    path: '/pop',
    component: Pop,
    meta: {
      title: 'POP',
    },
  },
  {
    path: '/tery-mall',
    component: TeryMall,
    meta: {
      title: '테리몰',
    },
  },
  {
    path: '/tery-chat',
    component: TeryChat,
    meta: {
      title: '채팅',
    },
  },
  {
    path: '/best-mall',
    component: BestMall,
    meta: {
      title: '무조건팔린다',
    },
  },
  {
    path: '/all-history',
    component: AllHistory,
    meta: {
      title: '내역',
    },
  },
  {
    path: '/group-manage',
    component: GroupManage,
    meta: {
      title: '고객관리',
    },
  },
  {
    path: '/distribution',
    component: CustomerDistribution,
    meta: {
      title: '고객분포',
    },
  },
  {
    path: '/store-info',
    component: StoreInfo,
    meta: {
      title: '매장정보',
    },
  },
];
export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes,
});

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

router.afterEach(to => {
  document.title = to.meta.title || 'Handy App';
});
