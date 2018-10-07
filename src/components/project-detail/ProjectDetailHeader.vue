<template>
  <div class="container">
    <show-at breakpoint="large">
      <div class="row">
        <div class="col-lg-1">
          <router-link id="carouselChevronLeft" class="carousel-control-prev mb-5" :to="previousUrl"><i class="fas fa-3x fa-chevron-left"></i></router-link>
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
          <router-link id="carouselChevronRight" class="carousel-control-next mb-5" :to="nextUrl"><i class="fas fa-3x fa-chevron-right"></i></router-link>
        </div>
      </div>
    </show-at>
    <show-at breakpoint="mediumAndBelow">
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
    </show-at>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'

export default {
  components: {
    showAt
  },
  props: {
    content: {
      default: function () {
        return ['']
      }
    }
  },
  computed: {
    nextUrl: function () {
      const {id} = this.$route.params
      let next = +id + 1
      if (next > 6) next = 1
      return `/projects/${next}`
    },
    previousUrl: function () {
      const {id} = this.$route.params
      let prev = +id - 1
      if (prev < 1) prev = 6
      return `/projects/${prev}`
    }
  }
}
</script>
