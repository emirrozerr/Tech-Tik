<template>
  <div class="content fixed-top">
      <section class="">
<!-- Jumbotron -->
<div class="bg-image-vertical content" style="background-color: hsl(0, 0%, 96%)">
  <div class="container">
    <div class=" content row gx-lg-5 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="my-5 display-3 fw-bold ls-tight">
          The best offer <br />
          <span class="text-primary">for your business</span>
        </h1>
        <p style="color: hsl(217, 10%, 50.8%)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, itaque accusantium odio, soluta, corrupti aliquam
          quibusdam tempora at cupiditate quis eum maiores libero
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="account-container">
          <div class="account">
              <div class="account-title text-center"><h2 class="fw-bold fs-1">Tech-<span style="color:#136AF8;">Tık</span></h2></div>    
              <div class="account-form">

                <form>
                  <input
                    id="firstName"
                    v-model="firstName"
                    type="text"
                    placeholder="First Name"
                  >
                  <small style="text-align:left" v-if="errors.length" class="text-danger " >{{ errors[0] }}</small>
            
                  <input
                    id="lastName"
                    v-model="lastName"
                    type="text"
                    placeholder="Last Name"
                  >
                  <small style="text-align:left"  v-if="errors.length" class="text-danger" >{{ errors[1] }}</small>
        
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    placeholder="Email"
                  >
                  <small style="text-align:left" v-if="errors.length" class="text-danger " >{{ errors[2] }}</small>
          
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Password"
                  >
                  <small style="text-align:left" v-if="errors.length" class="text-danger " >{{ errors[3] }}</small>
        
                  <b-button @click="checkForm()" class="account-btn mt-3" variant="primary">Sign up</b-button>
                  
                </form>
              </div>
          </div>
          <div class="account-sub">
             <p>Do you have an account ? <a href="" @click="goToLogin()">Login</a></p> 
          </div>
    </div>
      </div>
    </div>
  </div>
</div>
<!-- Jumbotron -->
</section>

  </div>

</template>
<script>

export default {
  name: "signup",
  data() {
  return {
    firstName: null,
    lastName: null,
    email: null,
    password: null,

    errors: [],
  }
},
methods: {
  goToLogin(){
      this.$router.push('/')
  },
  checkForm(){
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.email)
    console.log(this.password)
    this.errors = []

    if(!this.firstName){
      this.errors.push('First Name required.');
    }
    if(!this.lastName){
      this.errors.push('Last Name required.');
    }
    if(!this.email){
      this.errors.push('Email required.');
    }
    if(!this.password){
      this.errors.push('Password required.');
    }

    if(this.errors.length === 0){
      this.saveUser();
    }
      
    
  },
  saveUser(){
    localStorage.setItem('firstName',this.firstName)
    localStorage.setItem('lastName',this.lastName)
    localStorage.setItem('email',this.email)
    localStorage.setItem('password',this.password)
  }

}
}
</script>
<style scoped>

.content{
  height: 100vh;
}
.text-danger{
  align-self: flex-start;
  margin-left: 2rem;
}


@media (min-width: 1025px) {
.h-custom-2 {
height: 100%;
}
}
</style>