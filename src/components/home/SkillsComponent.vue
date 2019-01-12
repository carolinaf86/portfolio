<template>
  <section id="skills">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Skills & Experience</h2>
          <hr class="my-4">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="service-box mt-5 mx-auto">
            <i class="fab fa-4x fa-angular text-primary mb-3" v-scroll-reveal.reset="{delay: 200}"></i>
            <h3 class="mb-3">Angular 2+</h3>
            <p class="text-muted mb-0">Most of my professional experience has been in creating dynamic frontends using <a href="https://angular.io/" target="_blank">Angular 2-7</a>.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="service-box mt-5 mx-auto">
            <i class="fab fa-4x fa-js-square text-primary mb-3" v-scroll-reveal.reset="{delay: 400}"></i>
            <h3 class="mb-3">Javascript</h3>
            <p class="text-muted mb-0">But I'm also comfortable using Javascript independent of framework (and on the backend with <a href="https://loopback.io/doc/index.html" target="_blank">Loopback</a> and <a href="https://nestjs.com/" target="_blank">NestJS</a> too!).</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="service-box mt-5 mx-auto">
            <i class="fas fa-4x fa-code text-primary mb-3" v-scroll-reveal.reset="{delay: 600}"></i>
            <h3 class="mb-3">HTML5 and CSS</h3>
            <p class="text-muted mb-0">I can use HTML and CSS (and SCSS) to create webpages according to design specifications.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="service-box mt-5 mx-auto">
            <i class="fas fa-4x fa-heart text-primary mb-3" v-scroll-reveal.reset="{delay: 800}"></i>
            <h3 class="mb-3">Teamwork</h3>
            <p class="text-muted mb-0">And I'm experienced with using tools like git, slack and harvest to co-ordinate my work with other team members.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
