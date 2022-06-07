<template>
  <main class="flex flex-col items-center justify-between h-full">
    <v-header></v-header>
    <v-button class="mt-8" @click="count++">Count: {{ count }}</v-button>
    <v-carousel></v-carousel>
    <v-footer></v-footer>
  </main>
</template>

<script>
import vHeader from "./v-header.vue";
import vCarousel from "./v-carousel.vue";
import vFooter from "./v-footer.vue";
import vButton from "./v-button.vue";
export default {
  components: { vHeader, vCarousel, vButton, vFooter },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>