<template>
  <div>
    <header id="project-detail-header"
            :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead project-header text-center text-white d-flex">
      <show-at breakpoint="large">
        <project-detail-header-lg :content="contentForRoute"/>
      </show-at>
      <show-at breakpoint="mediumAndBelow">
        <project-detail-header-sm :content="contentForRoute"/>
      </show-at>
    </header>
    <project-detail-component :text="contentForRoute.text"/>
  </div>
</template>
<script>

import ProjectDetailComponent from '../components/project-detail/ProjectDetailComponent.vue'
import ProjectDetailHeaderLg from '../components/project-detail/ProjectDetailHeaderLg.vue'
import ProjectDetailHeaderSm from '../components/project-detail/ProjectDetailHeaderSm.vue'
import Content from '../content.js'
import { showAt, hideAt } from 'vue-breakpoints'

export default {
  components: {
    ProjectDetailComponent,
    ProjectDetailHeaderLg,
    ProjectDetailHeaderSm,
    showAt,
    hideAt
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
    }
  }
}
</script>
