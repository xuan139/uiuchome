import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router/router'
import iView from 'iview'
import 'jquery';
import 'iview/dist/styles/iview.css'
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
Vue.use(iView)

Vue.config.productionTip = false

// 请求 /public 中的文件
var path = ''
if (process.env.NODE_ENV === "development") {
  path = `${window.location.origin}`
} else {
  path = '/'
}
Vue.prototype.$apiPrefix = path;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
