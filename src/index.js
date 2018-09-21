import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomeComponent from './pages/HomeComponent.vue'
import ProjectPageComponent from './pages/ProjectPageComponent.vue'

/* Styles */
import './assets/scss/creative.scss'
import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

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
