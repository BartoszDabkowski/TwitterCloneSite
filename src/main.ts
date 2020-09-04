import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'font-awesome/css/font-awesome.min.css'
import VueMoment from 'vue-moment';
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.filter('numFormat', numFormat(numeral));

Vue.config.productionTip = false

Vue.use(vuetify, {
  iconfont: 'fa4'
 })

 Vue.use(VueAxios, axios)
 
 Vue.use(VueMoment)
 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

