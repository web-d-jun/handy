interface Menu {
  name: string;
  subName?: string;
  link?: string;
  icon?: string[];
  type: string;
}

const menu: Menu[] = [
  {
    name: 'Dashboard',
    subName: '',
    type: 'title',
  },
  {
    name: '대쉬보드',
    link: '/v1/dashboard',
    icon: ['fas', 'chart-bar'],
    type: 'nav',
  },
  {
    name: 'A.I',
    subName: '',
    type: 'title',
  },
  {
    name: '인공지능',
    link: '/v1/ai',
    icon: ['fas', 'brain'],
    type: 'nav',
  },
  {
    name: '행사',
    subName: '',
    type: 'title',
  },
  {
    name: '일반문자',
    link: '/v1/sendSms',
    icon: ['far', 'envelope'],
    type: 'nav',
  },
  {
    name: '스마트전단문자',
    link: '/v1/event',
    icon: ['fas', 'file-contract'],
    type: 'nav',
  },
  {
    name: '스마트POP',
    link: '/v1/pop',
    icon: ['fas', 'file-image'],
    type: 'nav',
  },
  {
    name: '온라인주문',
    subName: '',
    type: 'title',
  },
  {
    name: '테리주문',
    link: '/v1/tery-mall',
    icon: ['fas', 'shipping-fast'],
    type: 'nav',
  },
  {
    name: '테리채팅',
    link: '/v1/tery-chat',
    icon: ['far', 'comments'],
    type: 'nav',
  },
  {
    name: '무조건팔린다',
    link: '/v1/best-mall',
    icon: ['fas', 'shipping-fast'],
    type: 'nav',
  },
  {
    name: '내역',
    subName: '',
    type: 'title',
  },
  {
    name: '충전/사용/카드',
    link: '/v1/all-history',
    icon: ['far', 'list-alt'],
    type: 'nav',
  },
  {
    name: '관리',
    subName: '',
    type: 'title',
  },
  {
    name: '고객관리',
    link: '/v1/group-manage',
    icon: ['fas', 'address-book'],
    type: 'nav',
  },
  {
    name: '고객분포',
    link: '/v1/distribution',
    icon: ['fas', 'users'],
    type: 'nav',
  },
  {
    name: '설정',
    subName: '',
    type: 'title',
  },
  {
    name: '매장정보',
    link: '/v1/store-info',
    icon: ['fas', 'store-alt'],
    type: 'nav',
  },
];

export default menu;
