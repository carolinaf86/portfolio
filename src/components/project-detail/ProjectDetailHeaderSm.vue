<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h1 class="text-uppercase">
          <strong>{{ content.h1 }}</strong>
        </h1>
        <h3 class="mt-4">
          {{ content.h3 }}
        </h3>
        <div class="mt-4">
          <router-link class="btn btn-light mr-2 mb-5" :to="previousUrl"><i class="fas fa-chevron-left"></i></router-link>
          <router-link class="btn btn-light mb-5" :to="nextUrl"><i class="fas fa-chevron-right"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
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
