<template>
  <div>
    <header id="home" class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Caroline Fuller</strong>
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
    <skills-component/>
    <projects-component/>
    <cv-component/>
  </div>
</template>

<script>

import AboutComponent from '../components/home/AboutComponent.vue'
import ProjectsComponent from '../components/home/ProjectsComponent.vue'
import CvComponent from '../components/home/CvComponent.vue'
import SkillsComponent from '../components/home/SkillsComponent.vue'

export default {
  components: {
    AboutComponent,
    ProjectsComponent,
    CvComponent,
    SkillsComponent
  }
}

</script>
