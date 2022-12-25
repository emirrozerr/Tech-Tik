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
                <form action="" method="POST">
                  <input type="text" placeholder="Username" name="username" id="">
                  <input type="text" placeholder="Email" name="username" id="">
                  <input type="text" placeholder="Name" name="username" id="">
                  <input type="text" placeholder="Password" name="password" id="">
                  <button class="account-btn" type="submit">Signup</button>
                </form>
              </div>
          </div>
          <div class="account-sub">
             <a href="/login">Do you have an account ? login</a> 
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
    options:[
      {name: "aa",title:"bb"},
  ],
  sideImg: require('@/assets/images/image 1.svg'),
  }
},
methods: {
  goToLogin(){
      // this.$router.push('/')
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