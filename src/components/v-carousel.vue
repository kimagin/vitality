<template>
  <section class="relative w-full h-full min-w-[100rem] sm:scale-125 -z-20">
    <div
      class="
        absolute
        flex flex-col
        items-center
        justify-start
        font-mono
        top-1/2
        left-1/2
        -translate-1/2
        sm:rounded-xl
        backdrop-blur-md
        drop-shadow-2xl
        bg-gradient-to-br
        sm:w-auto
        w-[100vw]
        from-emerald-300/20
        to-teal-600/30
        text-light-300
        h-50
        sm:h-auto
      "
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
      <div
        class="flex flex-col items-center justify-around h-full px-8 py-5 text-sm  sm:text-sm"
      >
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
      <div class="">
        <div
          class="relative left-0 flex items-center justify-center w-full h-full space-x-2  top-4 pagination"
        >
          <span
            v-for="slide in slides"
            class="w-2 h-2 rounded-full cursor-pointer bg-dark-100"
            :class="slide.isActive === true ? 'bg-emerald-700' : ''"
            @click="page(slide)"
          ></span>
        </div>
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
        {
          id: "sld3",
          title: "#publish",
          server: "npm",
          value: "run build",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    page(item) {
      this.slides.forEach((element) => {
        element.isActive = false;
      });
      item.isActive = true;
    },
  },
};
</script>

<style>
</style>