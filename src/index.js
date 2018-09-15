import Vue from 'vue'
import App from './App.vue'
import './assets/app.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
