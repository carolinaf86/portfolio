<template>
  <div>
    <header id="project-detail" :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>{{ contentForRoute.h1 }}</strong>
            </h1>
          </div>
          <div class="col-lg-8 mx-auto">
            <a href="#" v-scroll-to="'#project-detail'">
              <i class="fas fa-6x fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <project-detail-component/>
  </div>
</template>
<script>

import ProjectDetailComponent from '../components/ProjectDetailComponent.vue'

export default {
  components: {
    ProjectDetailComponent
  },
  data: function () {
    return {
      bgImgPath: `../../static/img/portfolio/fullsize/${this.$route.params.id}.jpg`,
      content: {
        1: {
          h1: 'Importing Fruit',
          h4: ''
        },
        2: {

        }
      }
    }
  },
  computed: {
    contentForRoute: function () {
      return this.content[this.$route.params.id]
    }
  }
}
</script>
