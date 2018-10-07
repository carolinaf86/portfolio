<template>
  <div>
    <header id="project-detail-header"
            class="masthead project-header text-center text-white d-flex"
            v-bind:class="headerClass">
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
    headerClass: function () {
      return +this.$route.params.id === 6 ? 'default' : `portfolio-${this.$route.params.id}`
    }
  }
}
</script>
