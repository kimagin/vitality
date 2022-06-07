<template>
  <section class="flex flex-col items-center pt-[10vh] sm:pt-[15vh]">
    <img
      width="80"
      class="hue-rotate-170"
      src="https://img.icons8.com/color/96/undefined/diamond-heart--v1.png"
      alt=""
    />
    <span class="tracking-[.5em] text-center ml-[.5em]">
      <h1 class="text-4xl text-gray-300 sm:text-6xl font-extralight">
        {{ vitality }}
      </h1>
    </span>
    <h2 class="mt-8 text-sm tracking-wide text-warm-gray-500">
      Opinionated
      <em class="font-italic text-emerald-500"> Vue JS 3.0 </em> starting
      template
    </h2>
    <div class="w-2/3 mb-4 text-sm text-center sm:w-auto ma-1 opacity-70">
      <a href="">vite 2 / </a>
      <a href="">Vue 3 / </a>
      <a href="">unocss / </a>
      <a href="">attributify / </a>
      <a href="">web-fonts / </a>
      <a href="">variant-groups </a>
      <br />
      <a href="">css-directives / </a>
      <a href="">normalize / </a>
      <a href="">inter font </a>
    </div>
    <v-icon> </v-icon>
    <v-button class="mt-12" @click="count++">Count: {{ count }}</v-button>
  </section>
</template>

<script>
import vIcon from "./v-icon.vue";
import vButton from "./v-button.vue";
export default {
  components: { vIcon, vButton },
  data() {
    return {
      vitality: "{{ vitality }}",

      count: 0,
    };
  },
};
</script>

<style>
</style>