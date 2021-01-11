import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'
import '@/utils/rem'

import '@/styles/globle.scss';

import { baseMixin } from '@/mixins/baseMixin.js'

Vue.config.productionTip = false
Vue.mixin(baseMixin)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
