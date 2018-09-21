<template>
  <div>
    <header id="home" class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Your Favorite Source of Free Bootstrap Themes</strong>
            </h1>
            <hr>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download
              your template and start going, no strings attached!</p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    <about-component/>
    <projects-component/>
    <contact-component/>
  </div>
</template>

<script>

import AboutComponent from '../components/AboutComponent.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'

export default {
  components: {
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  }
}

</script>
