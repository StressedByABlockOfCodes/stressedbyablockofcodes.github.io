<template>
  <div class="container mx-auto max-w-screen-lg relative  pb-12 px-3">
    <div
      class="
        w-full h-screen
        flex flex-col
        items-center
        justify-center
        text-center
      "
    >
      <!-- <img :src="img" alt="" class="mb-10" /> -->
      <h2
        class="
          font-body
          text-[45px]
          lg:text-[66px]
          font-light
          tracking-widest
          uppercase
          leading-none
          mb-1
        "
      >
        Page not found
      </h2>
      <p class="my-3 text-[19px] tracking-wider text-dark-200">
        We are sorry, but the page you were looking for can’t be found.
      </p>
      <button
        @click="goToHome()"
        class="
          btn-sm btn-default
          my-8
          text-white
          bg-emerald-500
          border-0
          py-2
          px-6
          focus:outline-none
          hover:bg-emerald-600
          rounded-full
          text-lg
          mt-6
          w-fit
        "
      >
        Back to Home
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
    };
  },
  methods: {
    goToHome() {
      router.push({ name: "home" });
    },
  },
};
</script>