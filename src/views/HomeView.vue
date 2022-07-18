<template>
  <!-- <div class="container mx-auto items-center hero">
    <div
      class="inset-0 z-1 bg-opacity-20 h-full bg-gradient-to-r from-indigo-200 to-indigo-500 bg-cover bg-center bg-no-repeat">
        <hero-section class="z-4 intro"/>
        <hero-section2 /> 
    </div>
  </div> -->

  <!-- Header
  Intro
  Skills
  Comfortable
  Mastering
  Portfolio
  Journey
  Testimonials
  Footer/Contact -->

  <div class="z-30">
    <hero-section2 @scrollToElement="scrollToElement"/>
    <who-i-am-section id="aboutme"/>
    <projects-section id="myprojects"/>
    <contact-me-section ref="contactme" id="contactme"/>
  </div>
</template>

<script>
import HeroSection2 from "@/components/sections/HeroSection2.vue"
import WhoIAmSection from "@/components/sections/WhoIAmSection.vue"
import ProjectsSection from "@/components/sections/ProjectsSection.vue"
import ContactMeSection from "@/components/sections/ContactMeSection.vue"

export default {
  name: 'HomeView',
  components: {
    HeroSection2,
    WhoIAmSection,
    ProjectsSection,
    ContactMeSection
  },
  methods: {
    scrollToElement(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<style scoped>
/* .hero {
  background-image: url('~@/assets/img/bg-hero.jpg');
}
.intro {
  opacity: 1 !important;
} */
</style>
