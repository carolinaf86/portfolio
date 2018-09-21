import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomeComponent from './pages/HomeComponent.vue'
import ProjectPageComponent from './pages/ProjectPageComponent.vue'
import VueScrollTo from 'vue-scrollto'

/* Styles */
import './assets/scss/creative.scss'
import './assets/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

/* Routes */
const routes = [
  { path: '/home', component: HomeComponent },
  { path: '/projects/:id', component: ProjectPageComponent },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
