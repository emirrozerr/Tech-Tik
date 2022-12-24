<template>
    <div class="content">
        <section class="">
  <!-- Jumbotron -->
  <div class="content" style="background-color: hsl(0, 0%, 96%)">
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
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
            

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>
            

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Login
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                    <p>Don't have an account?</p>
                    <a class="text-decoration-none" @click="goToSignUp()">Sign Up</a>
                 
                </div>
              </form>
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
    name: "SignIn",
    data() {
    return {
      options:[
        {name: "aa",title:"bb"},
    ],
    sideImg: require('@/assets/images/image 1.svg'),
    }
  },
  methods:{
    goToSignUp(){
        this.$router.push('signUp')
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