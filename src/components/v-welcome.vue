<template>
  <main class="flex flex-col items-center justify-between h-full">
    <v-header></v-header>

    <v-carousel></v-carousel>
    <v-footer></v-footer>
  </main>
</template>

<script>
import vHeader from "./v-header.vue";
import vCarousel from "./v-carousel.vue";
import vFooter from "./v-footer.vue";

export default {
  components: { vHeader, vCarousel, vFooter },
};
</script>

<style>
</style>