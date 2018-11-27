// import './compatible';//浏览器版本过低处理
import Vue from './vuePackage';
import store from '@/store/index';
import App from './App';
import router from './router';

export default new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
