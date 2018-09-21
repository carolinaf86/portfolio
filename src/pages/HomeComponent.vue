<template>
  <div>
    <header id="home" class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Caroline</strong>
            </h1>
            <hr>
          </div>
          <div class="col-lg-8 mx-auto">
            <h4 class="text-faded mb-5">A frontend web developer based in Barcelona, Spain</h4>
            <a class="btn btn-primary btn-xl" href="#" v-scroll-to="'#about'" >Find Out More</a>
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
