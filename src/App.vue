<template>
  <div id="portfolio" @:scroll="onScroll">
    <!-- Navigation -->
    <navbar-component ref="mainNav" :shrink-nav="shrinkNav" />

    <!-- Router outlet -->
    <div>
      <transition name="fade" mode="out-in" :duration="1000">
        <router-view/>
      </transition>
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
      // Only hide navbar on homepage
      if (this.$route.path === '/home') {
        const offsetY = window.pageYOffset
        this.shrinkNav = offsetY > 100
      } else {
        this.shrinkNav = true
      }
    }
  }
}
</script>
