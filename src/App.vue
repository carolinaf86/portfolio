<template>
  <div id="portfolio" @:scroll="onScroll">
    <!-- Navigation -->
    <navbar-component ref="mainNav" :shrink-nav="shrinkNav"/>

    <!-- Router outlet -->
    <div>
      <router-view/>
    </div>

    <footer-component/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data: function () {
    return {
      shrinkNav: false
    }
  },
  watch: {
    $route (to, from) {
      // Always check scroll position on route change and update navbar class accordingly
      this.onScroll()
    }
  },
  mounted: function () {
    this.navbarCollapse()
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function () {
      setTimeout(this.navbarCollapse(), 500)
    },
    navbarCollapse: function () {
      // Don't hide navbar on CV page
      if (this.$route.path === '/cv') {
        this.shrinkNav = true
      } else {
        const offsetY = window.pageYOffset
        this.shrinkNav = offsetY > 100
      }
    }
  }
}
</script>
