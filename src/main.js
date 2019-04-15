import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from './util/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components'
import './assets/icons'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  if(to.path){
    next()
  }else{
    next('/404')
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
