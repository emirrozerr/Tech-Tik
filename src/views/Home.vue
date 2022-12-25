<script>
import Banner from '../components/Banner.vue';
import HomeProducts from '../components/HomeProducts.vue';
import HomeAbout from '../components/HomeAbout.vue';
export default {
    name: "Home",
    components: { Banner, HomeProducts,HomeAbout }
}
</script>

<template>
    <div>
        <Banner/>
        <HomeProducts/>
        <HomeAbout/>
    </div>
</template>

<style>
    
</style>