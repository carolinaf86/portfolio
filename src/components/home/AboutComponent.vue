<template>
  <section class="bg-primary" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 id="about-heading" class="section-heading text-white" v-scroll-reveal.reset="scrollRevealOpts">"Never stop learning"</h2>
          <hr class="light my-4">
          <p class="text-faded mb-4">
            What I enjoy most about software development is that I am constantly learning new things.
            I specialise in Angular 2+, but I love experimenting with other languages and frameworks too -
            like with this profile site which I created using Vue.js and Webpack! If you're curious you can check out the
            source code.
          </p>
          <a class="btn btn-light btn-xl" href="https://github.com/carolinaf86/portfolio" target="_blank">View source code</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
  #about-heading {
    font-style: italic;
  }
</style>
<script>
export default {
  data: () => {
    return {
      scrollRevealOpts: {
        delay: 200,
        distance: '300px',
        origin: 'left'
      }
    }
  }
}
</script>
