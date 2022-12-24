<script>
import Login from './components/Login.vue';
import Navbar from './components/Navbar.vue';
import SignIn from './components/SignIn.vue';
import Banner from './components/Banner.vue';
import HomeProducts from './components/Banner.vue';
export default{
    name: 'App',
    components: {
        Login,
        Navbar,
        SignIn,
        Banner,
        HomeProducts
    }
}
</script>

<template>
    <div>
        <Navbar/>
        <router-view />
    </div>
</template>

<style>
</style>
