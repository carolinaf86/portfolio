<template>
  <div>
    <header id="project-detail-header"
            :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${bgImgPath})`}"
            class="masthead project-header text-center text-white d-flex">
      <div class="container" style="margin-top: 150px;">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>{{ contentForRoute.h1 }}</strong>
            </h1>
            <h3 class="mt-4">
              {{ contentForRoute.h3 }}
            </h3>
            <div class="mt-4">
              <router-link class="btn btn-light mr-2 mb-5" :to="previousUrl"><i class="fas fa-chevron-left"></i></router-link>
              <router-link class="btn btn-light mb-5" :to="nextUrl"><i class="fas fa-chevron-right"></i></router-link>
            </div>
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
          h3: 'Angular 4, Loopback 3, MySql',
          text: [`One of the biggest projects I've worked on so far has been an internal admin system for a fruit exporting company. I have
          worked on both the front and back ends of this project, using Angular 4 and Loopback 3 respectively, to create a web app for managing
          orders, logistics, costs and quality control of fruit exports.`, `The project includes storing and retrieving images with
          Amazon S3 and creating PDFs using WKHTML2PDF.`]
        },
        2: {
          h1: 'Time Management',
          h3: 'Angular 2, Loopback 2, MySql',
          text: [`An app for managing projects - creating tasks, assigning them to available workers, completing them and communicating
           changes and delays to project managers via email amongst other things.`,
            `On this project I primarily worked on the UI, using Angular 2, including creating a calendar component for scheduling staff
            holidays.`]
        },
        3: {
          h1: 'Online Magazines',
          h3: 'Angular 5, NestJS, MySql',
          text: [`A project to automate the creation of editions for a online magazine service, changing the business flow from
          manual uploading of client content by website staff to generating all the content directly from client input.`,
            `For this project I worked with NGRX (a redux-style store) on the front-end but also implemented the API for generating the
          necessary files and images using NestJS.`]
        },
        4: {
          h1: 'Recruiting Event Staff',
          h3: 'StencilJS, Yii2, MySql',
          text: [`I have been working on several aspects of a large site specialised in providing temporary staff for events such as music
          festivals. Firstly, I worked on coding up static landing pages for the site, following responsive designs and utilising Dust.js to
          generate pages from template layouts and content files to avoid replication.`,
            `Secondly, I have recently finished a widget for managing staff expenses written using StencilJS, a super-light framework for
          writing web components which polyfills any gaps in browser compatibility. I found it really interesting to develop a complex
          component using only native browser methods and it was a great learning experience. I missed certain goodies that Angular would
          have given me, but would definitely consider using it again on a similar task.`]
        },
        5: {
          h1: 'Consultancy Agency',
          h3: 'AngularJS, Loopback 3, MySql',
          text: [`This project was to make changes to an existing consultant recruitment site. It is
          the only project where I have worked in AngularJS, and I was surprised at how different it is from the later versions.
          However, I was able to pick up the patterns quickly and make effective changes to a legacy project.`]
        },
        6: {
          h1: 'Portfolio',
          h3: 'VueJS, Webpack 4',
          text:
            [
              `So yes, this is the website you're currently viewing. However, I wanted to include it in my portfolio as it is the first project
              I have created completely from scratch, using plenty of new tools along the way. Although I always rely on webpack in my
              day-to-day work, I hardly knew anything about it - Angular-CLI handles that for me - so in this project I decided to learn what
              it has been doing for me all this time and configure it myself.`,
              `I also wanted to try creating an app using a front-end framework I hadn't used before so I chose Vue.js. So far so good,
               it feels a lot lighter than Angular and I like the template syntax a lot, but I'm not totally convinced yet. It's my plan
               to re-code a version of this same site in Angular too (and perhaps React and StencilJS) so I can really compare them.`
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
    },
    nextUrl: function () {
      const {id} = this.$route.params
      if (+id > 5) return '/home'
      return `/projects/${+this.$route.params.id + 1}`
    },
    previousUrl: function () {
      const {id} = this.$route.params
      if (+id === 1) return '/home'
      return `/projects/${+this.$route.params.id - 1}`
    }
  }
}
</script>
