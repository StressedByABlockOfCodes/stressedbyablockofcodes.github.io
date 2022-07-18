<template>
  <div class="container mx-auto max-w-screen-lg relative pt-22 pb-12 px-3 py-6">
    <div class="mb-6 text-4xl font-bold text-center sm:text-left">
      About&nbsp;<gradient-text>Me</gradient-text>
    </div>

    <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
      <div class="text-gray-100 items-center rounded-md bg-slate-800 p-10">
        <!-- mb-6 text-gray-100 items-center rounded-md bg-slate-800 p-10 -->
        <div class="text-xl leading-9">
          I'm <gradient-text>Renier Jay Mangaoang</gradient-text>, a Web &amp;
          Android Developer.
        </div>

        <div class="mt-3 text-gray-400 text-justify">
          I have a passion to create useful and functional web &#38; mobile
          applications that impact the lives of other people. During my college
          years, I have been immersed in different kinds of projects. This
          sparked my interest in creating well-built websites and mobile
          applications which users find as helpful and interactive.
        </div>

        <a
          :href="pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex
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
            w-full
            sm:w-fit
            items-center
            justify-center
          "
        >
          Download CV
          <DocumentDownloadIcon class="h-5 w-5 ml-2" />
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          class="
            p-6
            border border-gray-800
            rounded-md
            shadow-md
            transition
            duration-500
            ease-in-out
            transform
            hover:border-emerald-500
            md:hover:-translate-y-1
          "
        >
          <div class="flex flex-col p-1.5">
            <p class="text-emerald-400 text-4xl font-bold mb-1">BS IT</p>
            <p
              class="
                before:absolute
                before:left-0
                before:top-3.5
                before:w-8
                before:h-0.5
                before:rounded-full
                before:bg-gray-800
                text-gray-400 text-lg
                tracking-widest
                uppercase
                pl-12
                relative
              "
            >
              College Graduate
            </p>
          </div>
        </div>
        <div
          class="
            p-6
            border border-gray-800
            rounded-md
            shadow-md
            transition
            duration-500
            ease-in-out
            transform
            hover:border-emerald-500
            md:hover:-translate-y-1
          "
        >
          <div class="flex flex-col p-1.5">
            <p class="text-emerald-400 text-4xl font-bold">4+</p>
            <p
              class="
                before:absolute
                before:left-0
                before:top-3.5
                before:w-8
                before:h-0.5
                before:rounded-full
                before:bg-gray-800
                text-gray-400 text-lg
                tracking-widest
                uppercase
                pl-12
                relative
              "
            >
              Projects Done
            </p>
          </div>
        </div>
        <div
          class="
            p-6
            border border-gray-800
            rounded-md
            shadow-md
            transition
            duration-500
            ease-in-out
            transform
            hover:border-emerald-500
            md:hover:-translate-y-1
          "
        >
          <div class="flex flex-col p-1.5">
            <p class="text-emerald-400 text-4xl font-bold">Web</p>
            <p
              class="
                before:absolute
                before:left-0
                before:top-3.5
                before:w-8
                before:h-0.5
                before:rounded-full
                before:bg-gray-800
                text-gray-400 text-lg
                tracking-widest
                uppercase
                pl-12
                relative
              "
            >
              Frontend/ Backend
            </p>
          </div>
        </div>
        <div
          class="
            p-6
            border border-gray-800
            rounded-md
            shadow-md
            transition
            duration-500
            ease-in-out
            transform
            hover:border-emerald-500
            md:hover:-translate-y-1
          "
        >
          <div class="flex flex-col p-1.5">
            <p class="text-emerald-400 text-4xl font-bold">Android</p>
            <p
              class="
                before:absolute
                before:left-0
                before:top-3.5
                before:w-8
                before:h-0.5
                before:rounded-full
                before:bg-gray-800
                text-gray-400 text-lg
                tracking-widest
                uppercase
                pl-12
                relative
              "
            >
              Frontend/ Backend
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="w-8 h-0.5 rounded-full bg-gray-800 my-16"></div> -->

    <div class="py-20 flex flex-col justify-center items-center">
      <div class="w-2/5 h-px bg-gray-800"></div>
      <h4
        class="
          relative
          uppercase
          text-xl text-gray-100
          font-bold
          py-14
          text-center
        "
      >
        My Skills
      </h4>
      <div
        class="
          grid
          w-full
          grid-cols-1
          gap-x-8 gap-y-6
          mx-auto
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <div v-for="(skill, index) in skills" :key="index">
          <div class="flex items-end justify-between">
            <h4 class="font-body text-lg font-medium uppercase text-gray-100">
              {{ skill.name }}
            </h4>
            <h3 class="font-body text-base font-semibold text-gray-400">
              {{ skill.percentage }}
            </h3>
          </div>
          <div class="mt-2 h-2 w-full rounded-full bg-gray-700">
            <div
              class="h-2 rounded-full bg-emerald-400 percentage invisible"
              :style="{ width: skill.percentage }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-0 flex flex-col justify-center items-center mt-0">
      <div class="w-2/5 h-px bg-gray-800"></div>
      <h4
        class="
          relative
          uppercase
          text-xl text-gray-100
          font-bold
          py-14
          text-center
        "
      >
        My Journey
      </h4>
      <div class="container px-5 py-2 mx-auto flex flex-wrap">
        <div class="flex items-center justify-center w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-0">
            <div class="flex relative pb-14">
              <div
                class="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div class="h-full w-px bg-gray-800 pointer-events-none"></div>
              </div>
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-emerald-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
              >
                <AcademicCapIcon class="h-6 w-6" />
              </div>
              <div class="flex-grow pl-4">
                <div class="bg-gray-800 rounded-full w-fit px-2 py-1 mb-2">
                  <h2
                    class="
                      font-medium
                      title-font
                      text-sm text-gray-400
                      tracking-wider
                    "
                  >
                    2018 - 2022
                  </h2>
                </div>
                <h1
                  class="
                    font-semibold
                    title-font
                    text-lg text-gray-100
                    mb-1
                    tracking-wider
                    uppercase
                  "
                >
                  BS Information Technology
                </h1>
                <p class="leading-relaxed text-gray-400">
                  Ateneo de Naga University ·
                  <span class="font-bold text-emerald-400"> Cum Laude </span>
                </p>
              </div>
            </div>
            <div class="flex relative pb-14">
              <div
                class="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div class="h-full w-px bg-gray-800 pointer-events-none"></div>
              </div>
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-emerald-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
              >
                <BriefcaseIcon class="h-6 w-6" />
              </div>
              <div class="flex-grow pl-4">
                <div class="bg-gray-800 rounded-full w-fit px-2 py-1 mb-2">
                  <h2
                    class="
                      font-medium
                      title-font
                      text-sm text-gray-400
                      tracking-wider
                    "
                  >
                    Jan 2022 - May 2022
                  </h2>
                </div>

                <h1
                  class="
                    font-semibold
                    title-font
                    text-lg text-gray-100
                    mb-1
                    tracking-wider
                    uppercase
                  "
                >
                  Web Developer Intern
                </h1>
                <p class="leading-relaxed text-gray-400">
                  College of Computer Studies
                  <span class="italic">in partnership with </span>
                  Commision On Higher Education Region V
                </p>
              </div>
            </div>
            <div class="flex relative pb-14">
              <div
                class="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div class="h-full w-px bg-gray-800 pointer-events-none"></div>
              </div>
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-emerald-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
              >
                <AcademicCapIcon class="h-6 w-6" />
              </div>
              <div class="flex-grow pl-4">
                <div class="bg-gray-800 rounded-full w-fit px-2 py-1 mb-2">
                  <h2
                    class="
                      font-medium
                      title-font
                      text-sm text-gray-400
                      tracking-wider
                    "
                  >
                    2016-2018
                  </h2>
                </div>

                <h1
                  class="
                    font-semibold
                    title-font
                    text-lg text-gray-100
                    mb-1
                    tracking-wider
                    uppercase
                  "
                >
                  Senior Highschool
                </h1>
                <p class="leading-relaxed text-gray-400">
                  Ateneo de Naga University ·
                  <span class="font-bold text-emerald-400">
                    Second Honors
                  </span>
                </p>
              </div>
            </div>
            <div class="flex relative">
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-emerald-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
              >
                <AcademicCapIcon class="h-6 w-6" />
              </div>
              <div class="flex-grow pl-4">
                <div class="bg-gray-800 rounded-full w-fit px-2 py-1 mb-2">
                  <h2
                    class="
                      font-medium
                      title-font
                      text-sm text-gray-400
                      tracking-wider
                    "
                  >
                    2012-2016
                  </h2>
                </div>

                <h1
                  class="
                    font-semibold
                    title-font
                    text-lg text-gray-100
                    mb-1
                    tracking-wider
                    uppercase
                  "
                >
                  Highschool
                </h1>
                <p class="leading-relaxed text-gray-400">
                  Ateneo de Naga University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .percentage-animation {
    visibility: visible;
    animation: progress 1500ms ease-in 1;
  }
}
@keyframes progress {
  from {
    width: 0;
  }
}
</style>

