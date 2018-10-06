<template>
  <div>
    <header id="project-detail-header"
            :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead project-header text-center text-white d-flex">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>{{ contentForRoute.h1 }}</strong>
            </h1>
            <h3 class="mt-4">
              {{ contentForRoute.h3 }}
            </h3>
            <div class="mt-4">
              <router-link class="btn btn-light mr-2 mb-5" :to="previousUrl"><i class="fas fa-chevron-left"></i></router-link>
              <router-link class="btn btn-light mb-5" :to="nextUrl"><i class="fas fa-chevron-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <project-detail-component :text="contentForRoute.text"/>
  </div>
</template>
<script>

import ProjectDetailComponent from '../components/ProjectDetailComponent.vue'
import Content from '../content.js'

export default {
  components: {
    ProjectDetailComponent
  },
  data: function () {
    return {
      content: Content
    }
  },
  computed: {
    contentForRoute: function () {
      return this.content[this.$route.params.id]
    },
    bgImgPath: function () {
      return +this.$route.params.id === 6
        ? '../../static/img/header.jpg'
        : `../../static/img/portfolio/${this.$route.params.id}.jpg`
    },
    nextUrl: function () {
      const {id} = this.$route.params
      if (+id > 5) return '/home'
      return `/projects/${+this.$route.params.id + 1}`
    },
    previousUrl: function () {
      const {id} = this.$route.params
      if (+id === 1) return '/home'
      return `/projects/${+this.$route.params.id - 1}`
    }
  }
}
</script>
