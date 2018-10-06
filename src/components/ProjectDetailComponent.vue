<template>
  <section id="project-detail" class="bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p v-for="paragraph of text" class="text-faded mb-5">
            <span v-html="paragraph"></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    text: {
      default: function () {
        return ['']
      }
    }
  }
}
</script>
