import Vue from 'vue'
import App from './App.vue'
import './assets/app.css'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomeComponent from './pages/HomeComponent.vue'
import AboutComponent from './pages/AboutComponent.vue'
import ProjectsComponent from './pages/ProjectsComponent.vue'
import ContactComponent from './pages/ContactComponent.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

/* Routes */
const routes = [
  { path: '/home', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/projects', component: ProjectsComponent },
  { path: '/contact', component: ContactComponent },
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
