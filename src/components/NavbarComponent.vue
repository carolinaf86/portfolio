<template>
  <b-nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'navbar-shrink': shrinkNav }" v-b-scrollspy id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#" v-scroll-to="'#home'">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
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
            <a class="nav-link" href="#contact" v-scroll-to="'#contact'">Contact</a>
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
