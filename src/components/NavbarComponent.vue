<template>
  <b-navbar toggleable="lg" fixed="top" :class="{ 'navbar-shrink': shrinkNav }" v-b-scrollspy id="mainNav">
    <div class="container">

      <b-navbar-brand v-if="$route.path === '/home'" href="#" v-scroll-to="'#home'">Home</b-navbar-brand>
      <b-navbar-brand v-else >
        <router-link to="/home">Home</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbarResponsive"></b-navbar-toggle>

      <b-collapse is-nav id="navbarResponsive">

        <b-navbar-nav class="ml-auto">

          <template v-if="$route.path === '/home'">
            <b-nav-item href="#about" v-scroll-to="'#about'">About</b-nav-item>
            <b-nav-item href="#skills" v-scroll-to="'#skills'">Skills</b-nav-item>
            <b-nav-item href="#projects" v-scroll-to="'#projects'">Projects</b-nav-item>
            <b-nav-item href="#contact" v-scroll-to="'#footer'">Contact</b-nav-item>
          </template>
          <template v-if="$route.path === '/cv'">
            <b-nav-item href="#name-row" v-scroll-to="'#name-row'">About</b-nav-item>
            <b-nav-item href="#skills-row" v-scroll-to="'#skills-row'">Skills</b-nav-item>
            <b-nav-item href="#experience-row" v-scroll-to="'#experience-row'">Work Experience</b-nav-item>
            <b-nav-item href="#education-row" v-scroll-to="'#education-row'">Education</b-nav-item>
            <b-nav-item href="#languages-row" v-scroll-to="'#languages-row'">Languages</b-nav-item>
            <b-nav-item href="#references-row" v-scroll-to="'#references-row'">References</b-nav-item>
          </template>
          <b-nav-item v-if="$route.path !== '/cv'" to="/cv">CV</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
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
