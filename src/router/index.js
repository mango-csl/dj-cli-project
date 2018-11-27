import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';
import detail from '@/views/detail';
import manage from '@/views/manage';

// Vue.use(Router);
if (process.env.NODE_ENV === 'development') {
  Vue.use(Router);
}

export default new Router({
  routes: [
    {
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
    }
  ]
});
