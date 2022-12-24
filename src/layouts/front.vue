<template>
    <div class="fixed-top">
        <SignIn></SignIn>
        <div class="container">
            <slot name="content"> </slot>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue';
import Navbar from '../components/Navbar.vue';
import SignIn from '../components/SignIn.vue';

export default {
    name: "Front",
    components: { Navbar, Login, SignIn }
}
</script>

<style scoped>
</style>