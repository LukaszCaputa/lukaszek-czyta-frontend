import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
