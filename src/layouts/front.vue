<template>
    <div class="fixed-top">
        <Navbar></Navbar>
        <div class="container">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: "Front",
    components: { Navbar }
}
</script>

<style scoped>
</style>