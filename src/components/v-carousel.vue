<template>
  <section class="relative w-full h-full min-w-[100rem] scale-125 -z-20">
    <div
      class="absolute flex flex-col items-center justify-start font-mono  top-1/2 left-1/2 -translate-1/2 rounded-xl backdrop-blur-md drop-shadow-2xl bg-gradient-to-br from-emerald-300/20 to-teal-600/30 text-light-300"
    >
      <div
        class="top-0 left-0 flex w-full py-3 pl-1 border border-transparent  border-b-emerald-400/10"
      >
        <span
          v-for="circle in 3"
          class="block w-3 h-3 ml-2 rounded-full bg-emerald-800"
          :key="circle"
        ></span>
      </div>
      <div class="flex flex-col items-center justify-around h-full px-8 py-5">
        <span
          v-for="slide in slides"
          :key="slide.id"
          v-show="slide.isActive === true"
        >
          <div class="flex flex-col">
            <div class="text-gray-400">
              {{ slide.title }}
            </div>
            <div>
              <span class="text-orange-500">{{ slide.server + " " }}</span>
              <span>{{ slide.action + " " }}</span>
              <a :href="slide.value" target="_blank">
                <span class="text-emerald-400"> {{ slide.value }}</span>
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: "sld1",
          title: "#github",
          server: "git",
          value: "https://github.com/kimagin/vitality",
          action: "clone ",
          isActive: true,
        },
        {
          id: "sld2",
          title: "#development",
          server: "npm",
          value: "run dev",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>