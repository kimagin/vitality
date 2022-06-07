<template>
  <div class="flex items-center justify-center mt-8">
    <div class="flex items-end justify-around space-x-3 w-7/8">
      <a v-for="icon in icons" :href="icon.link" target="_blank" :key="icon.id">
        <img class="block" :src="icon.url" :width="icon.width" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          id: "ic1",
          name: "vite",
          url: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png",
          link: "https://vitejs.dev/",
          width: 35,
        },
        {
          id: "ic2",
          name: "vue",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
          link: "https://vuejs.org/guide/introduction.html",
          width: 35,
        },
        {
          id: "ic3",
          name: "unocss",
          url: "https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg",
          link: "https://github.com/unocss/unocss",
          width: 35,
        },
        {
          id: "ic4",
          name: "inter",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Inter_logo_2020.svg/1280px-Inter_logo_2020.svg.png",
          link: "https://rsms.me/inter/",
          width: 70,
        },
        {
          id: "ic5",
          name: "gfonts",
          url: "https://seeklogo.com/images/G/google-fonts-logo-185D843C0C-seeklogo.com.png",
          link: "https://fonts.google.com/",
          width: 35,
        },
      ],
    };
  },
};
</script>

<style>
</style>