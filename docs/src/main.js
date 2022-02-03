import Vue from 'vue';
import App from './App';
import router from './router';
import TWVue from '../../src';

import './assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.use(TWVue);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
