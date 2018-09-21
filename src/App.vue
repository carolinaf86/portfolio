<template>

  <body>

    <!-- Navigation -->
    <navbar-component/>

    <!-- Router outlet -->
    <div class="container-bg-black">
      <transition name="fade" mode="out-in" :duration="1000">
        <router-view/>
      </transition>
    </div>

    <footer-component/>

  </body>

</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
