<template>
  <b-nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'navbar-shrink': shrinkNav }" v-b-scrollspy id="mainNav">
    <div class="container">
      <a v-if="$route.path === '/home'" class="navbar-brand" href="#" v-scroll-to="'#home'">Home</a>
      <router-link v-else class="navbar-brand" to="/home">Home</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <template v-if="$route.path === '/home'">
            <li class="nav-item">
              <a class="nav-link" href="#about" v-scroll-to="'#about'">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills" v-scroll-to="'#skills'">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" v-scroll-to="'#projects'">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" v-scroll-to="'#footer'">Contact</a>
            </li>
          </template>
          <template v-if="$route.path === '/cv'">
            <li class="nav-item">
              <a class="nav-link" href="#name-row" v-scroll-to="'#name-row'">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills-row" v-scroll-to="'#skills-row'">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience-row" v-scroll-to="'#experience-row'">Work Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education-row" v-scroll-to="'#education-row'">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#languages-row" v-scroll-to="'#languages-row'">Languages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#references-row" v-scroll-to="'#references-row'">References</a>
            </li>
          </template>
          <li class="nav-item" v-if="$route.path !== '/cv'">
            <router-link class="nav-link" to="/cv">CV</router-link>
          </li>
        </ul>
      </div>
    </div>
  </b-nav>
</template>
<script>

export default {
  props: {
    shrinkNav: {
      type: Boolean,
      default: false
    }
  }
}

</script>
