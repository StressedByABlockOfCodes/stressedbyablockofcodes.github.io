<template>
  <div class="container mx-auto max-w-screen-lg relative pt-22 pb-12 px-3 py-6">
    <div class="mb-6 text-4xl font-bold text-center sm:text-left">
      My&nbsp;<gradient-text>Projects</gradient-text>
    </div>

    <div class="grid grid-cols-1 gap-y-10 md:gap-6 md:grid-cols-3">
      <div v-for="(proj, index) in projects" :key="index" class="hover:translate-y-1">
        <a :href="proj.link" >
          <div class="overflow-hidden rounded-md bg-slate-800 h-full">
            <div class="aspect-w-3 aspect-h-2">
              <img :src="require('@/assets/projects/'+proj.img)" :alt="proj.title" class="h-full w-full object-cover object-center"/>
              <div class="px-3 pt-4 pb-6 text-center">
                <h2 class="text-xl font-semibold">{{ proj.title }}</h2>
                <div class="mt-1 text-xs text-gray-400">{{ proj.date }}</div>
                <div class="mt-2 text-sm flex flex-row flex-wrap items-center justify-center">
                  <language-text v-for="(lang, i) in proj.languages" :key="i" :name="lang" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import GradientText from "@/utils/GradientText.vue"
import LanguageText from "@/utils/LanguageText.vue"

export default {
  data() {
    return {
      projects: [
        { title: "NSTP System",
          link: "https://github.com/MaricelFornaleza/ched/tree/ren",
          img: "NSTPLandingPage.jpg",
          date: "Jan 2022 - May 2022",
          languages: ["Vue.js", "Parse Platform", "Tailwind CSS", "MongoDB",]
        },
        { title: "eLIKAS",
          link: "https://github.com/MaricelFornaleza/eLIKASapp/tree/ren",
          img: "eLIKASBanner.jpg",
          date: "Jun 2021 - Dec 2021",
          languages: ["Laravel", "PHP","jQuery", "PostgreSQL",]
        },
        { title: "Lifeline",
          link: "https://github.com/Dreivax36/lifeline_integrated",
          img: "Lifeline.jpg",
          date: "Aug 2020 - Dec 2020",
          languages: ["Flutter", "Dart", "API",]
        },
        { title: "ML Guide App",
          link: "https://github.com/StressedByABlockOfCodes/ML-Guide-App-v0.2",
          img: "ML_login.png",
          date: "Jun 2020 - July 2020",
          languages: ["Kotlin", "Firebase",]
        }
      ]
    }
  },
  components: {
    GradientText,
    LanguageText
  },
}
</script>