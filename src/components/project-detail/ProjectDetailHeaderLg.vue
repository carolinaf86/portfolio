<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-1">
        <router-link class="carousel-control-prev mb-5" :to="previousUrl"><i class="fas fa-3x fa-chevron-left"></i></router-link>
      </div>
      <div class="col-lg-10 mx-auto">
        <h1 class="text-uppercase">
          <strong>{{ content.h1 }}</strong>
        </h1>
        <h3 class="mt-4">
          {{ content.h3 }}
        </h3>
      </div>
      <div class="col-lg-1">
        <router-link class="carousel-control-next mb-5" :to="nextUrl"><i class="fas fa-3x fa-chevron-right"></i></router-link>
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
      let next = +id + 1
      if (next > 6) next = 1
      return `/projects/${next}`
    },
    previousUrl: function () {
      const { id } = this.$route.params
      let prev = +id - 1
      if (prev < 1) prev = 6
      return `/projects/${prev}`
    }
  }
}
</script>
