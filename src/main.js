import Vue from 'vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import Popup from './Popup.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(Popup)
}).$mount('#app');
