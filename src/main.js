// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/cssLib/googleFont.css'
// import '../node_modules/vuetify/src/stylus/main.styl'
import './assets/css/style.css'

import {store} from './store'

Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
