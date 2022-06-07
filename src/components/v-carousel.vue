<template>
  <section class="relative w-full h-max sm:scale-100 -z-20 min-h-35">
    <div class="h-full mx-auto">
      <transition-group name="slide-fade" class="blurme">
        <span
          v-for="slide in slides"
          :key="slide.id"
          v-show="slide.isActive === true"
          class="absolute left-0 right-0"
        >
          <div
            class="flex flex-col items-center justify-start mx-auto font-mono  w-max sm:rounded-xl drop-shadow-2xl bg-gradient-to-br from-emerald-300/20 to-teal-600/30 text-light-300 blurme"
          >
            <div
              class="top-0 left-0 flex w-full py-3 pl-1 border border-transparent  border-b-emerald-400/10 blurme"
            >
              <span
                v-for="circle in 3"
                class="block w-3 h-3 ml-2 rounded-full bg-emerald-800 blurme"
                :key="circle"
              ></span>
            </div>

            <div
              class="flex flex-col items-center justify-around block w-full h-full px-8 py-5 text-sm  w-min sm:text-sm"
            >
              <span class="whitespace-nowrap">
                <div class="flex flex-col">
                  <div class="text-gray-400">
                    {{ slide.title }}
                  </div>
                  <div>
                    <span class="text-orange-400">{{
                      slide.server + " "
                    }}</span>
                    <span>{{ slide.action || "" + " " }}</span>
                    <a :href="slide.value" target="_blank">
                      <span class="text-emerald-400">
                        {{ slide.value + " " }}</span
                      >
                      <span class="text-cyan-500">{{ slide.desctiption }}</span>
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </span>
      </transition-group>
    </div>
    <div class="absolute top-33 w-full mx-auto]">
      <div
        class="flex items-center justify-center w-full h-full space-x-2  pagination"
      >
        <span
          v-for="slide in slides"
          :key="slide.id"
          class="w-2 h-2 bg-teal-400 rounded-full cursor-pointer"
          :class="slide.isActive === false ? 'opacity-40' : ''"
          @click="page(slide)"
        ></span>
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
          desctiption: "",
          action: "clone ",
          isActive: true,
        },
        {
          id: "sld2",
          title: "#installation",
          server: "npm",
          value: "install",
          desctiption: "// installing all the dependencies",
          isActive: false,
        },
        {
          id: "sld3",
          title: "#development",
          server: "npm",
          value: "run dev",
          desctiption: "// localhost:3000",
          isActive: false,
        },
        {
          id: "sld4",
          title: "#publishing",
          server: "npm",
          value: "run build",
          desctiption: "// ready to deploy",
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
.slide-fade-enter-active {
  transition: opacity 0.5s ease;
}

.slide-fade-leave-active {
  transition: opacity 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.blurme {
  -webkikt-filter: url("#myblurfilter");
  filter: url("#myblurfilter");
}
</style>