<template>
  <div>
    <header id="project-detail-header"
            :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead project-header text-center text-white d-flex">
      <project-detail-header :content="contentForRoute"/>
    </header>
    <project-detail-component :text="contentForRoute.text"/>
  </div>
</template>
<script>

import ProjectDetailComponent from '../components/project-detail/ProjectDetailComponent.vue'
import ProjectDetailHeader from '../components/project-detail/ProjectDetailHeader.vue'
import Content from '../content.js'

export default {
  components: {
    ProjectDetailComponent,
    ProjectDetailHeader
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
