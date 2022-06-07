<template>
  <div
    class="relative flex flex-col items-center justify-center h-full overflow-hidden border "
  >
    <img
      class="absolute top-0 object-cover w-full h-full rotate-180  opacity-95 brightness-40 -z-1 hue-rotate-280 mix-blend-luminosity"
      src="https://images.unsplash.com/photo-1637952112301-6090dca83ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      alt=""
    />
    <v-welcome class="z-10 text-light-100"></v-welcome>
  </div>
</template>

<script>
import vWelcome from "./components/v-welcome.vue";

export default {
  components: { vWelcome },
};
</script>

<style>
</style>