
import index from '@/views/index';
import detail from '@/views/detail';
import manage from '@/views/manage';
import componentTag from '../views/component_tag/index.vue';
export default [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/manage',
    name: 'manage',
    component: manage
  },
  {
    path: '/componentTag',
    name: 'componentTag',
    component: componentTag
  }
];
