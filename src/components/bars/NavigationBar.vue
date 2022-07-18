<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="z-10">
    <Popover v-slot="{ close }" class="relative">
      <div class="container mx-auto max-w-screen-lg px-4 sm:px-6">
        <div
          class="
            flex
            justify-between
            items-center
            py-6
            md:justify-start md:space-x-10
          "
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">rjmangaoang</span>
              <img
                class="h-8 w-auto sm:h-10"
                :src="logo"
                @mouseover="logo = logoEmerald"
                @mouseleave="logo = logoWhite"
                alt="logo"
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton
              class="
                bg-slate-800
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-600
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-emerald-500
              "
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden md:flex space-x-10 mx-auto mt-2">
            <!-- <div v-for="(navItem, index) in navItems" :key="index">
              <router-link :to="navItem.href" exact
                class="text-base font-medium text-slate-100  hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md"
                
              > 
                {{ navItem.name }} 
              </router-link>
            </div> -->
            <ul class="flex gap-x-3 font-medium items-center text-gray-200">
              <li
                class="group pl-6"
                v-for="(navItem, index) in navItems"
                :key="index"
              >
                <button
                  @click="scrollTo(navItem.link)"
                  class="cursor-pointer pt-0.5 font-header hover:text-white"
                >
                  {{ navItem.name }}
                </button>

                <span
                  class="
                    block
                    h-0.5
                    w-full
                    bg-transparent
                    group-hover:bg-emerald-400
                    mt-1
                  "
                ></span>
              </li>
            </ul>
          </PopoverGroup>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div>
          <PopoverPanel
            focus
            class="
              z-10
              absolute
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top-right
              md:hidden
            "
          >
            <div
              class="
                rounded-lg
                shadow-lg
                ring-1 ring-slate-400 ring-opacity-5
                bg-slate-800
                divide-y-2 divide-gray-700
              "
            >
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto sm:h-10"
                      :src="logoEmerald"
                      alt="logo"
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      id="popoverButton"
                      class="
                        bg-slate-800
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-600
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-emerald-500
                      "
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <!-- <div class="mt-6">
                  <nav class="grid gap-y-8">
                    <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-emerald-600" aria-hidden="true" />
                      <span class="ml-3 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </span>
                    </a>
                  </nav>
                </div> -->
              </div>
              <div class="py-6 px-5 space-y-6">
                <div class="grid grid-row gap-y-2 gap-x-3 w-full">
                  <button
                    v-for="(navItem, index) in navItems"
                    :key="index"
                    @click="mobileScrollTo(navItem.link, close)"
                    class="
                      w-full
                      uppercase
                      text-center
                      font-medium
                      text-gray-100
                      focus:text-white
                      hover:bg-emerald-500
                      focus:bg-emerald-500
                      p-2
                      rounded-md
                    "
                  >
                    {{ navItem.name }}
                  </button>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </div>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { XIcon, MenuIcon } from "@heroicons/vue/outline";
</script>

<script>
export default {
  data() {
    return {
      logoWhite: require("@/assets/svg/rjmangaoang.svg"),
      logoEmerald: require("@/assets/svg/rjmangaoangEmerald.svg"),
      logo: require("@/assets/svg/rjmangaoang.svg"),
      navItems: [
        {
          name: "Home",
          link: "#top",
        },
        {
          name: "About Me",
          link: "#aboutme",
        },
        {
          name: "My Projects",
          link: "#myprojects",
        },
        {
          name: "Contact Me",
          link: "#contactme",
        },
      ],
    };
  },
  methods: {
    scrollTo(el) {
      this.$emit("scrollToElement", el);
    },
    mobileScrollTo(el, close) {
      this.$emit("scrollToElement", el, close);
    },
  },
};
</script>

<style scoped>
.router-link-exact-active,
.router-link-exact-active:hover {
  color: theme("colors.emerald.500");
  font-weight: bold;
  background-color: transparent !important;
}
</style>
