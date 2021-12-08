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
    link: '/dashboard',
    icon: [''],
    type: 'nav',
  },
  {
    name: '무제',
    subName: '',
    type: 'title',
  },
  {
    name: '인공지능',
    link: '/ai',
    icon: [''],
    type: 'nav',
  },
  {
    name: '행사',
    subName: '',
    type: 'title',
  },
  {
    name: '일반문자',
    link: '/sendSms',
    icon: [''],
    type: 'nav',
  },
  {
    name: '스마트전단문자',
    link: '/event',
    icon: [''],
    type: 'nav',
  },
  {
    name: '스마트POP',
    link: '/pop',
    icon: [''],
    type: 'nav',
  },
  {
    name: '온라인주문',
    subName: '',
    type: 'title',
  },
  {
    name: '테리주문',
    link: '/tery-mall',
    icon: [''],
    type: 'nav',
  },
  {
    name: '테리채팅',
    link: '/tery-chat',
    icon: [''],
    type: 'nav',
  },
  {
    name: '무조건팔린다',
    link: '/best-mall',
    icon: [''],
    type: 'nav',
  },
  {
    name: '내역',
    subName: '',
    type: 'title',
  },
  {
    name: '충전/사용/카드',
    link: '/all-history',
    icon: [''],
    type: 'nav',
  },
  {
    name: '무제',
    subName: '',
    type: 'title',
  },
  {
    name: '고객관리',
    link: '/group-manage',
    icon: [''],
    type: 'nav',
  },
  {
    name: '고객분포',
    link: '/distribution',
    icon: [''],
    type: 'nav',
  },
  {
    name: '무제',
    subName: '',
    type: 'title',
  },
  {
    name: '매장정보',
    link: 'store-info',
    icon: [''],
    type: 'nav',
  },
];

export default menu;
