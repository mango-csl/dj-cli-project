// import './compatible';//浏览器版本过低处理
import Vue from './vuePackage';
// import VueRouter from 'vue-router';
import store from './store/index';
import App from './App';
import routes from './router';

// export default new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: {App}
// });

// Vue.use(Router);
// if (process.env.NODE_ENV === 'development') {
  Vue.use(VueRouter);
// }

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  store
}).$mount('#app');
