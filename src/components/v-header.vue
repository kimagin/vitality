<template>
  <section class="flex flex-col items-center pt-[10%]">
    <img
      width="80"
      class="hue-rotate-170"
      src="https://img.icons8.com/color/96/undefined/diamond-heart--v1.png"
      alt=""
    />
    <span class="tracking-[.5em] text-center ml-[.5em]">
      <h1 class="text-6xl text-gray-300 font-extralight">
        {{ vitality }}
      </h1>
    </span>
    <h2 class="mt-8 text-sm tracking-wide text-warm-gray-500">
      Opinionated
      <em class="font-italic text-emerald-500"> Vue JS 3.0 </em> starting
      template
    </h2>
    <div class="mb-4 text-sm text-center ma-1 opacity-70">
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
  </section>
</template>

<script>
import vIcon from "./v-icon.vue";
export default {
  components: { vIcon },
  data() {
    return {
      vitality: "{{ vitality }}",
    };
  },
};
</script>

<style>
</style>