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

                  <p class="text-danger " v-if="userErrors">
                    {{ userErrors }}
                  </p>

                  <form>
                    <input
                      id="email"
                      v-model="email"
                      type="text"
                      placeholder="Email"
                    >
                    <small style="text-align:left" v-if="errors.length" class="text-danger " >{{ errors[0] }}</small>
            
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      placeholder="Password"
                    >
                    <small style="text-align:left" v-if="errors.length" class="text-danger " >{{ errors[1] }}</small>
              
                    <b-button @click="checkForm()" class="account-btn mt-3" variant="primary">Login</b-button>

                      <a class="account-link" href="">Forgot Password ?</a>
                  </form>
                </div>
            </div>
            <div class="account-sub">
               <p >Don't have an account ? <a href="" @click="goToSignUp()">Sign Up</a></p> 
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
    name: "Login",
    data() {
    return {
 
    email: null,
    password: null,

    errors: [],
    userErrors: null,
    
    }
  },
  methods: {
    goToSignUp(){
      this.$router.push('/signUp')
    },
    checkForm(){
      console.log(this.email)
      console.log(this.password)
      this.errors = []
      if(!this.email){
        this.errors.push('Email required.');
      }
      if(!this.password){
        this.errors.push('Password required.');
      }

      if(this.errors.length === 0){
        this.validateUser()
      }
    },
    validateUser(){
      this.userErrors = []
      if(this.email == localStorage.getItem('email')){
        if(this.password == localStorage.getItem('password')){
          this.$router.push('/home')
        }
      }else{
        this.userErrors = "Incorrect email or password"
      }
    }
  },
  created(){
    if(localStorage.getItem('email') == "" || localStorage.getItem('email') === null ){
      localStorage.setItem('email',"admin@techtik.com")
    }
    if (localStorage.getItem('password') == "" || localStorage.getItem('password') === null) {
      localStorage.setItem('password',"1234")
    }
    
  }
}
</script>
<style scoped>

.content{
    height: 100vh;
}


@media (min-width: 1025px) {
.h-custom-2 {
height: 100%;
}
}
</style>