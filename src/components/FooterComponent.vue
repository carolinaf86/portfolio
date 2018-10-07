<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-heading">Contact me</h2>
          <hr class="my-4">
        </div>
      </div>

      <template v-if="status === 'ready'">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="mb-5">If you'd like to get in touch with me, please complete the contact form below.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">

            <b-alert variant="danger" :show="submissionError">
              Oops, there seems to have been a problem. Please try again.
            </b-alert>

            <b-form id="contactForm" ref="contactForm" @submit="onSubmit" novalidate>

              <b-form-group id="nameInputGroup" label="Name*" for="nameInput">
                <b-form-input id="nameInput" v-model="contact.name" required placeholder="Enter name" name="name"/>
                <b-form-invalid-feedback>Name is required.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="emailInputGroup" label="Email*" for="emailInput">
                <b-form-input id="emailInput" type="email" v-model="contact.email" required placeholder="Enter email" name="email"/>
                <b-form-invalid-feedback>A valid email address is required.</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="messageInputGroup" label="Message" for="messageInput">
                <b-form-textarea id="messageInput" v-model="contact.message" placeholder="Enter message (optional)" :rows="3" :max-rows="6"
                                 name="message"/>
              </b-form-group>

              <div class="row">
                <div class="col text-center">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </div>

            </b-form>
          </div>
        </div>
      </template>

      <template v-else-if="status === 'loading'">
        <div class="row" id="processingFormRow">
          <div class="col-lg-10 offset-lg-1 text-center">
            <i class="fas fa-4x fa-spinner fa-spin"></i>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="row" id="submittedRow">
          <div class="col-lg-10 offset-lg-1 text-center">
            <p class="mb-5 mt-5">Thank you for getting in touch, {{ contact.name }}. I'll get back to you as soon as possible.</p>
            <i class="fas fa-envelope fa-4x mb-3" v-scroll-reveal.reset="{delay: 200}"/>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>

<style>
  #submittedRow, #processingFormRow {
    min-height: 400px;
  }
</style>

<script>

import * as axios from 'axios'
import qs from 'qs'

const url = 'https://formspree.io/xwqlykpx'

export default {
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      submissionError: false,
      status: 'ready'
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.submissionError = false

      const form = this.$refs.contactForm
      form.validated = true
      form.classList.add('was-validated')

      // Send data if valid

      if (form.reportValidity()) {
        this.status = 'loading'

        const options = {
          method: 'POST',
          headers: {'content-type': 'application/x-www-form-urlencoded', 'accept': 'application/json'},
          data: qs.stringify(this.contact),
          url
        }

        axios(options)
          .then(response => {
            this.status = 'complete'
          })
          .catch(error => {
            this.submissionError = true
            this.status = 'ready'
          })
      }
    }
  }
}
</script>
