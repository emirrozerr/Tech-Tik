<script>
import Banner from '../components/Banner.vue';
import HomeProducts from '../components/HomeProducts.vue';
import HomeAbout from '../components/HomeAbout.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
export default {
    name: "Home",
    components: { Banner, HomeProducts,HomeAbout,Footer,Navbar }
}
</script>

<template>
    <div>
        <Navbar/>
        <Banner/>
        <HomeProducts/>
        <HomeAbout/>
        <Footer/>
    </div>
</template>

<style>
    
</style>