<template>
  <section id="project-detail" class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <router-link class="btn btn-light mr-2 mb-5" :to="previousUrl"><i class="fas fa-chevron-left"></i></router-link>
          <router-link class="btn btn-light mb-5" :to="nextUrl"><i class="fas fa-chevron-right"></i></router-link>
          <p v-for="paragraph of text" class="text-faded mb-4">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    text: {
      default: function () {
        return ['']
      }
    }
  },
  computed: {
    nextUrl: function () {
      const { id } = this.$route.params
      if (+id > 5) return '/home'
      return `/projects/${+this.$route.params.id + 1}`
    },
    previousUrl: function () {
      const { id } = this.$route.params
      if (+id === 1) return '/home'
      return `/projects/${+this.$route.params.id - 1}`
    }
  }
}
</script>
