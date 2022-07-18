<template>
  <div class="flex flex-col min-h-screen bg-slate-900 text-gray-100">
    <navigation-bar v-if="this.$route.name !== 'Error404'" @scrollToElement="scrollToElement" id="top" ref="top" />
    
    <main class="flex-grow">
      <!-- <transition name="fade" mode="out-in">
        <router-view />
      </transition> -->
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer-bar @scrollToElement="scrollToElement" id="footer" ref="footer"/>
    <ScrollUpButton @scrollToElement="scrollToElement" />
  </div>
</template>

<script>
import NavigationBar from "@/components/bars/NavigationBar.vue";
import FooterBar from "@/components/bars/FooterBar.vue";
import ScrollUpButton from "@/utils/ScrollUpButton.vue";

export default {
  components: {
    NavigationBar,
    FooterBar,
    ScrollUpButton
  },
  methods: {
    scrollToElement(el, close) {
      if(close) close()
      this.$el.querySelector(el).scrollIntoView({ behavior: "smooth" });
    },
  }
};
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
html {
  scroll-behavior: smooth;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.4s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
