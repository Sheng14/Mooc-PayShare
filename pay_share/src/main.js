import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

axios.interceptors.request.use(function() {

});

axios.interceptors.response.use(function(response) {
  let res = response;
  if (res.code !== 0) console.log('error');
}, function(error) {
  return Promse.reject(error);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
