<template>
  <button
    v-show="scY > 300"
    @click="scrollTo()"
    class="
      p-2
      bg-emerald-400
      text-gray-100
      rounded-full
      h-14
      w-14
      fixed
      flex
      justify-center
      items-center
      bottom-5
      right-5
      drop-shadow-lg
      hover:drop-shadow-2xl
      opacity-70
      hover:opacity-100
      z-[9999]
    "
  >
    <ChevronUpIcon class="w-8 h-8" />
  </button>
</template>

<script>
import { ChevronUpIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      scY: 0,
      scTimer: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    ChevronUpIcon,
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    scrollTo() {
      this.$emit("scrollToElement", "#top");
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>