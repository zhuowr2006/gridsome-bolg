<template>
  <Layout>

  <div class="container" style="margin-top: 100px;">
    <div class="row">
      <div style="padding: 0 6rem;">
        <h1 style="font-size: 4rem;">Say hi!</h1>
        <p style="line-height: 1.5;font-size: 1.15rem">Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
        <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
        <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
        <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
        <form name="sentMessage" id="contactForm" novalidate>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Name</label>
              <input v-model="form.name" type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input  v-model="form.email" type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group col-xs-12 floating-label-form-group controls">
              <label>Phone Number</label>
              <input  v-model="form.phone" type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number.">
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea  v-model="form.message" rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br>
          <div id="success"></div>
          <button type="submit" class="btn btn-primary" id="sendMessageButton" style="color:#fff;
    background: #000;
    outline: none;
    border: 0;
    font-size: .8rem;
    padding: .8rem 1.6rem;
    border-radius: .3rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: opacity .25s ease;
    letter-spacing: .035em;font-weight: 400;"
          @click.prevent="onSubmit">Submit form</button>
        </form>
      </div>
    </div>
  </div>
  </Layout>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ContactPage',
  data(){
    return{
      form:{
        name:'',
        email:'',
        phone:'',
        message:''
      }
    }
  },
  methods:{
    async onSubmit(){
      try {
        const {data} = await axios({
          method:'POST',
          url:GRIDSOME_API_URL+'/contacts',
          data:this.form
        })
        window.alert('发生成功')
      } catch (error) {
        window.alert('发生失败，请重试')
      }
    }
  }
}
</script>
