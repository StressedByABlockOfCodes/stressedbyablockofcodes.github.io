<template>
  <div class="container mx-auto max-w-screen-lg relative pt-28 pb-12 sm:pt-28 sm:pb-28 lg:pt-40 lg:pb-40">
    <div class="flex flex-col items-center justify-center lg:flex-row px-4">
      <div
        class="
          rounded-full
          border-8 border-primary border-emerald-400
          shadow-xl
        "
      >
        <img
          src="@/assets/users/PIC_2x2.jpg"
          class="h-48 rounded-full sm:h-56"
          alt="author"
        />
      </div>
      <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1
          class="
            text-center
            font-medium
            title-font
            text-4xl text-gray-100
            sm:text-left sm:text-5xl
          "
        >
          Hi there, I'm
          <span class="text-emerald-400 font-bold">Renier Jay!</span>
          <br />
          <!-- <span class="font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-400 relative inline-block p-1">
            <span class="text-4xl italic relative text-white">A Junior Web/Android Developer.</span>
          </span> -->
          <!-- <span class="text-4xl">A Junior Web/Android Developer.</span> -->
        </h1>
        <div
          class="
            flex flex-col
            justify-center
            pt-3
            sm:flex-row sm:pt-5
            lg:justify-start
          "
        >
          <div
            class="
              flex
              items-center
              justify-center
              pl-0
              sm:justify-start
              md:pl-1
            "
          >
            <p class="font-body text-lg uppercase text-white">Let's connect</p>
            <div class="hidden sm:block">
              <ChevronRightIcon class="h-6 w-6 text-3xl text-emerald-400" />
            </div>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              pt-5
              pl-2
              sm:justify-start sm:pt-0
            "
          >
            <a href="https://www.facebook.com/renierjay.mangaoang/" target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-facebook-f"
                class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
              />
            </a>
            <button @click="scrollTo()" class="pl-6"  target="_blank">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-md"
              />
            </button>
            <a href="https://github.com/StressedByABlockOfCodes" class="pl-6"  target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-github"
                class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
              />
            </a>
            <a href="https://www.linkedin.com/in/renierjay-mangaoang/" class="pl-6"  target="_blank">
              <font-awesome-icon
                icon="fa-brands fa-linkedin-in"
                class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";
export default {
  components: {
    ChevronRightIcon,
  },
  methods: {
    scrollTo() {
      this.$emit("scrollToElement", "contactme");
    }
  },
};
</script>

<style scoped>
.fa-spin-hover:hover {
  -webkit-animation: fa-bounce 1s infinite linear;
  -moz-animation: fa-bounce 1s infinite linear;
  -o-animation: fa-bounce 1s infinite linear;
  animation: fa-bounce 1s infinite linear;
}
</style>
