<script>
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';
import SignIn from './components/SignUp.vue';
import Banner from './components/Banner.vue';
import HomeProducts from './components/Banner.vue';
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
export default{
    name: 'App',
    components: {
        Login,
        Navbar,
        SignIn,
        Banner,
        HomeProducts,
        Footer,
        Home
    }
}
</script>

<template>
    <div>
        <router-view />
    </div>

</template>

<style>
</style>
