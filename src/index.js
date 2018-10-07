import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomeComponent from './pages/HomeComponent.vue'
import ProjectPageComponent from './pages/ProjectPageComponent.vue'
import CVPageComponent from './pages/CVPageComponent.vue'
import VueScrollTo from 'vue-scrollto'
import VueScrollReveal from 'vue-scroll-reveal';

/* Styles */
import './assets/theme/creative.scss'
import './assets/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -50,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
})

/* Routes */
const routes = [
  { path: '/home', component: HomeComponent },
  { path: '/projects/:id', component: ProjectPageComponent },
  { path: '/cv', component: CVPageComponent },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
