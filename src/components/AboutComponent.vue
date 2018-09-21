<template>
  <section class="bg-primary" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading text-white">"Never stop learning"</h2>
          <hr class="light my-4">
          <p class="text-faded mb-4">
            I'm a self-taught frontend web developer, specialising in Angular 2+, but I love experimenting with other technologies too -
            like with this profile website which I've created using Vue.js and Webpack! If you're curious you can check out the
            <a href="https://github.com/carolinaf86/portfolio" target="_blank" id="source-code-link">source code</a>.
          </p>
          <a class="btn btn-light btn-xl" href="#" v-scroll-to="'#projects'">Go To Projects</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
  #source-code-link {
    color: #ffffff !important;
  }
</style>
