import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import * as filters from './filters';
import methods from './utils/method';
import './assets/css/index.less';
import wms from 'djcpsweb';
// Date.prototype.toJSON = function () { //用于解决JSON.stringify转换JSON时日期时间不准确的问题，在search组件中有影响
//   return timeFormat(this, 'yyyy-MM-dd HH:mm:ss');
// };
Vue.use(wms);
Object.defineProperties(Vue.prototype, {
  $method: {
    get() {
      return methods;
    }
  }
});
Vue.use(ElementUI);
Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

export default Vue;
