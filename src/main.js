import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import '@/utils/rem'

import '@/styles/globle.scss';

import { baseMixin } from '@/mixins/baseMixin.js'

Vue.config.productionTip = false
Vue.mixin(baseMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