<script>
import GradientText from "@/utils/GradientText.vue";
import {
  DocumentDownloadIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/vue/solid";

export default {
  data() {
    return {
      observer: null,
      pdfUrl: "./files/CV_Mangaoang.pdf",
      skills: [
        { name: "HTML5", percentage: "100%" },
        { name: "CSS3", percentage: "80%" },
        { name: "Tailwind.css", percentage: "85%" },
        { name: "Boostrap", percentage: "80%" },
        { name: "Javascript", percentage: "90%" },
        { name: "Vue.js", percentage: "90%" },
        { name: "jQuery", percentage: "80%" },
        { name: "Parse Platform", percentage: "90%" },
        { name: "Laravel", percentage: "80%" },
        { name: "PHP", percentage: "80%" },
        { name: "Java", percentage: "80%" },
        { name: "Kotlin", percentage: "90%" },
        { name: "Flutter", percentage: "60%" },
        { name: "C++", percentage: "75%" },
        { name: "Oracle DB", percentage: "75%" },
        { name: "PostgreSQL", percentage: "75%" },
        { name: "MySQL", percentage: "70%" },
        { name: "MongoDB", percentage: "70%" },
      ],
    };
  },
  created() {
    this.observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("percentage-animation");
        }
      });
    });
  },
  mounted() {
    const bars =this.$el.querySelectorAll(".percentage")
    bars.forEach(bar => this.observer.observe(bar));
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  components: {
    GradientText,
    DocumentDownloadIcon,
    AcademicCapIcon,
    BriefcaseIcon,
  },
};
</script>