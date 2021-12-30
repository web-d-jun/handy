import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import axios, { AxiosResponse } from 'axios';
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
import Login from '@/views/TheLogin.vue';
import Home from '@/views/TheHome.vue';

const requireAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const accessToken = localStorage.getItem('accessToken') || '';
  const header = {
    headers: {
      Authorization: accessToken,
    },
  };

  interface CheckResData {
    state: string;
    msg: string;
  }

  try {
    axios.get('http://localhost:3000/login/check', header).then((res: AxiosResponse<CheckResData>) => {
      if (res.data.msg === 'good') {
        next();
      } else {
        alert('로그인 유효기간이 지났습니다.');
        next('/login');
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const routes = [
  {
    path: '/',
    redirect: '/v1/dashboard',
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '로그인',
    },
  },
  {
    path: '/v1',
    component: Home,
    children: [
      {
        path: '/v1',
        redirect: '/v1/dashboard',
      },
      {
        path: '/v1/dashboard',
        component: DashBoard,
        beforeEnter: requireAuth,
        meta: {
          title: '대쉬보드',
        },
      },
      {
        path: '/v1/ai',
        component: Ai,
        beforeEnter: requireAuth,
        meta: {
          title: '인공지능',
        },
      },
      {
        path: '/v1/sendSms',
        component: SendSms,
        beforeEnter: requireAuth,
        meta: {
          title: '일반문자',
        },
      },
      {
        path: '/v1/event',
        component: Event,
        beforeEnter: requireAuth,
        meta: {
          title: '스마트전단',
        },
      },
      {
        path: '/v1/pop',
        component: Pop,
        beforeEnter: requireAuth,
        meta: {
          title: 'POP',
        },
      },
      {
        path: '/v1/tery-mall',
        component: TeryMall,
        beforeEnter: requireAuth,
        meta: {
          title: '테리몰',
        },
      },
      {
        path: '/v1/tery-chat',
        component: TeryChat,
        beforeEnter: requireAuth,
        meta: {
          title: '채팅',
        },
      },
      {
        path: '/v1/best-mall',
        component: BestMall,
        beforeEnter: requireAuth,
        meta: {
          title: '무조건팔린다',
        },
      },
      {
        path: '/v1/all-history',
        component: AllHistory,
        beforeEnter: requireAuth,
        meta: {
          title: '내역',
        },
      },
      {
        path: '/v1/group-manage',
        component: GroupManage,
        beforeEnter: requireAuth,
        meta: {
          title: '고객관리',
        },
      },
      {
        path: '/v1/distribution',
        component: CustomerDistribution,
        beforeEnter: requireAuth,
        meta: {
          title: '고객분포',
        },
      },
      {
        path: '/v1/store-info',
        component: StoreInfo,
        beforeEnter: requireAuth,
        meta: {
          title: '매장정보',
        },
      },
    ],
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
    transition?: string;
  }
}

router.afterEach(to => {
  document.title = to.meta.title || 'Handy App';
});
