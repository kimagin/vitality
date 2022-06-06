<template >
  <img
    class="absolute object-cover w-full h-full top-30 -z-1"
    src="https://images.unsplash.com/photo-1638438133972-1e61d6114763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
    alt=""
  />
  <v-welcome class="z-10 text-light-100"></v-welcome>
</template>


<script>
import vWelcome from "./components/v-welcome.vue";

export default {
  components: { vWelcome },
};
</script>

<style>
</style>