<template>
  <div>
    <header id="project-detail-header"
            :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead project-header text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>{{ contentForRoute.h1 }}</strong>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <project-detail-component :text="contentForRoute.text"/>
  </div>
</template>
<script>

import ProjectDetailComponent from '../components/ProjectDetailComponent.vue'

export default {
  components: {
    ProjectDetailComponent
  },
  data: function () {
    return {
      content: {
        1: {
          h1: 'Exporting Fruit',
          text: [`One of the biggest projects I've worked on so far has been an internal admin system for a fruit exporting company. I have
          worked on both the front and back ends of this project, using Angular 4 and Loopback 3 respectively, to create a web app for managing
          orders, logistics, costs and quality control of fruit exports. The project includes storing and retrieving images with
          Amazon S3 and creating PDFs using WKHTML2PDF.`]
        },
        2: {
          h1: 'Time Management',
          text: [`This was an app for managing projects - creating tasks, assigning them to available workers, completing them and communicating
           changes and delays to project managers via email amongst other things. On this project I primarily worked on the UI, using Angular 2.`]
        },
        3: {
          h1: 'Online Magazines',
          text: [`This was a project to automate the creation of editions for a online magazine service, changing the business flow from
          manual uploading of client content by website staff to generating all the content directly from client input.`,
          `For this project I worked with NGRX (a redux-style store) on the front-end but also implemented the API for generating the
          necessary files and images using NestJS.`]
        },
        4: {
          h1: 'Recruiting Event Staff',
          text: [`I have been working on several aspects of a large site specialised in providing temporary staff for events such as music
          festivals. Firstly, I worked on coding up static landing pages for the site, following responsive designs and utilising Dust.js to
          generate pages from template layouts and content files to avoid replication.`,
          `Secondly, I have recently finished a widget for managing staff expenses written using StencilJS, a super-light framework for
          writing web components which polyfills any gaps in browser compatibility. I found it reallu interesting to code up a complex
          component using only native browser methods and it was a great learning experience. I missed certain goodies that Angular would
          have given me, but would definitely consider using it again on a similar task.`]
        },
        5: {
          h1: 'Consultancy Agency',
          text: [`This project was to make changes to an existing consultant recruitment site. It is
          the only project where I have worked in AngularJS, and I was surprised at quite how different it is from the later versions.
          However, I was able to pick up the patterns quickly and make effective changes to a legacy project.`]
        },
        6: {
          h1: 'Portfolio',
          text:
            [
              `So yes, this is the website you're currently viewing. However, I wanted to include it in my portfolio as it is the first project
              I have created completely from scratch, using plenty of new tools along the way. Although I always rely on webpack in my
              day-to-day work I hardly knew anything about it, Angular-CLI handles that for me - so in this project I decided to learn what
              it has been doing for me all this time and configured it myself.`,
              `I also wanted to try creating an app using a front-end framework I hadn't used before so I chose Vue.js. So far so good,
               it feels a lot lighter than Angular and I like the template syntax a lot, but I'm not totally convinced yet. It's my plan
               to re-code a version of this same site in Angular too (and perhaps React and StencilJS) so I can really compare the two.`
            ]
        }
      }
    }
  },
  computed: {
    contentForRoute: function () {
      return this.content[this.$route.params.id]
    },
    bgImgPath: function () {
      return +this.$route.params.id === 6
        ? '../../static/img/header.jpg'
        : `../../static/img/portfolio/${this.$route.params.id}.jpg`
    }
  }
}
</script>
